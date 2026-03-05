import { Link } from "wouter"
import { useState } from "react"
import {
  Wallet,
  Building2,
  CreditCard,
  GraduationCap,
  Car,
  RefreshCw
} from "lucide-react"

import { calculateLoan } from "@/utils/loanCalculator"

const credits = [
  {
    icon: Wallet,
    title: "Prêt personnel",
    description: "Financez vos projets personnels rapidement.",
    exampleAmount: 10000,
    exampleDuration: 48,
    href: "/loans/personnel",
  },
  {
    icon: Building2,
    title: "Prêt professionnel",
    description: "Développez votre activité avec un financement flexible.",
    exampleAmount: 20000,
    exampleDuration: 60,
    href: "/loans/pro",
  },
  {
    icon: CreditCard,
    title: "Prêt consommation",
    description: "Réalisez vos achats avec une solution simple.",
    exampleAmount: 5000,
    exampleDuration: 36,
    href: "/loans/conso",
  },
  {
    icon: GraduationCap,
    title: "Prêt étudiant",
    description: "Financez vos études et votre avenir.",
    exampleAmount: 8000,
    exampleDuration: 60,
    href: "/loans/etudiant",
  },
  {
    icon: Car,
    title: "Prêt auto",
    description: "Achetez votre voiture neuve ou d'occasion.",
    exampleAmount: 15000,
    exampleDuration: 60,
    href: "/loans/auto",
  },
  {
    icon: RefreshCw,
    title: "Rachat de crédit",
    description: "Réduisez vos mensualités en regroupant vos crédits.",
    exampleAmount: 25000,
    exampleDuration: 84,
    href: "/loans/rachat",
  }
]

export default function LoanProducts() {

  const [hovered, setHovered] = useState<number | null>(null)

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-5">
          Nos solutions de financement
        </h2>

        <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
          Simulation gratuite et réponse rapide pour tous vos projets.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {credits.map((credit, i) => {

            const Icon = credit.icon

            const { monthlyPayment } = calculateLoan(
              credit.exampleAmount,
              credit.exampleDuration,
              0.045
            )

            return (

              <Link key={i} href={credit.href}>

                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative group bg-gray-50 hover:bg-white border rounded-2xl p-6 text-center transition hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                >

                  {/* NORMAL STATE */}

                  {hovered !== i && (

                    <>

                      <div className="flex justify-center mb-4">

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">

                          <Icon className="w-6 h-6"/>

                        </div>

                      </div>

                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        {credit.title}
                      </p>

                      <p className="text-xs text-gray-500">
                        {credit.description}
                      </p>

                    </>

                  )}

                  {/* SIMULATOR STATE */}

                  {hovered === i && (

                    <div className="flex flex-col justify-center h-full">

                      <p className="text-xs text-gray-500 mb-2">
                        Exemple
                      </p>

                      <p className="text-sm font-semibold mb-2">
                        {credit.exampleAmount.toLocaleString()} € sur {credit.exampleDuration} mois
                      </p>

                      <p className="text-xs text-gray-500">
                        Mensualité estimée
                      </p>

                      <p className="text-xl font-bold text-primary mt-1">
                        {monthlyPayment.toFixed(0)} €
                      </p>

                    </div>

                  )}

                </div>

              </Link>

            )
          })}

        </div>

      </div>

    </section>
  )
}