import { motion } from "framer-motion";
import { Users, Target, Award, Globe2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Réinventer le crédit pour <span className="text-primary">tous</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Fondée en 2016, NovaFinance s'est donnée pour mission de rendre le financement accessible, transparent et équitable. Fini la complexité bancaire traditionnelle.
          </motion.p>
        </div>
      </section>

      {/* Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* diverse team meeting */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 mb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-primary-foreground/80 font-medium">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5Md€</div>
              <div className="text-primary-foreground/80 font-medium">Projets financés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-primary-foreground/80 font-medium">Note TrustPilot</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48h</div>
              <div className="text-primary-foreground/80 font-medium">Délai moyen de versement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">L'Humain au centre</h3>
              <p className="text-gray-600">La technologie nous aide à être rapides, mais ce sont nos conseillers qui font la différence par leur écoute.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-green-50 text-primary flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Transparence totale</h3>
              <p className="text-gray-600">Pas de jargon, pas de frais cachés. Vous savez exactement ce que vous payez dès le premier jour.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Excellence du service</h3>
              <p className="text-gray-600">Nous visons la perfection dans chaque interaction pour vous offrir la meilleure expérience possible.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Impact positif</h3>
              <p className="text-gray-600">Nous finançons prioritairement les projets de transition énergétique et d'amélioration de l'habitat.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
