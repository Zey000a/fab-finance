import { useState, useEffect, useRef } from "react"
import { Link } from "wouter"
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react"

const slides = [
  {
    title: "Acheter une voiture",
    subtitle: "Projet populaire",
    description:
      "Financez votre véhicule neuf ou d'occasion rapidement avec une solution simple et flexible.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
    href: "/simulateur?type=auto",
    cta: "Simuler mon prêt auto",
  },
  {
    title: "Rénover votre maison",
    subtitle: "Travaux & rénovation",
    description:
      "Améliorez votre logement avec un financement adapté à vos projets.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000",
    href: "/simulateur?type=travaux",
    cta: "Financer mes travaux",
  },
  {
    title: "Partir en voyage",
    subtitle: "Expériences de vie",
    description:
      "Réalisez le voyage dont vous rêvez grâce à un financement rapide.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000",
    href: "/simulateur?type=voyage",
    cta: "Financer mon voyage",
  },
  {
    title: "Financer ses études",
    subtitle: "Études & formation",
    description:
      "Investissez dans votre avenir avec un financement étudiant adapté.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000",
    href: "/simulateur?type=etudiant",
    cta: "Financer mes études",
  },
]

export default function HighlightedProjectsSlider() {

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {

    if (paused) return

    intervalRef.current = setInterval(() => {
      next()
    }, 4500)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

  }, [paused])

  const slide = slides[index]

  return (

    <section className="py-10 bg-white">

      <div
        className="max-w-7xl mx-auto px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="relative rounded-3xl overflow-hidden shadow-xl">

            <img
              src={slide.image}
              className="w-full h-[420px] object-cover"
            />

            {/* gradient overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"/>

            {/* marketing overlay */}

            <div className="absolute bottom-6 left-6 text-white">

              <p className="text-sm uppercase tracking-wider opacity-80">
                Pour vos projets
              </p>

              <p className="text-4xl font-black mt-1">
                4.7%
              </p>

              <p className="text-sm opacity-90">
                TAEG fixe à partir de
              </p>

            </div>

            {/* confiance */}

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow text-sm flex items-center gap-2">

              <Star className="w-4 h-4 text-yellow-500"/>

              <span className="font-semibold">
                4.8 / 5
              </span>

              <span className="text-gray-500">
                +200 000 projets financés
              </span>

            </div>

            {/* sécurité */}

            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-2 text-sm shadow">

              <ShieldCheck className="w-4 h-4 text-green-600"/>

              <span className="font-medium">
                100% sécurisé
              </span>

            </div>

            {/* navigation */}

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronRight />
            </button>

          </div>


          {/* CONTENT */}

          <div>

            <span className="text-primary text-sm font-semibold uppercase">
              {slide.subtitle}
            </span>

            <h2 className="text-4xl font-bold mt-3">
              {slide.title}
            </h2>

            <p className="text-gray-600 mt-6 max-w-lg">
              {slide.description}
            </p>

            {/* preuve sociale secondaire */}

            <div className="flex items-center gap-3 mt-6 text-sm">

              <div className="flex text-yellow-500">
                <Star className="w-4 h-4"/>
                <Star className="w-4 h-4"/>
                <Star className="w-4 h-4"/>
                <Star className="w-4 h-4"/>
                <Star className="w-4 h-4"/>
              </div>

              <span className="text-gray-600">
                Noté 4.8/5 par nos clients
              </span>

            </div>

            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              {slide.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>


        {/* pagination */}

        <div className="flex justify-center gap-3 mt-10">

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full transition ${
                i === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  )
}