export function calculateLoan(amount: number, duration: number, rate: number) {
  const monthlyRate = rate / 12

  const round = (v: number) => Math.round(v * 100) / 100

  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -duration))

  const totalPaid = round(monthlyPayment * duration)
  const totalInterest = round(totalPaid - amount)

  return {
    monthlyPayment: round(monthlyPayment),
    totalPaid,
    totalInterest,
  }
}
