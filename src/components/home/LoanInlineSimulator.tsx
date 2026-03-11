import { useState, useMemo } from "react"
import { calculateLoan } from "@/utils/loanCalculator"
import { Link } from "wouter"
import { Calculator, ArrowRight, Percent, ShieldCheck, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  defaultAmount?:   number
  defaultDuration?: number
}

export default function LoanInlineSimulator({
  defaultAmount   = 15000,
  defaultDuration = 60,
}: Props) {
  const [amount,   setAmount]   = useState(defaultAmount)
  const [duration, setDuration] = useState(defaultDuration)
  const rate = 0.045

  const { monthlyPayment, totalPaid, totalInterest } = useMemo(
    () => calculateLoan(amount, duration, rate),
    [amount, duration]
  )

  const amountPct   = ((amount   - 1000) / (100000 - 1000)) * 100
  const durationPct = ((duration - 6)    / (120    - 6))    * 100

  return (
    <section
      className="relative rounded-3xl overflow-hidden border border-gray-100"
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.09)" }}
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-white pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-8 md:p-10">

        {/* ── Header ── */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
          >
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">Simulez votre prêt</h2>
            <p className="text-xs text-gray-400 mt-0.5">Estimation instantanée · Sans engagement</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* ── Sliders ── */}
          <div className="space-y-8">

            {/* Montant */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm font-semibold text-gray-500">Montant souhaité</span>
                <span className="text-2xl font-extrabold text-gray-900">
                  {amount.toLocaleString("fr-FR")}
                  <span className="text-green-600 text-lg"> €</span>
                </span>
              </div>

              <div className="relative h-2 rounded-full bg-gray-100">
                <div
                  className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
                  style={{
                    width: `${amountPct}%`,
                    background: "linear-gradient(90deg, #16a34a, #22c55e)",
                  }}
                />
                <input
                  type="range" min="1000" max="100000" step="500"
                  value={amount}
                  onChange={e => setAmount(parseInt(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-green-500 shadow-md pointer-events-none transition-all duration-150"
                  style={{ left: `calc(${amountPct}% - 10px)` }}
                />
              </div>

              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>1 000 €</span>
                <span>100 000 €</span>
              </div>
            </div>

            {/* Durée */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm font-semibold text-gray-500">Durée de remboursement</span>
                <span className="text-2xl font-extrabold text-gray-900">
                  {duration}
                  <span className="text-green-600 text-lg"> mois</span>
                </span>
              </div>

              <div className="relative h-2 rounded-full bg-gray-100">
                <div
                  className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
                  style={{
                    width: `${durationPct}%`,
                    background: "linear-gradient(90deg, #16a34a, #22c55e)",
                  }}
                />
                <input
                  type="range" min="6" max="120" step="6"
                  value={duration}
                  onChange={e => setDuration(parseInt(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-green-500 shadow-md pointer-events-none transition-all duration-150"
                  style={{ left: `calc(${durationPct}% - 10px)` }}
                />
              </div>

              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>6 mois</span>
                <span>120 mois</span>
              </div>
            </div>

            {/* Garanties */}
            <div className="flex flex-col gap-2 pt-2">
              {["Sans frais de dossier", "Réponse immédiate"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Résultat ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
          >
            {/* Mensualité */}
            <div className="px-7 pt-7 pb-5">
              <div className="text-gray-400 text-xs mb-1.5 uppercase tracking-wider">
                Mensualité estimée
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={monthlyPayment.toFixed(2)}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl font-extrabold text-white"
                >
                  {monthlyPayment.toFixed(2)}
                  <span className="text-green-400 text-2xl"> €</span>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
                <Percent className="w-3 h-3 text-green-500" />
                TAEG fixe indicatif : 4,5%
              </div>
            </div>

            {/* Détail */}
            <div className="mx-7 border-t border-white/10 py-5 space-y-3">
              {[
                { label: "Montant emprunté",  value: `${amount.toLocaleString("fr-FR")} €`,      color: "text-white"     },
                { label: "Total remboursé",   value: `${totalPaid.toFixed(2)} €`,                color: "text-gray-300"  },
                { label: "Coût des intérêts", value: `${totalInterest.toFixed(2)} €`,            color: "text-green-400" },
                { label: "Durée",             value: `${duration} mois`,                         color: "text-gray-300"  },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{label}</span>
                  <span className={`text-sm font-semibold ${color}`}>{value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-7 pb-7">
              <Link
                href="/simulateur"
                className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  boxShadow: "0 6px 20px rgba(22,163,74,0.40)",
                }}
              >
                Demander mon prêt
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 mt-3">
                <ShieldCheck className="w-3 h-3 text-gray-500" />
                <span className="text-[11px] text-gray-500">
                  Simulation non contractuelle
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}