import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useI18n } from "@/lib/i18n-context";
import { Calculator, Euro, Calendar, Percent, CheckCircle2, AlertCircle, Loader2, Clock, Landmark, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const loanSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  loanType: z.string().min(1, "Type de crédit requis"),
  amount: z.number().min(500, "Montant minimum 500 €"),
  duration: z.number().min(6, "Durée minimum 6 mois"),
  address: z.string().min(5, "Adresse requise"),
  city: z.string().min(2, "Ville requise"),
  zipCode: z.string().min(5, "Code postal invalide"),
  country: z.string().min(2, "Pays requis"),
  income: z.number().min(0, "Revenu invalide"),
});

type LoanForm = z.infer<typeof loanSchema>;

export default function Simulator() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [decision, setDecision] = useState<'approved' | 'pending' | null>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm<LoanForm>({
    resolver: zodResolver(loanSchema),
    defaultValues: {
      amount: 15000,
      duration: 120,
      income: 3000,
      loanType: 'personnel'
    }
  });

  const amount = watch("amount");
  const duration = watch("duration");
  const income = watch("income");

  const annualRate = 0.045; // 4.5% Fixed
  const monthlyRate = annualRate / 12;
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration));
  const totalPaid = monthlyPayment * duration;
  const totalInterest = totalPaid - amount;

  const onSubmit = async (data: LoanForm) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (data.income > monthlyPayment * 3) {
      setDecision('approved');
    } else {
      setDecision('pending');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Demander un prêt</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Calculez vos mensualités et recevez une réponse de principe immédiate. Votre demande est 100% sécurisée et confidentielle.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Simulator Calculator */}
          <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <Calculator className="w-6 h-6" />
              </div>
              Simulateur
            </h2>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-gray-700">Montant souhaité</label>
                  <span className="text-lg font-black text-primary">{amount.toLocaleString()} €</span>
                </div>
                <input 
                  type="range" min="1000" max="100000" step="500" 
                  value={amount} onChange={(e) => setValue("amount", parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-bold text-gray-700">Durée de remboursement</label>
                  <span className="text-lg font-black text-primary">{duration} mois</span>
                </div>
                <input 
                  type="range" min="6" max="120" step="6" 
                  value={duration} onChange={(e) => setValue("duration", parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Percent className="w-20 h-20" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Mensualité</span>
                    <div className="text-4xl font-black text-white">{monthlyPayment.toFixed(2)} €</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Total remboursé</span>
                      <span className="text-sm font-bold">{totalPaid.toFixed(2)} €</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Total intérêts</span>
                      <span className="text-sm font-bold text-primary">{totalInterest.toFixed(2)} €</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Percent className="w-3 h-3" /> TAEG Fixe : 4.50%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
              {!decision ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8 md:p-12">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div>
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</div>
                        Informations personnelles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Prénom</label>
                          <input {...register("firstName")} placeholder="Jean" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none" />
                          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Nom</label>
                          <input {...register("lastName")} placeholder="Dupont" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none" />
                          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                          <input {...register("email")} type="email" placeholder="jean.dupont@email.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none" />
                          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Numéro de téléphone</label>
                          <input {...register("phone")} placeholder="06 12 34 56 78" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none" />
                          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</div>
                        Votre projet
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Type de crédit</label>
                          <select {...register("loanType")} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none cursor-pointer">
                            <option value="personnel">Prêt Personnel</option>
                            <option value="pro">Prêt Professionnel</option>
                            <option value="auto">Prêt Auto</option>
                            <option value="etudiant">Prêt Étudiant</option>
                            <option value="conso">Consommation</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 ml-1">Revenu mensuel (€)</label>
                          <input {...register("income", { valueAsNumber: true })} type="number" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none" />
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl font-black text-xl bg-primary text-white shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-6 h-6 animate-spin" /> Analyse en cours...</>
                      ) : (
                        "Demander un prêt"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-12 text-center">
                  {decision === 'approved' ? (
                    <div className="space-y-6">
                      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h2 className="text-4xl font-black text-gray-900">Demande pré-approuvée !</h2>
                      <p className="text-xl text-gray-500 max-w-lg mx-auto leading-relaxed">Félicitations, votre profil correspond à nos critères. Un conseiller va vous contacter sous 24h pour finaliser votre dossier.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Clock className="w-12 h-12" />
                      </div>
                      <h2 className="text-4xl font-black text-gray-900">Demande en cours d'analyse</h2>
                      <p className="text-xl text-gray-500 max-w-lg mx-auto leading-relaxed">Votre dossier nécessite une étude approfondie. Vous recevrez une réponse par email d'ici 48h.</p>
                    </div>
                  )}
                  <button onClick={() => { setDecision(null); reset(); }} className="mt-12 px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors">
                    Faire une autre simulation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}