import { Link } from "wouter"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function HeroSection() {

  const { t } = useI18n()

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-900 overflow-hidden">

      {/* background image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=2000"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/60"/>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="max-w-3xl"
        >

          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-sm mb-6">
            <ShieldCheck className="w-4 h-4 text-primary"/>
            100% sécurisé
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Financez vos projets simplement
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            Simulez votre prêt en quelques secondes et obtenez une réponse
            immédiate. Transparent, rapide et sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              href="/simulateur"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition"
            >
              Simuler mon prêt
              <ArrowRight className="w-5 h-5"/>
            </Link>

            <Link
              href="/loans/personnel"
              className="px-8 py-4 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition"
            >
              Découvrir les prêts
            </Link>

          </div>

          {/* trust badges */}
          <div className="flex gap-6 mt-10 text-sm text-gray-300">

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary"/>
              Réponse immédiate
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary"/>
              Données sécurisées
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}