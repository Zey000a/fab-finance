import { Link } from "wouter"
import { CreditCard, Car, GraduationCap, ShoppingCart, Briefcase } from "lucide-react"

interface Props {
  current?: string
}

const loans = [
  {
    type: "personnel",
    title: "Prêt personnel",
    href: "/loans/personnel",
    icon: CreditCard
  },
  {
    type: "auto",
    title: "Prêt auto",
    href: "/loans/auto",
    icon: Car
  },
  {
    type: "etudiant",
    title: "Prêt étudiant",
    href: "/loans/etudiant",
    icon: GraduationCap
  },
  {
    type: "consommation",
    title: "Prêt consommation",
    href: "/loans/conso",
    icon: ShoppingCart
  },
  {
    type: "professionnel",
    title: "Prêt professionnel",
    href: "/loans/professionnel",
    icon: Briefcase
  },
  {
    type: "rachat",
    title: "Rachat Credit",
    href: "/loans/rachat",
    icon: Briefcase
  },
]

export default function LoanOtherLoans({ current }: Props) {

  const otherLoans = loans.filter(l => l.type !== current)

  return (

    <section className="py-20">

      <h2 className="text-3xl font-bold text-center mb-14">
        Découvrez aussi nos autres solutions de financement
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {otherLoans.map((loan, i) => {

          const Icon = loan.icon

          return (

            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-100 p-8 text-center hover:shadow-xl transition"
            >

              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                  <Icon className="w-8 h-8"/>
                </div>
              </div>

              <h3 className="font-semibold mb-4">
                {loan.title}
              </h3>

              <Link
                href={loan.href}
                className="inline-block text-sm font-semibold text-primary hover:underline"
              >
                Consulter →
              </Link>

            </div>

          )

        })}

      </div>

    </section>

  )

}