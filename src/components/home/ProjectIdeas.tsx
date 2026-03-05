import { Link } from "wouter"
import { Car, Home, Plane, Heart, GraduationCap } from "lucide-react"

const ideas = [
  {
    icon: Car,
    title: "Acheter une voiture",
    desc: "Financez votre véhicule neuf ou d'occasion rapidement.",
    href: "/loans/auto",
  },
  {
    icon: Home,
    title: "Faire des travaux",
    desc: "Améliorez votre maison avec un financement flexible.",
    href: "/loans/personnel",
  },
  {
    icon: Plane,
    title: "Partir en voyage",
    desc: "Réalisez le voyage dont vous rêvez.",
    href: "/loans/conso",
  },
  {
    icon: GraduationCap,
    title: "Financer des études",
    desc: "Investissez dans votre avenir avec un prêt étudiant.",
    href: "/loans/etudiant",
  },
  {
    icon: Heart,
    title: "Organiser un mariage",
    desc: "Préparez votre grand jour en toute sérénité.",
    href: "/loans/personnel",
  }
]

export default function ProjectIdeas() {

  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Donnez vie à vos projets
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Voiture, travaux, études ou voyage : découvrez comment
            NovaFinance peut vous aider à financer vos projets.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          {ideas.map((idea, i) => {

            const Icon = idea.icon

            return (

              <Link key={i} href={idea.href}>

                <div className="group bg-white rounded-2xl border p-6 hover:shadow-xl transition cursor-pointer h-full flex flex-col">

                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                    <Icon className="w-6 h-6"/>
                  </div>

                  <h3 className="font-bold mb-2">
                    {idea.title}
                  </h3>

                  <p className="text-sm text-gray-500 flex-grow">
                    {idea.desc}
                  </p>

                  <span className="text-primary text-sm font-semibold mt-4">
                    Découvrir →
                  </span>

                </div>

              </Link>

            )

          })}

        </div>

      </div>

    </section>

  )

}