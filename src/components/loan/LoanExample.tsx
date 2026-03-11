import { motion } from "framer-motion"
import { Landmark, Percent, ArrowRight } from "lucide-react"
import { Link } from "wouter"

// Calcul avec TAEG 3% annuel
const AMOUNT    = 15_000
const MONTHS    = 120
const r         = 0.03 / 12
const monthly   = +(AMOUNT * (r * Math.pow(1 + r, MONTHS)) / (Math.pow(1 + r, MONTHS) - 1)).toFixed(2)
const total     = +(monthly * MONTHS).toFixed(2)
const interests = +(total - AMOUNT).toFixed(2)

const ROWS = [
  { label: "TAEG fixe",       value: "3,00%",                                   highlight: false },
  { label: "Taux débiteur",   value: "2,96%",                                   highlight: false },
  { label: "Total remboursé", value: `${total.toLocaleString("fr-FR")} €`,      highlight: false },
  { label: "Coût du crédit",  value: `${interests.toLocaleString("fr-FR")} €`,  highlight: true  },
]

export default function LoanExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="my-10 relative rounded-3xl overflow-hidden"
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.12)" }}
    >
      {/* Fond dark */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2744 50%, #0f2a1a 100%)" }}
      />

      {/* Halos */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-10 blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />

      {/* Watermark */}
      <div className="absolute top-6 right-6 opacity-[0.05] pointer-events-none">
        <Landmark className="w-36 h-36 text-white" />
      </div>

      <div className="relative z-10 p-8 md:p-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(22,163,74,0.25)", border: "1px solid rgba(22,163,74,0.4)" }}
          >
            <Percent className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Exemple de financement</h2>
            <p className="text-xs text-gray-400 mt-0.5">Simulation indicative · TAEG fixe 3%</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Gauche */}
          <div>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Pour un emprunt de{" "}
              <span className="font-bold text-white">{AMOUNT.toLocaleString("fr-FR")} €</span>{" "}
              sur une période de{" "}
              <span className="font-bold text-white">{MONTHS} mois</span>.
            </p>

            {/* Mensualité */}
            <div className="mb-6">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">
                Mensualité estimée
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-extrabold text-white"
              >
                {monthly.toFixed(2).replace(".", ",")}
                <span className="text-green-400 text-3xl"> €</span>
              </motion.div>
              <div className="text-xs text-gray-500 mt-2">/ mois · sur {MONTHS} mois</div>
            </div>

            {/* Barre capital / intérêts */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>Capital remboursé</span>
                <span>Coût des intérêts</span>
              </div>
              <div className="h-2.5 rounded-full overflow-hidden bg-white/10 flex">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(AMOUNT / total) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="h-full"
                  style={{ background: "linear-gradient(90deg, #16a34a, #22c55e)" }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(interests / total) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1.5">
                <span className="text-green-400 font-semibold">
                  {((AMOUNT / total) * 100).toFixed(0)}% capital
                </span>
                <span className="text-gray-500">
                  {((interests / total) * 100).toFixed(0)}% intérêts
                </span>
              </div>
            </div>

            <Link
              href="/simulateur"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                boxShadow: "0 6px 20px rgba(22,163,74,0.40)",
              }}
            >
              Simuler mon montant
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Droite — tableau */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="px-6 py-4 border-b border-white/10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Détail du crédit
              </p>
            </div>

            <div className="px-6 py-2">
              {ROWS.map(({ label, value, highlight }, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-3.5 ${
                    i < ROWS.length - 1 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-400">{label}</span>
                  <span className={`text-sm font-bold ${highlight ? "text-green-400" : "text-white"}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/10">
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Simulation non contractuelle. TAEG fixe de 3,00% sur 120 mois.
                Un crédit vous engage et doit être remboursé.
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}