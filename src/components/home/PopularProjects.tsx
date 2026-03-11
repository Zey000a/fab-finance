import { Link } from "wouter"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Acheter une voiture",
    description: "Financez votre véhicule neuf ou d'occasion avec un taux compétitif.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    href: "/loans/auto",
    tag: "Dès 3%",
    emoji: "🚗",
  },
  {
    title: "Faire des travaux",
    description: "Rénovez votre maison avec un financement flexible et rapide.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
    href: "/loans/personnel",
    tag: "Jusqu'à 75 000€",
    emoji: "🏠",
  },
  {
    title: "Partir en voyage",
    description: "Réalisez le voyage dont vous rêvez sans attendre.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
    href: "/loans/conso",
    tag: "Réponse immédiate",
    emoji: "✈️",
  },
  {
    title: "Financer des études",
    description: "Investissez dans votre avenir avec un prêt étudiant sur mesure.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2400&auto=format&fit=crop",
    href: "/loans/etudiant",
    tag: "Taux préférentiel",
    emoji: "🎓",
  },
  {
    title: "Organiser un mariage",
    description: "Préparez votre grand jour en toute sérénité.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
    href: "/loans/personnel",
    tag: "Sans frais de dossier",
    emoji: "💍",
  },
]

export default function PopularProjects() {
  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden">

      {/* Fond décoratif */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

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
            Vos projets de vie
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Donnez vie à vos projets
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Des solutions de financement pensées pour chaque étape de votre vie.
          </p>
        </motion.div>

        {/* ── Grille de cartes ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={p.href}>
                <div className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-200"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay dégradé sur l'image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Emoji en haut à gauche */}
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-lg shadow-sm">
                      {p.emoji}
                    </div>

                    {/* Tag badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block text-[11px] font-bold text-white bg-green-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-grow">
                      {p.description}
                    </p>

                    {/* Lien */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-green-600 group-hover:text-green-700">
                        En savoir plus
                      </span>
                      <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center transition-all duration-300 group-hover:bg-green-600">
                        <ArrowRight className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bordure verte animée en bas */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── CTA global ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
            Simuler mon prêt gratuitement
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-gray-400 mt-3">
            Sans engagement · Réponse en moins de 2 minutes
          </p>
        </motion.div>

      </div>
    </section>
  )
}