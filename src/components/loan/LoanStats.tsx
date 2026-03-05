interface Props {
  min: string
  max: string
  duration: string
  taeg: string
  rateType: string
}

export default function LoanStats({
  min,
  max,
  duration,
  taeg,
  rateType
}: Props) {

  const stats = [
    { label: "Montant Min.", value: min },
    { label: "Montant Max.", value: max },
    { label: "Durée", value: duration },
    { label: "TAEG Fixe", value: taeg },
    { label: "Type de taux", value: rateType },
    { label: "Frais de dossier", value: "0 €" },
  ]

  return (

    <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">

      {stats.map((item, i) => (

        <div
          key={i}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center"
        >

          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
            {item.label}
          </span>

          <span className="text-lg font-bold text-gray-900">
            {item.value}
          </span>

        </div>

      ))}

    </div>

  )
}