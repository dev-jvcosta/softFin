/**
 * Retorna a data atual no formato ISO YYYY-MM-DD.
 */
export function getTodayISODate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Adiciona `monthsToAdd` meses a uma string YYYY-MM.
 */
export function addMonthsToCompetence(yearMonth: string, monthsToAdd: number): string {
  const [y, m] = yearMonth.split('-').map(Number);
  const date = new Date(y, m - 1 + monthsToAdd, 1);
  const nextYear = date.getFullYear();
  const nextMonth = String(date.getMonth() + 1).padStart(2, '0');
  return `${nextYear}-${nextMonth}`;
}

/**
 * Q4: Calcula o mês de competência da fatura (`statementId` YYYY-MM)
 * levando em conta o `closingDay` do cartão de crédito.
 * Compras feitas em `dia >= closingDay` caem automaticamente na fatura do mês seguinte.
 */
export function resolveStatementCompetenceMonth(
  transactionDateISO: string,
  closingDay?: number
): string {
  const [yearStr, monthStr, dayStr] = transactionDateISO.split('-');
  const baseYearMonth = `${yearStr}-${monthStr}`;
  const day = Number(dayStr);

  if (closingDay && day >= closingDay) {
    return addMonthsToCompetence(baseYearMonth, 1);
  }
  return baseYearMonth;
}

/**
 * Q3 & Q7: Retorna os 3 meses da janela deslizante ativa (mês anterior, atual e próximo)
 * e os 3 meses de materialização de Contas Fixas (mês atual + próximos 2 meses).
 */
export function getActiveSlidingWindowMonths(referenceYearMonth: string): {
  listenerMonths: [string, string, string];
  recurringMonths: [string, string, string];
} {
  return {
    listenerMonths: [
      addMonthsToCompetence(referenceYearMonth, -1),
      referenceYearMonth,
      addMonthsToCompetence(referenceYearMonth, 1),
    ],
    recurringMonths: [
      referenceYearMonth,
      addMonthsToCompetence(referenceYearMonth, 1),
      addMonthsToCompetence(referenceYearMonth, 2),
    ],
  };
}

