import { motion } from "framer-motion"
import { ShieldCheck, Eye, Lock, UserCheck, Trash2, Bell, Globe, Mail, ChevronRight, AlertTriangle, Database, FileKey } from "lucide-react"
import { Link } from "wouter"

const LAST_UPDATE = "11 mars 2026"

const SECTIONS = [
  {
    id: "responsable",
    icon: UserCheck,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Responsable du traitement",
    content: [
      {
        type: "paragraphs",
        items: [
          "FabFinance SAS, immatriculée au RCS de Paris sous le numéro 524 581 873, dont le siège social est situé 52 RUE DU DOCTEUR SULTZER 67140 BARR, est responsable du traitement de vos données personnelles collectées via ce site.",
          "Notre Délégué à la Protection des Données (DPO) est joignable à l'adresse : dpo@fabfinancec.fr",
        ],
      },
    ],
  },
  {
    id: "collecte",
    icon: Database,
    color: "#3b82f6",
    bg: "#eff6ff",
    title: "Données collectées",
    content: [
      {
        type: "paragraphs",
        items: [
          "Dans le cadre de votre utilisation de nos services, nous collectons uniquement les données strictement nécessaires à l'étude de votre demande de financement.",
        ],
      },
      {
        type: "table",
        rows: [
          ["Identité",          "Nom, prénom, date de naissance"                                ],
          ["Coordonnées",       "Email, téléphone, adresse postale"                             ],
          ["Situation pro.",    "Statut professionnel, revenus mensuels, charges"               ],
          ["Projet",            "Type de prêt, montant souhaité, durée"                         ],
          ["Navigation",        "Adresse IP, pages visitées, durée de session (anonymisés)"     ],
          ["Consentement",      "Date, heure et modalité de recueil du consentement RGPD"       ],
        ],
      },
      {
        type: "paragraphs",
        items: [
          "Nous ne collectons aucune donnée dite « sensible » au sens de l'article 9 du RGPD (origines ethniques, opinions politiques, données de santé, etc.).",
        ],
      },
    ],
  },
  {
    id: "finalites",
    icon: Eye,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Finalités et bases légales",
    content: [
      {
        type: "table",
        rows: [
          ["Étude de votre demande",        "Exécution d'un contrat / mesures précontractuelles"  ],
          ["Communication sur votre dossier","Intérêt légitime / exécution du contrat"            ],
          ["Obligations réglementaires",    "Obligation légale (KYC, LCB-FT)"                    ],
          ["Amélioration du service",       "Intérêt légitime (données anonymisées)"              ],
          ["Marketing et newsletters",      "Consentement explicite (opt-in)"                     ],
          ["Cookies analytiques",           "Consentement explicite"                              ],
        ],
      },
    ],
  },
  {
    id: "destinataires",
    icon: Globe,
    color: "#0ea5e9",
    bg: "#f0f9ff",
    title: "Destinataires des données",
    content: [
      {
        type: "paragraphs",
        items: [
          "Vos données sont traitées exclusivement par FabFinance SAS et ses sous-traitants techniques, dans le strict cadre de l'exécution du service. Elles ne sont jamais vendues à des tiers.",
          "Les sous-traitants auxquels nous faisons appel sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données, conformément à l'article 28 du RGPD.",
        ],
      },
      {
        type: "table",
        rows: [
          ["Hébergement",        "Vercel Inc. (serveurs UE)"                  ],
          ["Envoi d'emails",     "EmailJS / Resend (chiffrement TLS)"          ],
          ["Analytique",         "Données anonymisées, sans transfert hors UE" ],
        ],
      },
      {
        type: "paragraphs",
        items: [
          "Aucun transfert de données hors de l'Union Européenne n'est effectué sans garanties appropriées (clauses contractuelles types de la Commission européenne).",
        ],
      },
    ],
  },
  {
    id: "conservation",
    icon: Trash2,
    color: "#ef4444",
    bg: "#fef2f2",
    title: "Durée de conservation",
    content: [
      {
        type: "table",
        rows: [
          ["Données de demande (non aboutie)", "3 ans à compter du dernier contact"    ],
          ["Données contractuelles",           "5 ans après fin du contrat (obligation légale)" ],
          ["Données de navigation",            "13 mois maximum"                       ],
          ["Données de consentement",          "3 ans à compter du recueil"            ],
          ["Données marketing",                "3 ans après le dernier engagement actif" ],
        ],
      },
      {
        type: "paragraphs",
        items: [
          "À l'issue de ces délais, vos données sont supprimées de façon sécurisée ou anonymisées de manière irréversible.",
        ],
      },
    ],
  },
  {
    id: "securite",
    icon: Lock,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Sécurité des données",
    content: [
      {
        type: "paragraphs",
        items: [
          "FabFinance met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, destruction, altération, accès ou divulgation non autorisés.",
        ],
      },
      {
        type: "table",
        rows: [
          ["Chiffrement",          "SSL/TLS 256-bit sur toutes les communications"   ],
          ["Accès",                "Contrôle strict des accès, authentification forte" ],
          ["Hébergement",          "Serveurs sécurisés certifiés ISO 27001"           ],
          ["Tests",                "Audits de sécurité réguliers"                     ],
        ],
      },
      {
        type: "warning",
        text: "En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, vous serez notifié dans les 72 heures conformément à l'article 34 du RGPD.",
      },
    ],
  },
  {
    id: "droits",
    icon: FileKey,
    color: "#f59e0b",
    bg: "#fffbeb",
    title: "Vos droits",
    content: [
      {
        type: "paragraphs",
        items: [
          "Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la loi Informatique et Libertés modifiée, vous disposez des droits suivants sur vos données personnelles :",
        ],
      },
      {
        type: "table",
        rows: [
          ["Droit d'accès",          "Obtenir une copie de vos données (art. 15 RGPD)"          ],
          ["Droit de rectification", "Corriger des données inexactes (art. 16 RGPD)"            ],
          ["Droit à l'effacement",   "Demander la suppression de vos données (art. 17 RGPD)"    ],
          ["Droit à la limitation",  "Limiter un traitement en cours (art. 18 RGPD)"            ],
          ["Droit à la portabilité", "Recevoir vos données dans un format lisible (art. 20 RGPD)"],
          ["Droit d'opposition",     "Vous opposer à un traitement (art. 21 RGPD)"              ],
          ["Retrait du consentement","Retirer votre consentement à tout moment"                  ],
        ],
      },
      {
        type: "paragraphs",
        items: [
          "Pour exercer vos droits, contactez notre DPO par email à dpo@fabfinance.fr, en joignant une copie de votre pièce d'identité. Nous répondrons dans un délai d'un mois à compter de la réception de votre demande.",
          "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr ou 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    icon: Bell,
    color: "#0ea5e9",
    bg: "#f0f9ff",
    title: "Cookies",
    content: [
      {
        type: "table",
        rows: [
          ["Cookies essentiels",    "Nécessaires au fonctionnement — Pas de consentement requis"  ],
          ["Cookies analytiques",   "Mesure d'audience anonymisée — Consentement requis"           ],
          ["Cookies marketing",     "Non utilisés sur ce site"                                     ],
        ],
      },
      {
        type: "paragraphs",
        items: [
          "Vous pouvez à tout moment modifier vos préférences via le gestionnaire de cookies accessible en bas de page. Le refus des cookies analytiques n'affecte pas votre navigation ni votre accès aux services.",
        ],
      },
    ],
  },
  {
    id: "modifications",
    icon: ShieldCheck,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Modifications de la politique",
    content: [
      {
        type: "paragraphs",
        items: [
          "FabFinance se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à toute évolution légale, jurisprudentielle, éditoriale ou technique.",
          "En cas de modification substantielle, vous serez informé par email ou par un bandeau visible sur le site. La version en vigueur est toujours accessible depuis le pied de page du site.",
          "Date de la dernière mise à jour : " + LAST_UPDATE,
        ],
      },
    ],
  },
]

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-gray-950 pt-24 pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 blur-3xl rounded-full"
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
              <ShieldCheck className="w-7 h-7 text-green-400" />
            </div>

            <span className="inline-flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
              RGPD · Loi Informatique et Libertés
              <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Politique de confidentialité
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>

            <p className="text-gray-600 text-sm mt-4">
              Dernière mise à jour : {LAST_UPDATE}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-12 bg-gradient-to-b from-gray-950 to-gray-50" />

      <div className="bg-gray-50 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Encart RGPD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5 mb-8 flex items-start gap-4"
            style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1px solid #bbf7d0",
            }}
          >
            <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-900 mb-1">
                Vos données sont protégées
              </p>
              <p className="text-sm text-green-800 leading-relaxed">
                FabFinance est conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679).
                Vos données ne sont jamais vendues et sont traitées avec le plus grand soin.
              </p>
            </div>
          </motion.div>

          {/* Sommaire */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
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
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-gray-500" />
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
                transition={{ duration: 0.4, delay: si * 0.03 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden scroll-mt-24"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="px-6 py-5 flex items-center gap-3 border-b border-gray-100"
                  style={{ background: bg }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: color + "22" }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <h2 className="font-extrabold text-gray-900">{title}</h2>
                </div>

                <div className="px-6 py-6 space-y-5">
                  {content.map((block: any, bi: number) => {
                    if (block.type === "table") return (
                      <div key={bi} className="overflow-hidden rounded-xl border border-gray-100">
                        <table className="w-full text-sm">
                          <tbody>
                            {block.rows.map(([label, value]: string[], ri: number) => (
                              <tr key={ri} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                <td className="px-4 py-3 font-semibold text-gray-500 w-2/5 align-top">{label}</td>
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
                          <p key={pi} className="text-sm text-gray-600 leading-relaxed">{p}</p>
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

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-gray-200 p-6 text-center bg-white"
          >
            <p className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto mb-4">
              Pour exercer vos droits ou pour toute question relative à cette politique, contactez notre DPO à{" "}
              <a href="mailto:dpo@fabfinancec.fr" className="text-green-600 hover:underline font-medium">
                dpo@fabfinancec.fr
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link href="/mentions-legales" className="hover:text-green-600 transition-colors">
                Mentions légales
              </Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-green-600 transition-colors">
                Gestion des cookies
              </Link>
              <span>·</span>
              <Link href="/contact" className="hover:text-green-600 transition-colors">
                Nous contacter
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
