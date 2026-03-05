import { useState, useMemo } from "react";
import { calculateLoan } from "@/utils/loanCalculator";
import { Link } from "wouter";
import { Calculator, ArrowRight } from "lucide-react";

interface Props {
  defaultAmount?: number
  defaultDuration?: number
}

export default function LoanInlineSimulator({
  defaultAmount = 15000,
  defaultDuration = 60
}: Props) {

  const [amount, setAmount] = useState(defaultAmount);
  const [duration, setDuration] = useState(defaultDuration);

  const rate = 0.045;

  const { monthlyPayment, totalPaid, totalInterest } = useMemo(() => {
    return calculateLoan(amount, duration, rate);
  }, [amount, duration]);

  return (
    <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 text-primary rounded-lg">
          <Calculator className="w-5 h-5"/>
        </div>
        <h2 className="text-2xl font-bold">
          Simulez votre prêt
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Controls */}
        <div className="space-y-6">

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                Montant
              </span>
              <span className="font-bold text-primary">
                {amount.toLocaleString()} €
              </span>
            </div>

            <input
              type="range"
              min="1000"
              max="100000"
              step="500"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                Durée
              </span>
              <span className="font-bold text-primary">
                {duration} mois
              </span>
            </div>

            <input
              type="range"
              min="6"
              max="120"
              step="6"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

        </div>

        {/* Result */}
        <div className="bg-gray-900 text-white rounded-3xl p-8">

          <div className="text-sm text-gray-400 mb-2">
            Mensualité estimée
          </div>

          <div className="text-4xl font-black mb-6">
            {monthlyPayment.toFixed(2)} €
          </div>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Total remboursé</span>
              <span>{totalPaid.toFixed(2)} €</span>
            </div>

            <div className="flex justify-between">
              <span>Intérêts</span>
              <span className="text-primary">
                {totalInterest.toFixed(2)} €
              </span>
            </div>

            <div className="flex justify-between">
              <span>TAEG</span>
              <span>4.5%</span>
            </div>

          </div>

          <Link
            href="/simulateur"
            className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-xl font-bold hover:shadow-lg transition"
          >
            Demander un prêt
            <ArrowRight className="w-4 h-4"/>
          </Link>

        </div>

      </div>

    </section>
  );
}