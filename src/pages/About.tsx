import { motion } from "framer-motion"
import { Users, Target, Award, Globe2, ArrowRight, CheckCircle2, Zap, ShieldCheck } from "lucide-react"
import { Link } from "wouter"

const STATS = [
  { value: "1M+",  label: "Clients satisfaits",        sub: "depuis 2016"          },
  { value: "5Md€", label: "Projets financés",           sub: "en volume cumulé"     },
  { value: "4.8/5",label: "Note TrustPilot",            sub: "+12 000 avis vérifiés"},
  { value: "48h",  label: "Délai moyen de versement",   sub: "après accord"         },
]

const VALUES = [
  {
    icon: Users,
    title: "L'Humain au centre",
    text: "La technologie nous aide à être rapides, mais ce sont nos conseillers qui font la différence par leur écoute et leur disponibilité.",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: Target,
    title: "Transparence totale",
    text: "Pas de jargon, pas de frais cachés. Vous savez exactement ce que vous payez dès le premier jour, sans mauvaise surprise.",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Award,
    title: "Excellence du service",
    text: "Nous visons la perfection dans chaque interaction pour vous offrir la meilleure expérience de financement possible.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: Globe2,
    title: "Impact positif",
    text: "Nous finançons prioritairement les projets de transition énergétique et d'amélioration de l'habitat durable.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
]

const TIMELINE = [
  { year: "2016", event: "Fondation de FabFinance à Paris avec une mission claire : démocratiser le crédit." },
  { year: "2018", event: "Lancement du simulateur en ligne — réponse de principe en moins de 2 minutes." },
  { year: "2020", event: "Franchissement du cap des 100 000 clients et obtention de l'agrément ORIAS." },
  { year: "2022", event: "Expansion européenne et lancement des prêts professionnels et étudiants." },
  { year: "2024", event: "1 million de clients satisfaits et 5 milliards d'euros de projets financés." },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative bg-gray-950 overflow-hidden pt-24 pb-32">

        {/* Fond image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
            alt="Équipe FabFinance"
            className="w-full h-full object-cover opacity-25"
            style={{ filter: "saturate(0.6)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 blur-3xl rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-7"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-bold uppercase tracking-widest">
              Fondée en 2016 · Paris
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Réinventer le crédit{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              pour tous
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            FabFinance s'est donnée pour mission de rendre le financement
            accessible, transparent et équitable. Fini la complexité bancaire
            traditionnelle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/simulateur"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                boxShadow: "0 8px 28px rgba(22,163,74,0.45)",
              }}
            >
              Simuler mon prêt
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-base border border-white/20 bg-white/8 hover:bg-white/15 transition-all duration-200"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS BAND
      ══════════════════════════════ */}
      <section className="bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800/40 rounded-2xl overflow-hidden -mt-1"
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.3)" }}
          >
            {STATS.map(({ value, label, sub }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900 px-8 py-10 text-center"
              >
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {value}
                </div>
                <div className="text-white font-semibold text-sm">{label}</div>
                <div className="text-gray-500 text-xs mt-1">{sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-gray-950 to-white" />
      </section>

      {/* ══════════════════════════════
          MISSION
      ══════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="absolute -top-5 -left-5 w-full h-full rounded-3xl opacity-60"
                style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop"
                  alt="Notre équipe"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3.5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Agréé ORIAS</div>
                      <div className="text-xs text-gray-400">Intermédiaire en crédit</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-5">
                <span className="w-5 h-0.5 bg-green-500 rounded-full" />
                Notre mission
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Le financement{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  autrement
                </span>
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Nous croyons que chaque projet mérite d'être financé simplement.
                C'est pourquoi nous avons construit une plateforme qui allie la
                puissance de la technologie à la chaleur de l'accompagnement humain.
              </p>

              <p className="text-gray-500 leading-relaxed mb-8">
                Notre engagement : zéro frais cachés, zéro jargon bancaire, et une
                réponse de principe en moins de 2 minutes — 7 jours sur 7.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  "Simulation gratuite et sans engagement",
                  "Conseillers disponibles 7j/7",
                  "Déblocage des fonds en 48h",
                  "Zéro frais de dossier",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/simulateur"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  boxShadow: "0 6px 20px rgba(22,163,74,0.35)",
                }}
              >
                Commencer ma simulation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          VALEURS
      ══════════════════════════════ */}
      <section className="py- bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-4">
              <span className="w-5 h-0.5 bg-green-500 rounded-full" />
              Ce qui nous anime
              <span className="w-5 h-0.5 bg-green-500 rounded-full" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Nos valeurs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {VALUES.map(({ icon: Icon, title, text, color, bg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TIMELINE
      ══════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-4">
              <span className="w-5 h-0.5 bg-green-500 rounded-full" />
              Notre histoire
              <span className="w-5 h-0.5 bg-green-500 rounded-full" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              8 ans d'innovation
            </h2>
          </motion.div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-green-500/60 via-green-300/30 to-transparent" />

            <div className="space-y-10">
              {TIMELINE.map(({ year, event }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  {/* Année */}
                  <div className="flex-shrink-0 w-[60px] text-right">
                    <span
                      className="text-sm font-extrabold"
                      style={{
                        background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-md mt-0.5 relative z-10" />

                  {/* Texte */}
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 flex-grow hover:border-green-200 hover:shadow-md transition-all duration-200">
                    <p className="text-gray-700 text-sm leading-relaxed">{event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA FINAL
      ══════════════════════════════ */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-15 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Zap className="w-10 h-10 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Rejoignez l'aventure
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Plus d'un million de clients nous font déjà confiance. À votre tour
            de concrétiser vos projets avec FabFinance.
          </p>
          <Link
            href="/simulateur"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 8px 32px rgba(22,163,74,0.45)",
            }}
          >
            Simuler mon prêt gratuitement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}