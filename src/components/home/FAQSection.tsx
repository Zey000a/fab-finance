import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Combien de temps pour obtenir une réponse ?",
    a: "Vous recevez généralement une réponse de principe en quelques minutes après votre simulation.",
  },
  {
    q: "Quels documents sont nécessaires ?",
    a: "Selon votre situation, des justificatifs de revenus ou d'identité peuvent être demandés.",
  },
  {
    q: "Puis-je rembourser mon prêt par anticipation ?",
    a: "Oui, vous pouvez rembourser tout ou partie de votre crédit à tout moment selon les conditions prévues.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Toutes vos informations sont protégées grâce à des protocoles de sécurité avancés.",
  },
]

export default function FAQSection(){

  const [open,setOpen] = useState<number | null>(0)

  return(

    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-3xl font-bold">
            Questions fréquentes
          </h2>

          <p className="text-gray-500 mt-3">
            Tout ce que vous devez savoir avant de faire votre demande.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq,i)=>{

            const isOpen = open === i

            return(

              <div
                key={i}
                className="border rounded-xl p-6"
              >

                <button
                  onClick={()=>setOpen(isOpen ? null : i)}
                  className="flex justify-between items-center w-full text-left"
                >

                  <span className="font-semibold">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                  />

                </button>

                {isOpen && (

                  <p className="text-gray-600 mt-4 text-sm">
                    {faq.a}
                  </p>

                )}

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}