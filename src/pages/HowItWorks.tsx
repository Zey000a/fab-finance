import { motion } from "framer-motion"
import { Link } from "wouter"
import {
  Calculator, ClipboardList, UserCheck, FileCheck2,
  PenLine, Banknote, ArrowRight, ShieldCheck, Clock,
  CheckCircle2, HelpCircle, Phone, Star, Zap, Lock, HeartHandshake,
} from "lucide-react"

// ─────────────────────────────────────────────
// DONNÉES
// ─────────────────────────────────────────────

const STEPS = [
  {
    number: "01",
    icon: Calculator,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Simulez votre prêt",
    subtitle: "Moins de 2 minutes",
    desc: "Indiquez le montant souhaité, la durée de remboursement et votre projet. Notre simulateur calcule instantanément votre mensualité estimée et le coût total de votre crédit.",
    details: [
      "Aucun engagement à cette étape",
      "Résultat instantané, 100% gratuit",
      "Modifiez les paramètres librement",
    ],
    image: "1554224155-6726b3ff858f",
  },
  {
    number: "02",
    icon: ClipboardList,
    color: "#3b82f6",
    bg: "#eff6ff",
    title: "Complétez votre demande",
    subtitle: "5 à 10 minutes",
    desc: "Renseignez votre situation personnelle et professionnelle dans notre formulaire sécurisé. Nos conseillers ont besoin de ces informations pour étudier votre dossier au mieux.",
    details: [
      "Formulaire 100% en ligne et sécurisé",
      "Données chiffrées SSL 256-bit",
      "Sauvegarde automatique à chaque étape",
    ],
    image: "1551434678-e196c2de7c53",
  },
  {
    number: "03",
    icon: UserCheck,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Étude de votre dossier",
    subtitle: "Réponse sous 24h",
    desc: "Un conseiller FabFinance dédié analyse votre dossier et vous contacte par téléphone ou WhatsApp pour affiner votre offre et répondre à toutes vos questions.",
    details: [
      "Conseiller personnel attitré",
      "Contact par téléphone ou WhatsApp",
      "Analyse humaine, pas automatisée",
    ],
    image: "1573496359142-b8d87734a5a2",
  },
  {
    number: "04",
    icon: FileCheck2,
    color: "#f59e0b",
    bg: "#fffbeb",
    title: "Recevez votre offre",
    subtitle: "Sous 48h",
    desc: "Vous recevez votre offre de prêt personnalisée par email avec toutes les conditions détaillées : TAEG, mensualités, durée, et coût total. Prenez le temps de lire.",
    details: [
      "Offre détaillée et transparente",
      "TAEG et conditions claires",
      "Délai de réflexion sans pression",
    ],
    image: "1450101499163-c8848c66ca85",
  },
  {
    number: "05",
    icon: PenLine,
    color: "#0ea5e9",
    bg: "#f0f9ff",
    title: "Signez votre contrat",
    subtitle: "Signature électronique",
    desc: "Si l'offre vous convient, vous disposez d'un délai légal de rétractation de 14 jours. À l'issue de ce délai, confirmez votre acceptation par signature électronique sécurisée.",
    details: [
      "Délai légal de rétractation 14 jours",
      "Signature électronique certifiée eIDAS",
      "Zéro déplacement, 100% en ligne",
    ],
    image: "1450101499163-c8848c66ca85",
  },
  {
    number: "06",
    icon: Banknote,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Recevez vos fonds",
    subtitle: "Virement sous 24–48h",
    desc: "Une fois votre contrat signé et le délai de rétractation écoulé, les fonds sont versés directement sur votre compte bancaire. Votre projet peut démarrer !",
    details: [
      "Virement bancaire sécurisé",
      "Fonds disponibles sous 24 à 48h",
      "Notification par SMS et email",
    ],
    image: "1579621970795-87facc2f976d",
  },
]

const GUARANTEES = [
  { icon: Zap,           color: "#16a34a", title: "Rapidité",       desc: "Réponse de principe en 2 minutes, fonds sous 48h après signature."     },
  { icon: Lock,          color: "#3b82f6", title: "Sécurité",       desc: "Vos données sont chiffrées SSL 256-bit et jamais revendues à des tiers." },
  { icon: HeartHandshake,color: "#8b5cf6", title: "Accompagnement", desc: "Un conseiller dédié vous suit de la simulation au versement des fonds."  },
  { icon: ShieldCheck,   color: "#f59e0b", title: "Transparence",   desc: "Zéro frais cachés, faible frais de dossier. Le TAEG est affiché dès le départ." },
]

