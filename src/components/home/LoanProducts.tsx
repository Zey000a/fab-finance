import { Link } from "wouter"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Wallet, Building2, CreditCard,
  GraduationCap, Car, RefreshCw, ArrowRight,
} from "lucide-react"
import { calculateLoan } from "@/utils/loanCalculator"

const CREDITS = [
  {
    icon: Wallet,
    title: "Prêt personnel",
    description: "Financez n'importe quel projet de vie sans justificatif.",
    exampleAmount: 10000,
    exampleDuration: 48,
    href: "/loans/personnel",
    accent: "#3b82f6",   // blue
    accentBg: "#eff6ff",
  },
  {
    icon: Building2,
    title: "Prêt professionnel",
    description: "Développez votre activité avec un financement flexible.",
    exampleAmount: 20000,
    exampleDuration: 60,
    href: "/loans/pro",
    accent: "#8b5cf6",   // violet
    accentBg: "#f5f3ff",
  },
  {
    icon: CreditCard,
    title: "Prêt conso",
    description: "Réalisez vos achats avec une solution simple et rapide.",
    exampleAmount: 5000,
    exampleDuration: 36,
    href: "/loans/conso",
    accent: "#f59e0b",   // amber
    accentBg: "#fffbeb",
  },
  {
    icon: GraduationCap,
    title: "Prêt étudiant",
    description: "Financez vos études et investissez dans votre avenir.",
    exampleAmount: 8000,
    exampleDuration: 60,
    href: "/loans/etudiant",
    accent: "#0ea5e9",   // sky
    accentBg: "#f0f9ff",
  },
  {
    icon: Car,
    title: "Prêt auto",
    description: "Achetez votre véhicule neuf ou d'occasion au meilleur taux.",
    exampleAmount: 15000,
    exampleDuration: 60,
    href: "/loans/auto",
    accent: "#16a34a",   // green
    accentBg: "#f0fdf4",
  },
  {
    icon: RefreshCw,
    title: "Rachat de crédit",
    description: "Regroupez vos crédits et allégez vos mensualités.",
    exampleAmount: 25000,
    exampleDuration: 84,
    href: "/loans/rachat",
    accent: "#ef4444",   // rose
    accentBg: "#fef2f2",
  },
]

export default function LoanProducts() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.05] blur-3xl"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-4">
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
            Nos produits
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos solutions de financement
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Survolez une carte pour voir une estimation instantanée de votre mensualité.
          </p>
        </motion.div>

        {/* ── Grille ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CREDITS.map((credit, i) => {
            const Icon = credit.icon
            const { monthlyPayment } = calculateLoan(
              credit.exampleAmount,
              credit.exampleDuration,
              0.045
            )
            const isHovered = hovered === i

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={credit.href}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative overflow-hidden rounded-2xl border cursor-pointer h-full flex flex-col transition-all duration-300"
                    style={{
                      background: isHovered ? credit.accentBg : "white",
                      borderColor: isHovered ? credit.accent + "44" : "#f3f4f6",
                      boxShadow: isHovered
                        ? `0 20px 40px ${credit.accent}22`
                        : "0 2px 12px rgba(0,0,0,0.05)",
                      transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    }}
                  >
                    {/* Barre colorée en haut */}
                    <div
                      className="h-1 w-full transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${credit.accent}, ${credit.accent}88)`,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />

                    <div className="p-5 flex flex-col flex-grow">

                      {/* Icône */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 mx-auto"
                        style={{
                          background: isHovered ? credit.accent : credit.accentBg,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{ color: isHovered ? "white" : credit.accent }}
                        />
                      </div>

                      {/* Contenu animé */}
                      <div className="flex-grow relative min-h-[90px]">
                        <AnimatePresence mode="wait" initial={false}>

                          {/* État normal */}
                          {!isHovered && (
                            <motion.div
                              key="normal"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.18 }}
                              className="absolute inset-0 flex flex-col"
                            >
                              <p className="text-sm font-bold text-gray-900 text-center mb-2">
                                {credit.title}
                              </p>
                              <p className="text-xs text-gray-500 text-center leading-relaxed">
                                {credit.description}
                              </p>
                            </motion.div>
                          )}

                          {/* État hover — simulation */}
                          {isHovered && (
                            <motion.div
                              key="sim"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.18 }}
                              className="absolute inset-0 flex flex-col items-center justify-center text-center"
                            >
                              <p className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                                style={{ color: credit.accent + "aa" }}>
                                Exemple
                              </p>

                              <p className="text-xs text-gray-600 mb-3">
                                {credit.exampleAmount.toLocaleString("fr-FR")} €
                                <span className="text-gray-400"> · </span>
                                {credit.exampleDuration} mois
                              </p>

                              <div
                                className="text-3xl font-extrabold"
                                style={{ color: credit.accent }}
                              >
                                {monthlyPayment.toFixed(0)} €
                              </div>

                              <p className="text-[11px] text-gray-400 mt-1">
                                / mois estimé
                              </p>
                            </motion.div>
                          )}

                        </AnimatePresence>
                      </div>

                      {/* Lien bas */}
                      <div className="mt-4 flex items-center justify-center gap-1 transition-all duration-200"
                        style={{ opacity: isHovered ? 1 : 0.4 }}>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: credit.accent }}
                        >
                          Voir l'offre
                        </span>
                        <ArrowRight
                          className="w-3 h-3 transition-transform duration-200"
                          style={{
                            color: credit.accent,
                            transform: isHovered ? "translateX(3px)" : "translateX(0)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/simulateur"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
            }}
          >
            Comparer toutes nos offres
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}