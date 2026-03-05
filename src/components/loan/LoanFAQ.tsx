export default function LoanFAQ(){

  const faqs = [
    {
      q:"Combien de temps pour obtenir une réponse ?",
      a:"Une réponse de principe peut être donnée immédiatement après votre demande."
    },
    {
      q:"Puis-je rembourser mon prêt plus tôt ?",
      a:"Oui, le remboursement anticipé est possible sans frais supplémentaires."
    },
    {
      q:"Les démarches sont-elles sécurisées ?",
      a:"Toutes les informations sont protégées et traitées de manière confidentielle."
    }
  ]

  return(

    <section className="bg-white p-10 rounded-3xl border border-gray-100">

      <h2 className="text-2xl font-bold mb-8">
        Questions fréquentes
      </h2>

      <div className="space-y-6">

        {faqs.map((faq,i)=>(

          <div key={i}>

            <h3 className="font-semibold mb-2">
              {faq.q}
            </h3>

            <p className="text-gray-500 text-sm">
              {faq.a}
            </p>

          </div>

        ))}

      </div>

    </section>

  )

}