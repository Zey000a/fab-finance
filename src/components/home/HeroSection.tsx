import { Link } from "wouter"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Clock, TrendingUp, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gray-950 overflow-hidden">

      {/* ── Background image avec overlay multicouche ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400"
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "saturate(0.7)" }}
        />
        {/* Couche 1 : assombrissement général */}
        <div className="absolute inset-0 bg-gray-950/70" />
        {/* Couche 2 : dégradé directionnel gauche → droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-transparent" />
        {/* Couche 3 : accent vert subtil en haut à gauche */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)" }}
        />
        {/* Couche 4 : accent vert subtil bas droite */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Ligne décorative verticale ── */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-green-500/60 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Colonne texte ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-7"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
                Réponse en moins de 2 minutes
              </span>
            </motion.div>

            {/* Titre principal */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              Financez{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                vos projets
              </span>
              <br />
              simplement.
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Simulez votre prêt en quelques secondes, obtenez une réponse
              immédiate.{" "}
              <span className="text-white font-medium">
                Transparent, rapide, sans engagement.
              </span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/simulateur"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  boxShadow: "0 8px 32px rgba(22,163,74,0.45)",
                }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                Simuler mon prêt
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/loans/personnel"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white text-base border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Découvrir les prêts
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: Clock, label: "Réponse immédiate" },
                { icon: ShieldCheck, label: "Données sécurisées" },
                { icon: Users, label: "+12 000 clients" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <Icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Colonne stats flottantes ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-5 items-end"
          >
            {/* Carte principale */}
            <div
              className="w-72 p-6 rounded-2xl border border-white/10 backdrop-blur-xl"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Taux à partir de</span>
                <span className="flex items-center gap-1 text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" /> Compétitif
                </span>
              </div>
              <div className="text-4xl font-extrabold text-white mb-1">
                3<span className="text-2xl text-green-400">%</span>
              </div>
              <div className="text-gray-500 text-xs">TAEG · Sous conditions</div>

              <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-bold text-white">500€</div>
                  <div className="text-gray-500 text-xs mt-0.5">Montant min.</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">75 000€</div>
                  <div className="text-gray-500 text-xs mt-0.5">Montant max.</div>
                </div>
              </div>
            </div>

            {/* Carte secondaire — approbation rapide */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="w-64 p-5 rounded-2xl border border-green-500/20 backdrop-blur-xl"
              style={{
                background: "rgba(22,163,74,0.08)",
                boxShadow: "0 4px 24px rgba(22,163,74,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(22,163,74,0.2)" }}
                >
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">100% sécurisé</div>
                  <div className="text-gray-400 text-xs mt-0.5">Vos données protégées</div>
                </div>
              </div>
            </motion.div>

            {/* Indicateur de confiance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="w-56 p-4 rounded-2xl border border-white/10 backdrop-blur-xl flex items-center gap-3"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {/* Avatars empilés */}
              <div className="flex -space-x-2">
                {["1568602846736-460fe4bbb653","1607746882042-944635dfe10e","1472099645785-5658abf4ff4e"].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${id}?w=40&h=40&fit=crop&crop=face`}
                    className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
                    alt=""
                  />
                ))}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">12 000+</div>
                <div className="text-gray-400 text-xs">clients satisfaits</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Vague décorative bas de section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 64L480 20L960 48L1440 0V64H0Z"
            fill="currentColor"
            className="text-gray-50 dark:text-gray-950"
            style={{ fill: "#f9fafb" }}
          />
        </svg>
      </div>
    </section>
  )
}