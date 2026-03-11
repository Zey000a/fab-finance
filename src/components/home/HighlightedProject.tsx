import { useState, useEffect, useRef } from "react"
import { Link } from "wouter"
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Star, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    title: "Achetez la voiture de vos rêves",
    subtitle: "Prêt auto",
    description:
      "Neuf ou d'occasion, obtenez un financement rapide avec un taux compétitif. Réponse en moins de 2 minutes.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2400&auto=format&fit=crop",
    href: "/simulateur?type=auto",
    cta: "Simuler mon prêt auto",
    tag: "Dès 3,9% TAEG",
    color: "#3b82f6",
  },
  {
    title: "Transformez votre maison",
    subtitle: "Travaux & rénovation",
    description:
      "Cuisine, salle de bain, extension… Financez vos travaux jusqu'à 75 000€ avec des mensualités adaptées.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
    href: "/simulateur?type=travaux",
    cta: "Financer mes travaux",
    tag: "Jusqu'à 75 000€",
    color: "#f59e0b",
  },
  {
    title: "Le monde vous appartient",
    subtitle: "Voyage & évasion",
    description:
      "Bali, Islande, Japon… Ne laissez plus le budget freiner vos aventures. Partez maintenant, remboursez sereinement.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2400&auto=format&fit=crop",
    href: "/simulateur?type=voyage",
    cta: "Financer mon voyage",
    tag: "Réponse immédiate",
    color: "#0ea5e9",
  },
  {
    title: "Investissez dans votre avenir",
    subtitle: "Études & formation",
    description:
      "Master, école de commerce, formation pro — accédez aux meilleures formations sans contrainte financière.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2400&auto=format&fit=crop",
    href: "/simulateur?type=etudiant",
    cta: "Financer mes études",
    tag: "Taux préférentiel",
    color: "#8b5cf6",
  },
]

export default function HighlightedProject() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused]   = useState(false)
  const [dir, setDir]         = useState(1) // 1 = forward, -1 = backward
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const go = (next: number, direction = 1) => {
    setDir(direction)
    setIndex(next)
  }

  const goNext = () => go((index + 1) % slides.length, 1)
  const goPrev = () => go(index === 0 ? slides.length - 1 : index - 1, -1)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(goNext, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, index])

  const slide = slides[index]

  const imageVariants = {
    enter: (d: number) => ({ x: d > 0 ? "4%" : "-4%", opacity: 0, scale: 1.04 }),
    center: { x: "0%", opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d > 0 ? "-4%" : "4%", opacity: 0, scale: 0.98 }),
  }

  const textVariants = {
    enter: { opacity: 0, y: 18 },
    center: { opacity: 1, y: 0 },
    exit:  { opacity: 0, y: -12 },
  }

  return (
    <section
      className="py-10 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
            Projets à la une
            <span className="w-5 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Quel est votre prochain projet ?
          </h2>
        </div>

        {/* ── Slider ── */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl flex-shrink-0">

            <AnimatePresence mode="sync" custom={dir}>
              <motion.img
                key={index}
                src={slide.image}
                alt={slide.title}
                custom={dir}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease: [0.32, 0, 0.16, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Badge rating */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-gray-400 text-xs">· +200 000 clients</span>
            </div>

            {/* Badge sécurité */}
            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-800">100% sécurisé</span>
            </div>

            {/* Taux en bas à gauche */}
            <div className="absolute bottom-5 left-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index + "tag"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="inline-block text-sm font-bold text-white px-4 py-1.5 rounded-full"
                    style={{ background: slide.color + "cc" }}
                  >
                    {slide.tag}
                  </span>
                  <p className="text-white/80 text-xs mt-2 ml-1">Sans engagement · Gratuit</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation flèches */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Progress bar auto */}
            {!paused && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                <motion.div
                  key={index + "bar"}
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </div>
            )}
          </div>

          {/* CONTENU TEXTE */}
          <div className="relative">

            {/* Tabs de navigation */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={{
                    background: i === index ? slide.color : "#f3f4f6",
                    color: i === index ? "white" : "#6b7280",
                    boxShadow: i === index ? `0 4px 14px ${slide.color}44` : "none",
                  }}
                >
                  {s.subtitle}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index + "text"}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                  {slide.title}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                  {slide.description}
                </p>

                {/* Preuves sociales */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: Star,         text: "Noté 4.8/5 par nos clients" },
                    { icon: Clock,        text: "Réponse en 2 minutes" },
                    { icon: ShieldCheck,  text: "Données 100% sécurisées" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>

                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${slide.color} 0%, ${slide.color}cc 100%)`,
                    boxShadow: `0 8px 24px ${slide.color}44`,
                  }}
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Pagination dots */}
            <div className="flex gap-2.5 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "28px" : "8px",
                    background: i === index ? slide.color : "#d1d5db",
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}