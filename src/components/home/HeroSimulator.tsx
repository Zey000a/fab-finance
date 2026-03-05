import { useState, useMemo } from "react"
import { calculateLoan } from "@/utils/loanCalculator"
import { Link } from "wouter"
import { Percent, ArrowRight } from "lucide-react"

export default function HeroSimulator() {

  const [amount, setAmount] = useState(10000)
  const [duration, setDuration] = useState(48)

  const { monthlyPayment } = useMemo(() => {
    return calculateLoan(amount, duration, 0.045)
  }, [amount, duration])

  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6 items-center">

        {/* SIMULATOR */}

        <div className="bg-white p-10 rounded-3xl shadow-xl border">

          <h2 className="text-2xl font-bold mb-8">
            Simulez votre crédit 
          </h2>

          {/* amount */}

          <div className="mb-8">

            <div className="flex justify-between text-sm mb-2">
              <span>Montant souhaité</span>
              <span className="font-bold text-primary">
                {amount.toLocaleString()} €
              </span>
            </div>

            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={amount}
              onChange={(e)=>setAmount(parseInt(e.target.value))}
              className="w-full accent-primary"
            />

          </div>

          {/* duration */}

          <div className="mb-8">

            <div className="flex justify-between text-sm mb-2">
              <span>Durée</span>
              <span className="font-bold text-primary">
                {duration} mois
              </span>
            </div>

            <input
              type="range"
              min="6"
              max="84"
              step="6"
              value={duration}
              onChange={(e)=>setDuration(parseInt(e.target.value))}
              className="w-full accent-primary"
            />

          </div>

          {/* monthly payment */}

          <div className="bg-gray-900 text-white p-6 rounded-2xl mb-8">

            <div className="text-sm text-gray-400">
              Mensualité estimée
            </div>

            <div className="text-3xl font-bold">
              {monthlyPayment.toFixed(2)} €
            </div>

            <div className="text-xs text-gray-400 mt-2 flex items-center gap-2">
              <Percent className="w-3 h-3"/>
              TAEG fixe indicatif : 4.5%
            </div>

          </div>

          {/* CTA */}

          <Link
            href="/simulateur"
            className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Trouver mon crédit
            <ArrowRight className="w-4 h-4"/>
          </Link>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement.
          </p>

        </div>

        {/* RIGHT SIDE MARKETING */}

        <div>

          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
            Pour vos projets
          </p>

          <h3 className="text-4xl font-bold mt-4">
            Financez ce qui compte vraiment
          </h3>

          <p className="text-gray-600 mt-4 max-w-md">
            Voiture, travaux, études ou voyage : NovaFinance vous accompagne
            avec des solutions de financement simples, rapides et transparentes.
          </p>

          <div className="mt-8">

            <div className="text-5xl font-black text-primary">
              4.7%
            </div>

            <p className="text-gray-500">
              TAEG fixe à partir de
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}