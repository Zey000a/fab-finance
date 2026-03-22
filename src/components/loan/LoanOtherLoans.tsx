import { Link } from "wouter"
import { CreditCard, Car, GraduationCap, ShoppingCart, Briefcase, RefreshCw, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

interface Props {
  current?: string
}

const LOAN_META = [
  {
    type: "personnel", icon: CreditCard, color: "#3b82f6", bg: "#eff6ff",
    desc: { fr: "Tous vos projets sans justificatif.", en: "All projects, no justification needed.", de: "Alle Projekte ohne Nachweis.", es: "Todos sus proyectos sin justificante.", it: "Tutti i progetti senza giustificativo.", pt: "Todos os projetos sem justificativo." },
  },
  {
    type: "auto", icon: Car, color: "#16a34a", bg: "#f0fdf4",
    desc: { fr: "Neuf ou occasion au meilleur taux.", en: "New or used vehicle at the best rate.", de: "Neu oder gebraucht zum besten Zinssatz.", es: "Nuevo o de ocasión al mejor tipo.", it: "Nuovo o usato al miglior tasso.", pt: "Novo ou usado à melhor taxa." },
  },
  {
    type: "etudiant", icon: GraduationCap, color: "#0ea5e9", bg: "#f0f9ff",
    desc: { fr: "Financez vos études sereinement.", en: "Finance your studies serenely.", de: "Finanzieren Sie Ihr Studium in Ruhe.", es: "Financie sus estudios tranquilamente.", it: "Finanziate i vostri studi serenamente.", pt: "Financie os seus estudos com tranquilidade." },
  },
  {
    type: "conso", icon: ShoppingCart, color: "#f59e0b", bg: "#fffbeb",
    desc: { fr: "Pour vos achats du quotidien.", en: "For your everyday purchases.", de: "Für Ihre alltäglichen Einkäufe.", es: "Para sus compras cotidianas.", it: "Per i vostri acquisti quotidiani.", pt: "Para as suas compras do dia a dia." },
  },
  {
    type: "professionnel", icon: Briefcase, color: "#8b5cf6", bg: "#f5f3ff",
    desc: { fr: "Développez votre activité.", en: "Develop your business activity.", de: "Entwickeln Sie Ihre Geschäftstätigkeit.", es: "Desarrolle su actividad empresarial.", it: "Sviluppate la vostra attività.", pt: "Desenvolva a sua atividade." },
  },
  {
    type: "rachat", icon: RefreshCw, color: "#ef4444", bg: "#fef2f2",
    desc: { fr: "Allégez vos mensualités.", en: "Lighten your monthly payments.", de: "Reduzieren Sie Ihre Monatsraten.", es: "Aligere sus cuotas mensuales.", it: "Alleggerite le vostre rate mensili.", pt: "Alivie as suas prestações mensais." },
  },
]

const SECTION_TITLE: Record<string, string> = {
  fr: "Découvrez aussi nos autres solutions",
  en: "Discover our other solutions",
  de: "Entdecken Sie unsere anderen Lösungen",
  es: "Descubra también nuestras otras soluciones",
  it: "Scopri anche le nostre altre soluzioni",
  pt: "Descubra também as nossas outras soluções",
}

export default function LoanOtherLoans({ current }: Props) {
  const { t, routes, lang } = useI18n()
  const others = LOAN_META.filter(l => l.type !== current)

  return (
    <section className="py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center mb-10"
      >
        <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
          <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          {t.footer.links.loans}
          <span className="w-4 h-0.5 bg-green-500 rounded-full" />
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          {SECTION_TITLE[lang] ?? SECTION_TITLE.fr}
        </h2>
      </motion.div>

      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {others.map(({ type, icon: Icon, color, bg, desc }, i) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {/* ✅ Lien préfixé avec la langue active */}
            <Link href={`${routes.loans}/${type}`}>
              <div
                className="group relative bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                {/* Icône */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                {/* Titre traduit via t.nav.loanTypes */}
                <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">
                  {(t.nav.loanTypes as any)[type]}
                </h3>

                {/* Description traduite */}
                <p className="text-xs text-gray-400 leading-relaxed flex-grow mb-4">
                  {(desc as any)[lang] ?? desc.fr}
                </p>

                {/* Lien traduit */}
                <div
                  className="flex items-center gap-1 text-xs font-bold transition-all duration-200"
                  style={{ color }}
                >
                  {t.common.learnMore}
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>

                {/* Barre colorée bas au hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}