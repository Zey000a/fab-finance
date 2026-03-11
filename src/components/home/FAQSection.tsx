import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "wouter"

const FAQS = [
  {
    q: "Combien de temps pour obtenir une réponse ?",
    a: "Vous recevez une réponse de principe en moins de 2 minutes après votre simulation en ligne. Une fois votre dossier complet soumis, la décision définitive intervient sous 24 à 48 heures.",
  },
  {
    q: "Quels documents sont nécessaires ?",
    a: "Selon votre situation : une pièce d'identité, vos 3 derniers bulletins de salaire ou justificatifs de revenus, un justificatif de domicile récent et votre RIB. Tout se fait en ligne, sans paperasse.",
  },
  {
    q: "Puis-je rembourser mon prêt par anticipation ?",
    a: "Oui, vous pouvez rembourser partiellement ou totalement votre crédit à tout moment. Des indemnités de remboursement anticipé peuvent s'appliquer selon les conditions contractuelles.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Absolument. Toutes vos informations sont chiffrées en SSL 256-bit et nous sommes conformes au RGPD. Vos données ne sont jamais revendues à des tiers.",
  },
  {
    q: "Y a-t-il des frais de dossier ?",
    a: "Non. FabFinance ne facture aucun frais de dossier. La simulation est gratuite et sans engagement. Vous ne payez que les intérêts définis dans votre contrat.",
  },
  {
    q: "Quel est le montant maximum que je peux emprunter ?",
    a: "Selon le type de prêt, vous pouvez emprunter jusqu'à 75 000 € pour un prêt personnel, et jusqu'à 100 000 € pour un prêt professionnel. Le montant accordé dépend de votre profil et de votre capacité de remboursement.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-15 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
          >
            <HelpCircle className="w-6 h-6 text-white" />
          </div>

          <span className="inline-flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
            FAQ
            <span className="w-4 h-0.5 bg-green-500 rounded-full" />
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Questions fréquentes
          </h2>

          <p className="text-gray-500 text-base">
            Tout ce que vous devez savoir avant de faire votre demande.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? "#bbf7d0" : "#f3f4f6",
                  boxShadow: isOpen
                    ? "0 4px 24px rgba(22,163,74,0.10)"
                    : "0 1px 8px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex justify-between items-center w-full text-left px-6 py-5 transition-colors duration-200"
                  style={{ background: isOpen ? "#f0fdf4" : "white" }}
                >
                  <div className="flex items-center gap-3 pr-4">
                    {/* Numéro */}
                    <span
                      className="text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen ? "#16a34a" : "#f3f4f6",
                        color:      isOpen ? "white"   : "#9ca3af",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`font-semibold text-sm md:text-base transition-colors duration-200 ${
                        isOpen ? "text-green-800" : "text-gray-800"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className="w-5 h-5 transition-colors duration-200"
                      style={{ color: isOpen ? "#16a34a" : "#9ca3af" }}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-6 pb-5 pt-1"
                        style={{ background: "#f0fdf4" }}
                      >
                        {/* Séparateur */}
                        <div className="h-px bg-green-100 mb-4" />
                        <p className="text-sm text-gray-600 leading-relaxed pl-9">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Footer — contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#eff6ff" }}
            >
              <MessageCircle className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Vous ne trouvez pas votre réponse ?</p>
              <p className="text-xs text-gray-400 mt-0.5">Notre équipe répond en moins de 2h en semaine.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
            }}
          >
            Nous contacter
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}