const FAQS = [
  {
    q: "Combien de temps dure le processus complet ?",
    a: "De la simulation au versement des fonds, le processus prend généralement entre 5 et 10 jours ouvrés, en tenant compte du délai légal de rétractation de 14 jours. En cas d'urgence, contactez-nous directement par WhatsApp.",
  },
  {
    q: "Quels documents dois-je préparer ?",
    a: "Pièce d'identité, 3 derniers bulletins de salaire (ou justificatifs de revenus), justificatif de domicile récent et RIB. Tout se transmet en ligne, en quelques clics.",
  },
  {
    q: "Ma demande engage-t-elle à quoi que ce soit ?",
    a: "Non. La simulation et la demande de dossier sont totalement gratuites et sans engagement. Vous n'êtes engagé qu'après avoir signé votre contrat, et vous disposez encore d'un délai de rétractation de 14 jours.",
  },
  {
    q: "Puis-je suivre l'avancement de mon dossier ?",
    a: "Oui. Votre conseiller FabFinance vous tient informé à chaque étape par téléphone, email ou WhatsApp. Vous pouvez le contacter directement à tout moment.",
  },
]

// ─────────────────────────────────────────────
// COMPOSANT
// ─────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-gray-950 pt-24 pb-32 overflow-hidden">
        {/* Halo vert */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />
        {/* Grille décorative */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
                Processus 100% transparent
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Comment obtenir<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)" }}
              >
                votre prêt ?
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              De la simulation au versement des fonds, découvrez chaque étape de notre processus.
              Simple, rapide et entièrement accompagné par nos conseillers.
            </p>

            {/* Stats hero */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: "2 min",     label: "pour simuler"    },
                { value: "24h",       label: "réponse dossier" },
                { value: "14 jours",  label: "rétractation"    },
                { value: "Faible",       label: "frais de dossier"},
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-2xl font-extrabold text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #16a34a)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vague bas */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" className="w-full h-[72px]">
            <path d="M0 72L480 32L960 56L1440 8V72H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ÉTAPES ── */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            6 étapes simples
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Le parcours FabFinance
          </h2>
        </motion.div>

        <div className="space-y-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Contenu texte */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Numéro grand */}
                    <span
                      className="text-6xl font-extrabold leading-none opacity-10"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    {/* Icône */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: step.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    {/* Badge durée */}
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: step.bg, color: step.color }}
                    >
                      <Clock className="w-3 h-3 inline mr-1" />
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-5">
                    {step.desc}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((d, di) => (
                      <li key={di} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Carte visuelle */}
                <div className="flex-1 max-w-sm w-full">
                  <div
                    className="relative rounded-3xl overflow-hidden h-56"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.color}22`,
                      boxShadow: `0 8px 32px ${step.color}18`,
                    }}
                  >
                    {/* Fond avec icône géante */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <Icon className="w-48 h-48" style={{ color: step.color }} />
                    </div>

                    {/* Badge étape */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-extrabold"
                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Contenu carte */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className="rounded-2xl px-4 py-3"
                        style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
                      >
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Étape {step.number}
                        </p>
                        <p className="text-sm font-extrabold text-gray-900">{step.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" style={{ color: step.color }} />
                          <span className="text-xs font-semibold" style={{ color: step.color }}>
                            {step.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Connecteur → suivant */}
                    {i < STEPS.length - 1 && (
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                          style={{ background: "white", border: `2px solid ${step.color}44` }}
                        >
                          <ArrowRight className="w-4 h-4 rotate-90" style={{ color: step.color }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── GARANTIES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
              Nos engagements
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Pourquoi choisir FabFinance ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5">
            {GUARANTEES.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color + "15" }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-extrabold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVIS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-4xl font-extrabold text-gray-900 mb-1">4,8 / 5</p>
            <p className="text-gray-400 text-sm">Basé sur +12 000 avis clients vérifiés</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Marie L.",  text: "Tout s'est passé exactement comme décrit. Mon conseiller était joignable à chaque étape.", avatar: "1438761681033-6461ffad8d80" },
              { name: "Thomas R.", text: "Du formulaire au virement, 4 jours seulement. Incroyable pour un prêt de cette taille.",   avatar: "1500648767791-00dcc994a43e" },
              { name: "Sophia K.", text: "Enfin un organisme de crédit qui explique clairement chaque étape sans jargon.",             avatar: "1494790108377-be9c29b29330" },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2.5">
                  <img
                    src={`https://images.unsplash.com/photo-${r.avatar}?w=40&h=40&fit=crop&crop=face`}
                    alt={r.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-green-500/20"
                  />
                  <span className="text-sm font-bold text-gray-900">{r.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
            >
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Questions fréquentes</h2>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-100 p-6"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2e1a 100%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6"
        >
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">
              Prêt à commencer ?
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Simulez votre prêt maintenant
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Gratuit, sans engagement, réponse en 2 minutes.
            Votre conseiller vous contacte sous 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/simulateur"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                boxShadow: "0 8px 32px rgba(22,163,74,0.45)",
              }}
            >
              Démarrer ma simulation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/33612345678?text=Bonjour%20FabFinance%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20prêts."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm border border-white/20 bg-white/8 hover:bg-white/15 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Parler à un conseiller
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {[
              { icon: ShieldCheck, label: "100% sécurisé"      },
              { icon: Clock,       label: "Réponse en 2 min"   },
              { icon: CheckCircle2,label: "Sans engagement"     },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon className="w-3.5 h-3.5 text-green-500" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}
