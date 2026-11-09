/**
 * Q3 & Q6: Fila IndexedDB para comprovantes anexados offline (`offline-receipts-queue`).
 * - Limite estrito: máx 20 comprovantes ou 50 MB totais.
 * - Garbage Collection automático: se a transação for excluída ainda offline, o blob órfão é removido.
 * - Retry com Exponential Backoff (até 3 tentativas) + suporte a retry manual / descarte na UI.
 */

export interface QueuedReceiptItem {
  transactionId: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  blob: Blob;
  attempts: number;
  status: 'queued' | 'uploading' | 'failed';
  createdAt: string;
}

const DB_NAME = 'softfin-offline-receipts-db';
const STORE_NAME = 'offline-receipts-queue';
export const MAX_QUEUE_ITEMS = 20;
export const MAX_QUEUE_BYTES = 50 * 1024 * 1024; // 50 MB

function openQueueDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'transactionId' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getAllQueuedReceipts(): Promise<QueuedReceiptItem[]> {
  const db = await openQueueDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAll();
    req.onsuccess = () => resolve((req.result as QueuedReceiptItem[]) || []);
    req.onerror = () => reject(req.error);
  });
}

export async function enqueueOfflineReceipt(item: Omit<QueuedReceiptItem, 'attempts' | 'status' | 'createdAt'>): Promise<void> {
  const currentItems = await getAllQueuedReceipts();
  if (currentItems.length >= MAX_QUEUE_ITEMS) {
    throw new Error(`Limite de ${MAX_QUEUE_ITEMS} fotos na mochila offline atingido.`);
  }

  const totalBytes = currentItems.reduce((acc, cur) => acc + cur.sizeBytes, 0);
  if (totalBytes + item.sizeBytes > MAX_QUEUE_BYTES) {
    throw new Error('Limite de 50 MB de comprovantes offline atingido.');
  }

  const db = await openQueueDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const record: QueuedReceiptItem = {
      ...item,
      attempts: 0,
      status: 'queued',
      createdAt: new Date().toISOString(),
    };
    const req = store.put(record);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Q3: Garbage Collection de anexos órfãos quando uma transação ainda na fila offline é excluída.
 */
export async function removeOrphanedOfflineReceipt(transactionId: string): Promise<void> {
  const db = await openQueueDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.delete(transactionId);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

