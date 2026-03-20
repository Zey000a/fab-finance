import { Star, ShieldCheck, Users, BadgeCheck, TrendingUp, Quote } from "lucide-react"
import { motion } from "framer-motion"

const STATS = [
  {
    icon: Users,
    value: "+200 000",
    label: "projets financés",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Star,
    value: "4.8 / 5",
    label: "satisfaction clients",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: TrendingUp,
    value: "48h",
    label: "délai de déblocage",
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "plateforme sécurisée",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
]

const REVIEWS = [
  {
    name: "Sophie M.",
    role: "Prêt personnel · 12 000€",
    avatar: "1494790108377-be9c29b29330",
    text: "Demande ultra simple et réponse en quelques minutes. J'ai obtenu mon financement en moins de 48h. Je recommande les yeux fermés !",
    stars: 5,
  },
  {
    name: "Lucas B.",
    role: "Prêt auto · 18 000€",
    avatar: "1500648767791-00dcc994a43e",
    text: "Interface claire et transparente. La simulation m'a permis de comprendre immédiatement le coût réel de mon crédit. Aucune mauvaise surprise.",
    stars: 5,
    featured: true,
  },
  {
    name: "Claire D.",
    role: "Travaux · 25 000€",
    avatar: "1438761681033-6461ffad8d80",
    text: "Service client vraiment professionnel et disponible. Ils m'ont accompagnée de A à Z pour financer ma rénovation. Merci FabFinance !",
    stars: 5,
  },
]

export default function TrustSection() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden relative">

      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] opacity-[0.05] blur-3xl rounded-full"
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
            Preuve sociale
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Ils nous font{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              confiance
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Des milliers de clients font confiance à FabFinance pour financer
            leurs projets personnels et professionnels.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map(({ icon: Icon, value, label, color, bg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: bg }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div
                className="text-2xl font-extrabold"
                style={{ color }}
              >
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Reviews ── */}
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                review.featured
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-100"
              }`}
              style={{
                boxShadow: review.featured
                  ? "0 20px 60px rgba(0,0,0,0.18)"
                  : "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Guillemet décoratif */}
              <Quote
                className={`w-8 h-8 mb-4 opacity-20 ${review.featured ? "text-green-400" : "text-gray-400"}`}
              />

              {/* Étoiles */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.stars)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texte */}
              <p
                className={`text-sm leading-relaxed flex-grow mb-6 ${
                  review.featured ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {review.text}
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3">
                <img
                  src={`https://images.unsplash.com/photo-${review.avatar}?w=48&h=48&fit=crop&crop=face`}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-green-500/30"
                />
                <div>
                  <div
                    className={`text-sm font-bold flex items-center gap-1.5 ${
                      review.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {review.name}
                    <BadgeCheck className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div
                    className={`text-xs mt-0.5 ${
                      review.featured ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    {review.role}
                  </div>
                </div>
              </div>

              {/* Badge "mis en avant" */}
              {review.featured && (
                <div className="absolute top-5 right-5 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Coup de ❤️
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Bande de logos confiance ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 rounded-2xl bg-white border border-gray-100 px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
        >
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest w-full text-center mb-1">
            Reconnu et certifié par
          </span>
          {["ORIAS", "Banque de France", "ACPR", "RGPD Compliant"].map(name => (
            <div
              key={name}
              className="flex items-center gap-2 text-sm font-semibold text-gray-500"
            >
              <ShieldCheck className="w-4 h-4 text-green-500" />
              {name}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
