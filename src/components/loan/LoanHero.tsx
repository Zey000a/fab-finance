import { Link } from "wouter"
import { motion } from "framer-motion"

interface Props {
  title: string
  img: string
  tagline?: string
}

export default function LoanHero({ title, img, tagline }: Props) {

  return (

    <section className="relative h-[400px] flex items-center overflow-hidden">

      <div className="absolute inset-0">

        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <Link
            href="/"
            className="text-primary hover:underline text-sm font-medium mb-6 inline-block"
          >
            ← Retour
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            {tagline ?? `La solution NovaFinance pour ${title.toLowerCase()} :
            transparence, rapidité et accompagnement humain pour tous vos projets.`}
          </p>

        </motion.div>

      </div>

    </section>

  )
}