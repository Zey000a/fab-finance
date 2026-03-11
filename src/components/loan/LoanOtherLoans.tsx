import { Link } from "wouter"
import { CreditCard, Car, GraduationCap, ShoppingCart, Briefcase, RefreshCw, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface Props {
  current?: string
}

const LOANS = [
  { type: "personnel",    title: "Prêt personnel",    desc: "Tous vos projets sans justificatif.",    href: "/loans/personnel",    icon: CreditCard,    color: "#3b82f6", bg: "#eff6ff"  },
  { type: "auto",         title: "Prêt auto",          desc: "Neuf ou occasion au meilleur taux.",     href: "/loans/auto",         icon: Car,           color: "#16a34a", bg: "#f0fdf4"  },
  { type: "etudiant",     title: "Prêt étudiant",      desc: "Financez vos études sereinement.",       href: "/loans/etudiant",     icon: GraduationCap, color: "#0ea5e9", bg: "#f0f9ff"  },
  { type: "consommation", title: "Prêt consommation",  desc: "Pour vos achats du quotidien.",          href: "/loans/conso",        icon: ShoppingCart,  color: "#f59e0b", bg: "#fffbeb"  },
  { type: "professionnel",title: "Prêt professionnel", desc: "Développez votre activité.",             href: "/loans/professionnel",icon: Briefcase,     color: "#8b5cf6", bg: "#f5f3ff"  },
  { type: "rachat",       title: "Rachat de crédit",   desc: "Allégez vos mensualités.",               href: "/loans/rachat",       icon: RefreshCw,     color: "#ef4444", bg: "#fef2f2"  },
]

export default function LoanOtherLoans({ current }: Props) {
  const others = LOANS.filter(l => l.type !== current)

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
          Nos solutions
          <span className="w-4 h-0.5 bg-green-500 rounded-full" />
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Découvrez aussi nos autres solutions
        </h2>
      </motion.div>

      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {others.map(({ type, title, desc, href, icon: Icon, color, bg }, i) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Link href={href}>
              <div
                className="group bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                {/* Icône */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">
                  {title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed flex-grow mb-4">
                  {desc}
                </p>

                {/* Lien */}
                <div
                  className="flex items-center gap-1 text-xs font-bold transition-all duration-200"
                  style={{ color }}
                >
                  Consulter
                  <ArrowRight
                    className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Barre colorée bas */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
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