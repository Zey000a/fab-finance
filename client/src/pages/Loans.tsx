import { useParams, Link } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Loans() {
  const params = useParams();
  const { t } = useI18n();
  const type = params.type || 'personnel';

  // Make sure we have a valid translation key
  const title = t(`nav.loanTypes.${type}`);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        {/* business person meeting */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop" 
            alt="Business meeting" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">← Retour à l'accueil</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            La solution idéale pour financer vos projets avec souplesse et sécurité. Taux fixe garanti et accompagnement sur mesure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Les avantages de notre {title.toLowerCase()}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Taux fixe garanti pendant toute la durée",
                  "Aucun apport personnel exigé",
                  "Réponse de principe immédiate",
                  "Fonds versés sous 48h après acceptation",
                  "Mensualités modulables à la hausse ou à la baisse",
                  "Possibilité de remboursement anticipé"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Exemple représentatif</h2>
              <p className="text-blue-800 leading-relaxed mb-4">
                Pour un prêt de <strong>10 000 €</strong> sur <strong>48 mois</strong>, vous remboursez 48 mensualités de <strong>225,50 €</strong>.
              </p>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Taux Annuel Effectif Global (TAEG) fixe : 4.5%</li>
                <li>• Taux débiteur fixe : 4.41%</li>
                <li>• Montant total dû : 10 824 €</li>
                <li>• Frais de dossier : 0 €</li>
              </ul>
              <p className="text-xs text-blue-600 mt-4 italic">
                *Ceci est un exemple à titre indicatif. Les conditions réelles dépendent de votre dossier.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold mb-2">Prêt à vous lancer ?</h3>
              <p className="text-gray-600 text-sm mb-6">Faites une simulation gratuite et sans engagement en quelques clics.</p>
              
              <div className="space-y-4">
                <Link href="/simulateur" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Simuler mon prêt <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Contacter un conseiller
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Une question ? Appelez-nous au<br/>
                  <strong className="text-lg text-gray-900 mt-1 block">0800 123 456</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
