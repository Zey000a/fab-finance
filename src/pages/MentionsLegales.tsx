import { motion } from "framer-motion"
import { ShieldCheck, Scale, FileText, AlertTriangle, Building2, Globe, Mail, Phone, ChevronRight } from "lucide-react"
import { Link } from "wouter"

const LAST_UPDATE = "11 mars 2026"

const SECTIONS = [
  {
    id: "editeur",
    icon: Building2,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Éditeur du site",
    content: [
      {
        type: "table",
        rows: [
          ["Raison sociale",        "FAB FINANCE"                         ],
          ["Forme juridique",       "Société par Actions Simplifiée (SAS)"   ],
          ["Capital social",        "50 000 €"                               ],
          ["Siège social",          "52 RUE DU DOCTEUR SULTZER 67140 BARR FRANCE"  ],
          ["SIREN",                 "524 581 873"                            ],
          ["RCS",                   "FR74 524 581 873"                    ],
          ["N° ORIAS",              "14 001 728 (www.orias.fr)"              ],
          ["Autorité de tutelle",   "ACPR – Banque de France"                ],
          ["Président de SAS", "MEYER FABIENNE , MARIE-THERESE"                  ],
        ],
      },
    ],
  },
  {
    id: "hebergement",
    icon: Globe,
    color: "#3b82f6",
    bg: "#eff6ff",
    title: "Hébergement",
    content: [
      {
        type: "table",
        rows: [
          ["Hébergeur",   "Vercel Inc."                    ],
          ["Adresse",     "440 N Barranca Ave, Covina, CA" ],
          ["Site web",    "www.vercel.com"                 ],
        ],
      },
    ],
  },
  {
    id: "contact",
    icon: Mail,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Nous contacter",
    content: [
      {
        type: "table",
        rows: [
          ["Email",       "contact@fabfinancec.com"       ],
          ["Téléphone",   "+33 605 662 921 (appel gratuit)" ],
          ["Courrier",    "52 RUE DU DOCTEUR SULTZER 67140 BARR FRANCE" ],
          ["Horaires",    "Lun – Ven, 9h – 18h"         ],
        ],
      },
    ],
  },
  {
    id: "activite",
    icon: Scale,
    color: "#f59e0b",
    bg: "#fffbeb",
    title: "Activité réglementée",
    content: [
      {
        type: "paragraphs",
        items: [
          "FabFinance SAS est immatriculée en qualité d'Intermédiaire en Opérations de Banque et en Services de Paiement (IOBSP) au registre de l'ORIAS sous le numéro 14 001 728, consultable sur www.orias.fr.",
          "En cette qualité, FabFinance est soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR), organe de supervision de la Banque de France, situé 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.",
          "FabFinance est couverte par une assurance de responsabilité civile professionnelle et dispose d'une garantie financière conformément aux dispositions des articles L.519-1 et suivants du Code monétaire et financier.",
        ],
      },
    ],
  },
  {
    id: "credits",
    icon: FileText,
    color: "#0ea5e9",
    bg: "#f0f9ff",
    title: "Propriété intellectuelle",
    content: [
      {
        type: "paragraphs",
        items: [
          "L'ensemble des éléments constituant le site FabFinance (textes, graphismes, logiciels, photographies, images, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses) sont la propriété exclusive de FabFinance SAS ou de ses partenaires.",
          "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de FabFinance SAS.",
          "Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.",
        ],
      },
    ],
  },
  {
    id: "responsabilite",
    icon: AlertTriangle,
    color: "#ef4444",
    bg: "#fef2f2",
    title: "Limitation de responsabilité",
    content: [
      {
        type: "paragraphs",
        items: [
          "FabFinance s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, FabFinance ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.",
          "Les simulations effectuées sur ce site sont fournies à titre purement indicatif et n'ont aucune valeur contractuelle. Elles ne constituent pas une offre de crédit. Toute décision d'octroi de crédit est prise après étude complète du dossier par nos conseillers.",
          "FabFinance décline toute responsabilité pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.",
          "Ce site peut contenir des liens hypertextes renvoyant vers d'autres sites internet sur lesquels FabFinance n'exerce aucun contrôle. FabFinance décline toute responsabilité quant au contenu de ces sites.",
        ],
      },
    ],
  },
  {
    id: "credit-legal",
    icon: ShieldCheck,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Mentions légales crédit à la consommation",
    content: [
      {
        type: "warning",
        text: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
      },
      {
        type: "paragraphs",
        items: [
          "Conformément à la directive européenne 2008/48/CE relative aux contrats de crédit aux consommateurs, transposée en droit français aux articles L.312-1 et suivants du Code de la consommation, tout crédit à la consommation fait l'objet d'une information précontractuelle standardisée européenne (FISE).",
          "Le Taux Annuel Effectif Global (TAEG) mentionné sur ce site est un taux indicatif calculé sur la base d'un exemple représentatif. Le TAEG réel applicable à votre contrat sera déterminé en fonction de votre situation personnelle, du montant emprunté et de la durée de remboursement.",
          "Exemple représentatif : Pour un crédit personnel de 15 000 € sur 120 mois au TAEG fixe de 3,00% — Taux débiteur fixe 2,96% — Mensualité de 144,80 € — Montant total dû : 17 376,00 € — Coût total du crédit : 2 376,00 €. Offre réservée aux particuliers majeurs résidant en France, sous réserve d'acceptation de votre dossier.",
          "Vous disposez d'un délai de rétractation de 14 jours calendaires à compter de la signature de votre contrat de crédit, conformément à l'article L.312-19 du Code de la consommation.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    icon: Globe,
    color: "#0ea5e9",
    bg: "#f0f9ff",
    title: "Cookies et traceurs",
    content: [
      {
        type: "paragraphs",
        items: [
          "Ce site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte déposés sur votre terminal lors de votre visite.",
          "Nous utilisons des cookies strictement nécessaires au fonctionnement du site, des cookies analytiques (mesure d'audience anonymisée) et des cookies de personnalisation. Vous pouvez gérer vos préférences à tout moment via notre gestionnaire de cookies.",
          "Pour en savoir plus sur notre utilisation des cookies, consultez notre Politique de confidentialité.",
        ],
      },
    ],
  },
  {
    id: "droit",
    icon: Scale,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Droit applicable et juridiction",
    content: [
      {
        type: "paragraphs",
        items: [
          "Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.",
          "Conformément à l'article L.612-1 du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose à un professionnel. FabFinance adhère au service de médiation.",
          "Vous pouvez également recourir à la plateforme européenne de règlement en ligne des litiges accessible à l'adresse : https://ec.europa.eu/consumers/odr",
        ],
      },
    ],
  },
]

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-gray-950 pt-24 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 blur-3xl rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #16a34a 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(22,163,74,0.2)", border: "1px solid rgba(22,163,74,0.3)" }}
            >
              <Scale className="w-7 h-7 text-green-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Mentions légales
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Informations légales et réglementaires relatives à FabFinance et à l'utilisation de ce site.
            </p>

            <p className="text-gray-600 text-sm mt-4">
              Dernière mise à jour : {LAST_UPDATE}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Transition ── */}
      <div className="h-12 bg-gradient-to-b from-gray-950 to-gray-50" />

      <div className="bg-gray-50 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Sommaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-6 mb-8"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Sommaire</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECTIONS.map(({ id, title, icon: Icon, color }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {title}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-gray-500 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {SECTIONS.map(({ id, icon: Icon, color, bg, title, content }, si) => (
              <motion.section
                key={id}
                id={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: si * 0.04 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden scroll-mt-24"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
              >
                {/* Header section */}
                <div
                  className="px-6 py-5 flex items-center gap-3 border-b border-gray-100"
                  style={{ background: bg }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: color + "22" }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <h2 className="font-extrabold text-gray-900">{title}</h2>
                </div>

                {/* Contenu */}
                <div className="px-6 py-6 space-y-5">
                  {content.map((block: any, bi: number) => {

                    if (block.type === "table") return (
                      <div key={bi} className="overflow-hidden rounded-xl border border-gray-100">
                        <table className="w-full text-sm">
                          <tbody>
                            {block.rows.map(([label, value]: string[], ri: number) => (
                              <tr
                                key={ri}
                                className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}
                              >
                                <td className="px-4 py-3 font-semibold text-gray-500 w-1/3 align-top">
                                  {label}
                                </td>
                                <td className="px-4 py-3 text-gray-900">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )

                    if (block.type === "paragraphs") return (
                      <div key={bi} className="space-y-4">
                        {block.items.map((p: string, pi: number) => (
                          <p key={pi} className="text-sm text-gray-600 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    )

                    if (block.type === "warning") return (
                      <div
                        key={bi}
                        className="flex items-start gap-3 rounded-xl p-4"
                        style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
                      >
                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold text-amber-800">{block.text}</p>
                      </div>
                    )

                    return null
                  })}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer légal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-gray-200 p-6 text-center bg-white"
          >
            <p className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto mb-4">
              Pour toute question relative à ces mentions légales, vous pouvez nous contacter à{" "}
              <a href="mailto:legal@fabfinancec.com" className="text-green-600 hover:underline font-medium">
                legal@fabfinancec.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link to="/politique-confidentialite" className="hover:text-green-600 transition-colors">
                Politique de confidentialité
              </Link>
              <span>·</span>
              <Link to="/cookies" className="hover:text-green-600 transition-colors">
                Gestion des cookies
              </Link>
              <span>·</span>
              <Link to="/fr/contact" className="hover:text-green-600 transition-colors">
                Nous contacter
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
