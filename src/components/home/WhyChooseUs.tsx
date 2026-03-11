import { ShieldCheck, Zap, HeartHandshake, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const ITEMS = [
  {
    icon: Zap,
    title: "Réponse rapide",
    desc: "Obtenez une réponse de principe en quelques minutes. Pas d'attente, pas de paperasse inutile.",
    stat: "2 min",
    statLabel: "réponse de principe",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: ShieldCheck,
    title: "100% sécurisé",
    desc: "Vos données sont chiffrées et protégées par des technologies bancaires de dernière génération.",
    stat: "256-bit",
    statLabel: "chiffrement SSL",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement humain",
    desc: "Nos conseillers dédiés vous guident à chaque étape, de la simulation à la signature.",
    stat: "7j/7",
    statLabel: "conseillers disponibles",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: TrendingUp,
    title: "Taux compétitifs",
    desc: "Des solutions transparentes adaptées à votre profil. Zéro frais cachés, zéro mauvaise surprise.",
    stat: "3%",
    statLabel: "TAEG à partir de",
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-white overflow-hidden relative">

      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.035] blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-4">
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
            Nos engagements
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Pourquoi choisir{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FabFinance ?
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Technologie et expertise humaine réunies pour une expérience de
            financement simple, rapide et fiable.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map(({ icon: Icon, title, desc, stat, statLabel, color, bg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent flex flex-col"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Barre colorée top */}
              <div
                className="h-1 w-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
              />

              <div className="p-7 flex flex-col flex-grow">

                {/* Icône */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6 transition-colors duration-300" style={{ color }} />
                </div>

                {/* Stat chiffre */}
                <div className="mb-5">
                  <div
                    className="text-3xl font-extrabold leading-none"
                    style={{ color }}
                  >
                    {stat}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">
                    {statLabel}
                  </div>
                </div>

                {/* Séparateur */}
                <div
                  className="h-px w-full mb-5 transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, ${color}33, transparent)` }}
                />

                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {desc}
                </p>
              </div>

              {/* Fond coloré au hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: bg, mixBlendMode: "multiply" }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bande de réassurance ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 rounded-2xl border border-gray-100 bg-gray-50 px-8 py-6 flex flex-wrap items-center justify-between gap-6"
        >
          {[
            { value: "+200 000", label: "projets financés" },
            { value: "48h",      label: "déblocage des fonds" },
            { value: "4.8/5",    label: "satisfaction client" },
            { value: "0€",       label: "frais de dossier" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center flex-1 min-w-[100px]">
              <div
                className="text-2xl font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}