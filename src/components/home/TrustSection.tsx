import { Star, ShieldCheck, Users, CheckCircle } from "lucide-react"

const reviews = [
  {
    name: "Sophie Martin",
    text: "Demande très simple et réponse rapide. J'ai obtenu mon financement en moins de 48h.",
  },
  {
    name: "Lucas Bernard",
    text: "Interface claire et transparente. La simulation m'a permis de comprendre immédiatement mon crédit.",
  },
  {
    name: "Claire Dupont",
    text: "Service client très professionnel. Je recommande NovaFinance pour financer ses projets.",
  },
]

export default function TrustSection() {

  return (

    <section className="py-10 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <div className="text-center mb-16">

          <h2 className="text-3xl font-bold mb-4">
            Ils nous font confiance
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Des milliers de clients utilisent NovaFinance pour financer leurs projets personnels et professionnels.
          </p>

        </div>

        {/* SOCIAL PROOF NUMBERS */}

        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <Users className="mx-auto text-primary mb-3"/>

            <p className="text-3xl font-bold">+200 000</p>

            <p className="text-gray-500 text-sm">
              projets financés
            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <Star className="mx-auto text-primary mb-3"/>

            <p className="text-3xl font-bold">4.8 / 5</p>

            <p className="text-gray-500 text-sm">
              satisfaction clients
            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <ShieldCheck className="mx-auto text-primary mb-3"/>

            <p className="text-3xl font-bold">100%</p>

            <p className="text-gray-500 text-sm">
              plateforme sécurisée
            </p>

          </div>

        </div>

        {/* REVIEWS */}

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, i) => (

            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >

              <div className="flex gap-1 text-yellow-400 mb-4">

                <Star className="w-4 h-4 fill-yellow-400"/>
                <Star className="w-4 h-4 fill-yellow-400"/>
                <Star className="w-4 h-4 fill-yellow-400"/>
                <Star className="w-4 h-4 fill-yellow-400"/>
                <Star className="w-4 h-4 fill-yellow-400"/>

              </div>

              <p className="text-gray-600 text-sm mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center gap-2">

                <CheckCircle className="text-primary w-4 h-4"/>

                <span className="text-sm font-semibold">
                  {review.name}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}