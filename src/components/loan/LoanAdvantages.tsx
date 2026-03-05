import { CheckCircle2 } from "lucide-react"

interface Props {
  advantages: string[]
}

export default function LoanAdvantages({ advantages }: Props) {

  const items = advantages.concat([
    "Gestion 100% digitale",
    "Conseiller dédié",
    "Transparence totale",
  ])

  return (

    <div className="mt-10 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">

      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">

        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <CheckCircle2 className="w-5 h-5" />
        </div>

        Pourquoi choisir ce prêt ?

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {items.map((adv, i) => (

          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/20 hover:bg-white transition-all group"
          >

            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />

            <span className="text-gray-700 font-medium">
              {adv}
            </span>

          </div>

        ))}

      </div>

    </div>

  )

}