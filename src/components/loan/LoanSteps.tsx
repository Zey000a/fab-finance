export default function LoanSteps(){

  const steps = [
    {
      title:"Faites votre demande",
      desc:"Remplissez notre formulaire sécurisé en quelques minutes."
    },
    {
      title:"Analyse rapide",
      desc:"Nos experts analysent votre dossier immédiatement."
    },
    {
      title:"Recevez les fonds",
      desc:"Les fonds peuvent être disponibles sous 24 à 48 heures."
    }
  ]

  return(

    <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">

      <h2 className="text-2xl font-bold mb-10">
        Comment obtenir votre prêt ?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {steps.map((step,i)=>(

          <div
            key={i}
            className="flex flex-col items-center text-center"
          >

            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
              {i+1}
            </div>

            <h3 className="font-bold text-lg mb-2">
              {step.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {step.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  )

}