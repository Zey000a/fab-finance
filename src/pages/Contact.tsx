import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { MapPin, Phone, Mail, CheckCircle2, Loader2, ArrowRight, Clock, MessageSquare, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName:  z.string().min(2, "Le nom est requis"),
  email:     z.string().email("Adresse email invalide"),
  phone:     z.string().optional(),
  subject:   z.string().min(2, "Le sujet est requis"),
  message:   z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactForm = z.infer<typeof contactSchema>

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Siège social",
    lines: ["123 Avenue de la Finance", "75008 Paris, France"],
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+33 605 662 921", "Lun–Ven, 9h–18h · Gratuit"],
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@fabfinancec.com", "Réponse sous 24h"],
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
]

const QUICK_LINKS = [
  { icon: Zap,           label: "Simuler mon prêt",   href: "/simulateur",      color: "#16a34a" },
  // { icon: MessageSquare, label: "FAQ",                 href: "#faq",             color: "#f59e0b" },
  // { icon: Clock,         label: "Suivi de dossier",   href: "/espace-client",   color: "#0ea5e9" },
]

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:bg-white"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess]       = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    console.log("Form data:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 6000)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative bg-gray-950 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
            style={{ filter: "saturate(0.5)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-15 blur-3xl rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-bold uppercase tracking-widest">
              Nous sommes là pour vous
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            Contactez{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              notre équipe
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-xl mx-auto"
          >
            Nos experts sont disponibles 7j/7 pour répondre à toutes vos
            questions sur vos projets de financement.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTENU PRINCIPAL
      ══════════════════════════════ */}
      <section className="relative bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

          <div className="grid lg:grid-cols-3 gap-8 -mt-12 relative z-10">

            {/* ── COLONNE GAUCHE ── */}
            <div className="space-y-5">

              {/* Infos de contact */}
              {CONTACT_INFO.map(({ icon: Icon, title, lines, color, bg }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4 items-start shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h3>
                    {lines.map((line, j) => (
                      <p key={j} className={`text-sm ${j === 0 ? "text-gray-700 font-medium" : "text-gray-400"}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Liens rapides */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              >
                <h3 className="font-bold text-gray-900 text-sm mb-4 uppercase tracking-wider">
                  Accès rapides
                </h3>
                <div className="space-y-2.5">
                  {QUICK_LINKS.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center justify-between group px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: color + "18" }}
                        >
                          <Icon className="w-4 h-4" style={{ color }} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {label}
                        </span>
                      </div>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Disponibilité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="rounded-2xl p-6 border border-green-200"
                style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                    En ligne maintenant
                  </span>
                </div>
                <p className="text-sm text-green-800 leading-relaxed">
                  Nos conseillers sont disponibles et répondent généralement
                  en moins de{" "}
                  <span className="font-bold">2 heures</span> en semaine.
                </p>
              </motion.div>
            </div>

            {/* ── FORMULAIRE ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
                style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.10)" }}
              >

                {/* Header du formulaire */}
                <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h2 className="font-extrabold text-gray-900 text-xl">Envoyez-nous un message</h2>
                    <p className="text-gray-400 text-sm mt-0.5">Tous les champs marqués sont obligatoires</p>
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    Réponse sous 24h
                  </span>
                </div>

                <div className="p-8 relative">

                  {/* Succès overlay */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 z-20 bg-white/98 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center rounded-b-3xl"
                      >
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                          style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}
                        >
                          <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                          Message envoyé !
                        </h3>
                        <p className="text-gray-500 max-w-sm">
                          Nous avons bien reçu votre demande et vous répondrons
                          dans les plus brefs délais, sous 24h maximum.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Prénom / Nom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Prénom <span className="text-red-400">*</span>
                        </label>
                        <input
                          {...register("firstName")}
                          placeholder="Jean"
                          className={inputClass}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500" />
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom <span className="text-red-400">*</span>
                        </label>
                        <input
                          {...register("lastName")}
                          placeholder="Dupont"
                          className={inputClass}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500" />
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email / Téléphone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="jean.dupont@email.com"
                          className={inputClass}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone
                          <span className="text-gray-400 font-normal ml-1">(optionnel)</span>
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="06 12 34 56 78"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Sujet */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Sujet <span className="text-red-400">*</span>
                      </label>
                      <select
                        {...register("subject")}
                        className={inputClass}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Demande d'information">Demande d'information</option>
                        <option value="Suivi de dossier">Suivi de dossier</option>
                        <option value="Simulation de prêt">Simulation de prêt</option>
                        <option value="Réclamation">Réclamation</option>
                        <option value="Partenariat">Partenariat</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-red-500" />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Comment pouvons-nous vous aider ? Décrivez votre projet ou votre question..."
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-red-500" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* RGPD */}
                    <p className="text-xs text-gray-400 leading-relaxed">
                      En soumettant ce formulaire, vous acceptez notre{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        politique de confidentialité
                      </a>
                      . Vos données sont traitées conformément au RGPD.
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-4 px-6 rounded-xl font-bold text-white text-base flex justify-center items-center gap-2.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                      style={{
                        background: isSubmitting
                          ? "#15803d"
                          : "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                        boxShadow: isSubmitting
                          ? "none"
                          : "0 8px 24px rgba(22,163,74,0.40)",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Transition dark → white */}
        <div className="h-16 bg-gradient-to-b from-gray-950 to-white absolute top-0 left-0 right-0 pointer-events-none" />
      </section>

    </div>
  )
}
