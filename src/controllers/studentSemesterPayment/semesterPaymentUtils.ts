export const calculateLateFee = (baseAmount: number, date: Date): number => {
  const day = date.getDate();
  if (day <= 10) return 0;

  const weekLate = Math.floor((day - 11) / 7) + 1; // +5% per week after day 10
  const feePercent = 5 * weekLate;
  return Math.floor((baseAmount * feePercent) / 100);
};
