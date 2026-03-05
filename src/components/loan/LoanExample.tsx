import { Landmark } from "lucide-react"

export default function LoanExample(){

  return(

    <div className="mb-10 bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 relative overflow-hidden group">

      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
        <Landmark className="w-32 h-32"/>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6">
        Exemple de financement
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="space-y-4">

          <p className="text-gray-700 leading-relaxed text-lg">
            Pour un emprunt de
            <span className="font-bold text-gray-900"> 15 000 € </span>
            sur une période de
            <span className="font-bold text-gray-900"> 120 mois</span>.
          </p>

          <div className="flex flex-col gap-1">

            <span className="text-sm text-gray-500 font-medium">
              Mensualité estimée
            </span>

            <span className="text-4xl font-black text-primary">
              155,48 €
            </span>

          </div>

        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl space-y-3">

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">TAEG Fixe</span>
            <span className="font-bold">4.50%</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Taux débiteur</span>
            <span className="font-bold">4.41%</span>
          </div>

          <div className="h-px bg-gray-200 my-2"/>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Total remboursé</span>
            <span className="font-bold">18 657,60 €</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Total intérêts</span>
            <span className="font-bold text-primary">3 657,60 €</span>
          </div>

        </div>

      </div>

    </div>

  )

}