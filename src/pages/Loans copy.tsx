import { useParams, Link } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import { CheckCircle2, ArrowRight, Landmark, Phone } from "lucide-react";
import { motion } from "framer-motion";

import LoanInlineSimulator from "@/components/home/LoanInlineSimulator";

export default function Loans() {
  const params = useParams();
  const { t } = useI18n();
  const type = params.type || "personnel";

  const title = t(`nav.loanTypes.${type}`);

  const loanData: Record<string, any> = {
    personnel: {
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
      min: "1 000 €",
      max: "75 000 €",
      duration: "12 à 84 mois",
      taeg: "à partir de 2,90%",
      rateType: "Fixe",
      advantages: [
        "Aucun justificatif d'utilisation",
        "Pause mensualité possible",
        "Remboursement anticipé gratuit",
      ],
    },
    pro: {
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      min: "5 000 €",
      max: "500 000 €",
      duration: "12 à 120 mois",
      taeg: "à partir de 1,50%",
      rateType: "Fixe ou Variable",
      advantages: [
        "Déduction des intérêts",
        "Accompagnement expert",
        "Financement matériel & immo",
      ],
    },
    conso: {
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      min: "500 €",
      max: "30 000 €",
      duration: "6 à 60 mois",
      taeg: "à partir de 3,50%",
      rateType: "Fixe",
      advantages: [
        "Déblocage rapide",
        "Gestion 100% en ligne",
        "Souplesse de remboursement",
      ],
    },
    etudiant: {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      min: "1 000 €",
      max: "50 000 €",
      duration: "12 à 120 mois",
      taeg: "0,90% (taux préférentiel)",
      rateType: "Fixe",
      advantages: [
        "Remboursement différé",
        "Pas de frais de dossier",
        "Caution parentale simplifiée",
      ],
    },
    auto: {
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
      min: "3 000 €",
      max: "100 000 €",
      duration: "12 à 84 mois",
      taeg: "à partir de 2,10%",
      rateType: "Fixe",
      advantages: [
        "Neuf ou occasion",
        "Assurance auto incluse possible",
        "Virement immédiat",
      ],
    },
    rachat: {
      img: "https://images.unsplash.com/photo-1454165833767-0239610f63a1?q=80&w=1000&auto=format&fit=crop",
      min: "10 000 €",
      max: "250 000 €",
      duration: "36 à 180 mois",
      taeg: "Sur mesure",
      rateType: "Fixe",
      advantages: [
        "Une seule mensualité",
        "Baisse du taux global",
        "Simplification budgétaire",
      ],
    },
  };

  const data = loanData[type] || loanData.personnel;

  return (
    <div className="min-h-screen pt-20 bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.img}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/"
              className="text-primary hover:underline text-sm font-medium mb-6 inline-block"
            >
              ← Retour
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              La solution NovaFinance pour {title.toLowerCase()} : transparence,
              rapidité et accompagnement humain pour tous vos projets de vie.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        <LoanInlineSimulator />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Characteristics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Montant Min.", value: data.min },
                { label: "Montant Max.", value: data.max },
                { label: "Durée", value: data.duration },
                { label: "TAEG Fixe", value: data.taeg },
                { label: "Type de taux", value: data.rateType },
                { label: "Frais de dossier", value: "0 €" },
              ].map((item, i) => (
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

            {/* Content Cards */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                Pourquoi choisir ce prêt ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(data.advantages || [])
                  .concat([
                    "Gestion 100% digitale",
                    "Conseiller dédié",
                    "Transparence totale",
                  ])
                  .map((adv, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/20 hover:bg-white transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-gray-700 font-medium">{adv}</span>
                    </div>
                  ))}
              </div>
            </div>

            <section className="bg-white p-10 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">
                Comprendre le {title.toLowerCase()}
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Le {title.toLowerCase()} est une solution de financement
                  simple et flexible qui vous permet de concrétiser vos projets
                  personnels ou professionnels sans puiser immédiatement dans
                  votre épargne.
                </p>

                <p>
                  Chez NovaFinance, nous proposons des solutions adaptées à
                  chaque situation. Vous pouvez financer différents projets :
                  rénovation de votre logement, achat d'un véhicule, financement
                  d'études ou encore organisation d'un événement important.
                </p>

                <p>
                  Grâce à notre plateforme digitale sécurisée, vous pouvez
                  simuler votre financement, comprendre vos mensualités et
                  envoyer votre demande en quelques minutes seulement.
                </p>
              </div>
            </section>

            <section className="py-16">
              <h2 className="text-2xl font-bold mb-10">
                Pour quels projets utiliser ce prêt ?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-2xl overflow-hidden shadow">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Acheter une voiture</h3>
                    <p className="text-sm text-gray-500">
                      Financez votre véhicule neuf ou d'occasion rapidement.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow">
                  <img
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Réaliser des travaux</h3>
                    <p className="text-sm text-gray-500">
                      Améliorez votre logement avec un financement flexible.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Financer un voyage</h3>
                    <p className="text-sm text-gray-500">
                      Réalisez vos projets personnels en toute sérénité.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary text-white p-10 rounded-3xl text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ils nous font confiance
              </h2>

              <p className="text-lg mb-6">
                Plus de 200 000 projets financés avec NovaFinance
              </p>

              <div className="flex justify-center gap-2 text-yellow-300 text-xl">
                ★★★★★
              </div>

              <p className="mt-2">Note moyenne 4.8 / 5</p>
            </section>

            <section className="grid lg:grid-cols-2 gap-16 items-center py-20">
              <img
                src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2"
                className="rounded-3xl shadow"
              />

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Un accompagnement humain
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Nos conseillers vous accompagnent à chaque étape de votre
                  projet. Nous analysons votre situation afin de vous proposer
                  la solution de financement la plus adaptée à vos besoins.
                </p>
              </div>
            </section>
            {/* Example Card */}
            <div className="bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <Landmark className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Exemple de financement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pour un emprunt de{" "}
                    <span className="font-bold text-gray-900">15 000 €</span>{" "}
                    sur une période de{" "}
                    <span className="font-bold text-gray-900">120 mois</span>.
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
                  <div className="h-px bg-gray-200 my-2" />
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
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-2xl font-bold mb-3">Besoin d'aide ?</h3>
                <p className="text-gray-500 mb-8">
                  Nos experts sont là pour vous accompagner dans votre démarche
                  de financement.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/simulateur"
                    className="w-full group flex items-center justify-center gap-3 py-4 px-6 bg-primary text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                  >
                    Demander un prêt
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold hover:border-primary/20 hover:bg-gray-50 transition-all"
                  >
                    Nous contacter
                  </Link>
                </div>

                {/* <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Appel gratuit</span>
                    <span className="text-lg font-black text-gray-900 block">0800 123 456</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-10">
            Comment obtenir votre prêt ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Faites votre demande</h3>
              <p className="text-gray-500 text-sm">
                Remplissez notre formulaire sécurisé en quelques minutes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Analyse rapide</h3>
              <p className="text-gray-500 text-sm">
                Nos experts analysent votre dossier immédiatement.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Recevez les fonds</h3>
              <p className="text-gray-500 text-sm">
                Les fonds peuvent être disponibles sous 24 à 48 heures.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-8">
            Pourquoi choisir NovaFinance ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Transparence totale</h3>
              <p className="text-gray-500 text-sm">
                Aucun frais caché. Toutes les conditions sont claires dès le
                départ.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Réponse rapide</h3>
              <p className="text-gray-500 text-sm">
                Une réponse de principe peut être donnée en quelques minutes.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Accompagnement humain</h3>
              <p className="text-gray-500 text-sm">
                Un conseiller dédié vous accompagne tout au long de votre
                projet.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                Combien de temps pour obtenir une réponse ?
              </h3>
              <p className="text-gray-500 text-sm">
                Une réponse de principe peut être donnée immédiatement après
                votre demande.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Puis-je rembourser mon prêt plus tôt ?
              </h3>
              <p className="text-gray-500 text-sm">
                Oui, le remboursement anticipé est possible sans frais
                supplémentaires.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Les démarches sont-elles sécurisées ?
              </h3>
              <p className="text-gray-500 text-sm">
                Toutes les informations sont protégées et traitées de manière
                confidentielle.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à concrétiser votre projet ?
          </h2>

          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Faites votre demande de prêt en quelques minutes et recevez une
            réponse rapide.
          </p>

          <Link
            href="/simulateur"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-primary/40 transition"
          >
            Demander un prêt
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
