export function calculateLoanBank(
  amount: number,
  duration: number,
  rate: number
) {
  const monthlyRate = rate / 100 / 12

  const round = (v: number) => Number(v.toFixed(2))

  // Mensualité calculée puis arrondie
  const rawMonthly =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -duration))

  const monthlyPayment = round(rawMonthly)

  let balance = amount
  let totalInterest = 0

  for (let i = 0; i < duration; i++) {
    const interest = round(balance * monthlyRate)
    const principal = round(monthlyPayment - interest)

    balance = round(balance - principal)
    totalInterest = round(totalInterest + interest)
  }

  const totalPaid = round(monthlyPayment * duration)

  return {
    monthlyPayment,
    totalPaid,
    totalInterest,
  }
}
