import { motion } from "framer-motion"
import { ClipboardList, SearchCheck, Banknote, ArrowRight } from "lucide-react"
import { Link } from "wouter"

const STEPS = [
  {
    icon:  ClipboardList,
    title: "Faites votre demande",
    desc:  "Remplissez notre formulaire sécurisé en quelques minutes, depuis n'importe quel appareil.",
    tag:   "2 min",
    color: "#16a34a",
    bg:    "#f0fdf4",
  },
  {
    icon:  SearchCheck,
    title: "Analyse rapide",
    desc:  "Nos experts analysent votre dossier immédiatement et vous donnent une réponse de principe.",
    tag:   "Immédiat",
    color: "#3b82f6",
    bg:    "#eff6ff",
  },
  {
    icon:  Banknote,
    title: "Recevez les fonds",
    desc:  "Après validation, les fonds sont disponibles sur votre compte sous 24 à 48 heures.",
    tag:   "24 – 48h",
    color: "#8b5cf6",
    bg:    "#f5f3ff",
  },
]

export default function LoanSteps() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-10 bg-white rounded-3xl border border-gray-100 overflow-hidden"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
    >
      {/* Header */}
      <div className="px-8 md:px-10 pt-8 md:pt-10 pb-8">
        <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          Processus simplifié
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Comment obtenir votre prêt ?
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          3 étapes simples pour financer votre projet.
        </p>
      </div>

      {/* Steps */}
      <div className="px-8 md:px-10 pb-8">
        <div className="grid md:grid-cols-3 gap-0 relative">

          {/* Ligne de connexion desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px z-0">
            <div className="h-full border-t-2 border-dashed border-gray-200" />
          </div>

          {STEPS.map(({ icon: Icon, title, desc, tag, color, bg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center px-6 pb-6 group"
            >
              {/* Numéro + icône */}
              <div className="relative mb-5">
                {/* Cercle externe pulsant */}
                <div
                  className="absolute inset-0 rounded-full opacity-20 scale-125 group-hover:scale-150 transition-transform duration-500"
                  style={{ background: bg }}
                />
                <div
                  className="relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  style={{
                    background: bg,
                    border: `1.5px solid ${color}22`,
                    boxShadow: `0 4px 20px ${color}18`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                  {/* Numéro badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[11px] font-extrabold text-white flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
                  >
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Tag durée */}
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{ background: bg, color }}
              >
                {tag}
              </span>

              <h3 className="font-extrabold text-gray-900 text-base mb-2">
                {title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div
        className="px-8 md:px-10 py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #f9fafb 100%)" }}
      >
        <p className="text-sm text-gray-500 text-center sm:text-left">
          Prêt à commencer ?{" "}
          <span className="text-gray-700 font-semibold">
            Votre demande ne prend que 2 minutes.
          </span>
        </p>
        <Link
          href="/simulateur"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
            boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
          }}
        >
          Faire ma demande
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.section>
  )
}