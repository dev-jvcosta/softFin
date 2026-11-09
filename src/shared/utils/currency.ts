const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/**
 * Formata valor inteiro em centavos para moeda BRL (ou oculta quando Modo Discreto Q9 está ativo).
 */
export function formatCentsBRL(cents: number, privacyMode = false): string {
  if (privacyMode) {
    return 'R$ •••••';
  }
  return brlFormatter.format(cents / 100);
}

/**
 * Q1: Cálculo de Parcelas Dinâmicas com Arredondamento Residual na 1ª Parcela
 * e redistribuição proporcional caso o usuário informe uma 1ª parcela customizada (entrada).
 */
export function calculateDynamicInstallments(
  totalAmountInCents: number,
  installmentTotal: number,
  customFirstInstallmentInCents?: number
): number[] {
  const count = Math.max(1, Math.floor(installmentTotal));
  if (count === 1) {
    return [totalAmountInCents];
  }

  if (
    customFirstInstallmentInCents !== undefined &&
    customFirstInstallmentInCents > 0 &&
    customFirstInstallmentInCents < totalAmountInCents
  ) {
    const remainingTotal = totalAmountInCents - customFirstInstallmentInCents;
    const remainingCount = count - 1;
    const baseNext = Math.floor(remainingTotal / remainingCount);
    const remainder = remainingTotal - baseNext * remainingCount;

    const result: number[] = [customFirstInstallmentInCents];
    for (let i = 0; i < remainingCount; i++) {
      // Eventual resíduo da redistribuição vai para a primeira parcela aberta subsequente (parcela 2)
      result.push(i === 0 ? baseNext + remainder : baseNext);
    }
    return result;
  }

  const baseInstallment = Math.floor(totalAmountInCents / count);
  const remainder = totalAmountInCents - baseInstallment * count;

  return Array.from({ length: count }, (_, idx) =>
    idx === 0 ? baseInstallment + remainder : baseInstallment
  );
}

/**
 * Q6: Limite máximo de parcelas conforme estado de conectividade
 * - Offline: até 12x (protege a fila PendingWrites do Firestore)
 * - Online: até 48x
 */
export function getMaxInstallmentsAllowed(isOnline: boolean): number {
  return isOnline ? 48 : 12;
}

