import { Link } from "wouter";

export default function MissionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
        {/* IMAGE */}

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2000"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}

        <div>
          <span className="text-primary font-semibold uppercase text-sm">
            NovaFinance & Vous
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Le financement qui fait la différence
          </h2>

          <p className="text-gray-600 mt-6">
            Chez NovaFinance, nous mettons notre expertise au service de vos
            projets de vie. Prêt personnel, crédit consommation, prêt auto ou
            rachat de crédit : nous proposons des solutions simples,
            transparentes et adaptées à chaque situation.
          </p>

          <p className="text-gray-600 mt-4">
            Notre mission est de rendre le financement plus accessible grâce à
            des outils digitaux innovants et à un accompagnement humain.
          </p>

          <p className="text-gray-600 mt-4">
            Nous nous engageons également dans des actions concrètes pour
            favoriser l'inclusion financière et soutenir des projets
            responsables.
          </p>

          <Link
            href="/about"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
          >
            Découvrir notre mission
          </Link>
        </div>
      </div>
    </section>
  );
}
