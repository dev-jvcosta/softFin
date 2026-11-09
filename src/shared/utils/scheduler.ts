/**
 * Cede controle de volta à main thread com detecção de feature `scheduler.yield()`
 * e fallback obrigatório `setTimeout` para Safari / navegadores sem suporte.
 */
export async function yieldToMain(): Promise<void> {
  if (typeof window !== 'undefined' && 'scheduler' in window && window.scheduler && 'yield' in window.scheduler) {
    await window.scheduler.yield();
  } else {
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
  }
}

/**
 * Processa listas financeiras longas respeitando o orçamento de 50ms por task (INP < 100ms).
 */
export async function processInChunksWithYield<T, R>(
  items: readonly T[],
  processor: (item: T, index: number) => R
): Promise<R[]> {
  const results: R[] = [];
  let deadline = performance.now() + 50;

  for (let i = 0; i < items.length; i++) {
    results.push(processor(items[i], i));

    if (performance.now() >= deadline) {
      if (typeof window !== 'undefined' && 'scheduler' in window && window.scheduler && 'yield' in window.scheduler) {
        await window.scheduler.yield();
      } else {
        await new Promise<void>((resolve) => setTimeout(resolve, 0));
      }
      deadline = performance.now() + 50;
    }
  }

  return results;
}

