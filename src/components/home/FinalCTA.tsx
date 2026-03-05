import { Link } from "wouter"
import { ArrowRight } from "lucide-react"

export default function FinalCTA(){

  return(

    <section className="py-28 relative">

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1600880210830-85910bad3d00?q=80&w=2000"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"/>

      </div>

      <div className="relative max-w-4xl mx-auto text-center text-white px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          Prêt à concrétiser votre projet ?
        </h2>

        <p className="mt-6 text-lg text-gray-200">
          Faites votre demande en 2 minutes.
            Rejoignez des milliers de clients qui nous font confiance pour leurs projets. Réponse de principe immédiate et sans engagement.
        </p>

        {/* <Link
          href="/simulateur"
          className="inline-flex items-center gap-2 mt-10 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition"
        >
          Demander un prêt
          <ArrowRight className="w-5 h-5"/>
        </Link> */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/simulateur"           className="inline-flex items-center gap-2 mt-10 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition"
>
              Demander un prêt
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-10 font-black text-xl bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
              Nous contacter
            </Link>
          </div>

      </div>

    </section>

  )

}