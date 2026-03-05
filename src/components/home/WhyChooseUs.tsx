import { ShieldCheck, Zap, HeartHandshake, TrendingUp } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Réponse rapide",
    desc: "Obtenez une réponse de principe en quelques minutes seulement.",
  },
  {
    icon: ShieldCheck,
    title: "100% sécurisé",
    desc: "Vos données sont protégées grâce à des technologies de sécurité avancées.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement humain",
    desc: "Nos conseillers vous accompagnent à chaque étape de votre projet.",
  },
  {
    icon: TrendingUp,
    title: "Taux compétitifs",
    desc: "Des solutions de financement transparentes adaptées à votre situation.",
  },
]

export default function WhyChooseUs() {

  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold">
            Pourquoi choisir NovaFinance ?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nous mettons la technologie et l’expertise financière au service
            de vos projets pour vous offrir une expérience simple et fiable.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {items.map((item,i)=>{

            const Icon = item.icon

            return(

              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
              >

                <div className="flex justify-center mb-5 text-primary">
                  <Icon className="w-8 h-8"/>
                </div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3">
                  {item.desc}
                </p>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}