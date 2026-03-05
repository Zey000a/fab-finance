import { Link } from "wouter"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Acheter une voiture",
    description: "Financez votre véhicule neuf ou d'occasion",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    href: "/loans/auto",
  },
  {
    title: "Faire des travaux",
    description: "Rénovez votre maison avec un financement flexible.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1000",
    href: "/loans/personnel",
  },
  {
    title: "Partir en voyage",
    description: "Réalisez le voyage dont vous rêvez.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
    href: "/loans/conso",
  },
  {
    title: "Financer des études",
    description: "Investissez dans votre avenir et vos études.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
    href: "/loans/etudiant",
  },
  {
    title: "Organiser un mariage",
    description: "Préparez votre grand jour en toute sérénité.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
    href: "/loans/personnel",
  },
]

export default function PopularProjects() {
  return (
    <section className="py-5 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold mb-3">
            Donnez vie à vos projets
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Découvrez nos solutions de financement adaptées à vos projets
            de vie : voiture, travaux, voyage ou études.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {projects.map((p, i) => (

            <Link key={i} href={p.href}>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col cursor-pointer">

                {/* IMAGE */}

                <div className="h-36 overflow-hidden">

                  <img
                    src={p.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT */}

                <div className="p-5 flex flex-col flex-grow">

                  <h3 className="font-semibold mb-2 text-center">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500 text-center mb-4 flex-grow">
                    {p.description}
                  </p>

                  {/* BUTTON */}

                  <div className="mt-auto">

                    <div className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-lg font-medium transition-all group-hover:bg-gray-900">

                      <span className="group-hover:hidden">
                        Voir le prêt
                      </span>

                      <span className="hidden group-hover:inline-flex items-center gap-2">
                        Simuler
                        <ArrowRight className="w-4 h-4"/>
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  )
}