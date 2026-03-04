import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useI18n } from "@/lib/i18n-context";
import { Calculator, Euro, Calendar, Percent, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const loanRequestSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  monthlyIncome: z.number({ invalid_type_error: "Doit être un nombre" }).min(0, "Le revenu doit être positif"),
  requestedAmount: z.number({ invalid_type_error: "Doit être un nombre" }).min(1000, "Le montant minimum est de 1000 €"),
  durationMonths: z.number({ invalid_type_error: "Doit être un nombre" }).min(6, "La durée minimale est de 6 mois").max(360, "La durée maximale est de 360 mois"),
});

type LoanRequest = z.infer<typeof loanRequestSchema>;

export default function Simulator() {
  const { t } = useI18n();
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(48);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  
  const ANNUAL_RATE = 4.5; // Fixed for demo

  // Calculate monthly payment whenever amount or duration changes
  useEffect(() => {
    const r = (ANNUAL_RATE / 100) / 12;
    const n = duration;
    const p = amount;
    
    if (r === 0) {
      setMonthlyPayment(p / n);
    } else {
      const payment = (p * r) / (1 - Math.pow(1 + r, -n));
      setMonthlyPayment(payment);
    }
  }, [amount, duration]);

  // Form handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [decision, setDecision] = useState<'none' | 'approved' | 'analysis'>('none');

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<LoanRequest>({
    resolver: zodResolver(loanRequestSchema),
    defaultValues: {
      requestedAmount: amount,
      durationMonths: duration,
      monthlyIncome: 3000
    }
  });

  // Sync sliders with form
  useEffect(() => {
    setValue('requestedAmount', amount);
    setValue('durationMonths', duration);
  }, [amount, duration, setValue]);

  const onSubmit = async (data: LoanRequest) => {
    setIsSubmitting(true);
    setDecision('none');
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Pre-approval logic: income > monthly payment * 3
    if (data.monthlyIncome > (monthlyPayment * 3)) {
      setDecision('approved');
    } else {
      setDecision('analysis');
    }
    
    setIsSubmitting(false);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('simulator.title')}</h1>
          <p className="text-gray-600">Estimez vos mensualités instantanément et obtenez une réponse de principe sans engagement.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sliders Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Calculator className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Paramètres</h2>
              </div>

              {/* Amount Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-600 font-medium flex items-center gap-2">
                    <Euro className="w-4 h-4" /> {t('simulator.amount')}
                  </label>
                  <span className="text-2xl font-bold text-primary">{formatCurrency(amount)}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1 000 €</span>
                  <span>50 000 €</span>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-600 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {t('simulator.duration')}
                  </label>
                  <span className="text-2xl font-bold text-primary">{duration} mois</span>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="84" 
                  step="6"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>6 mois</span>
                  <span>84 mois</span>
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full transform -translate-y-1/2 scale-150"></div>
                <div className="relative z-10">
                  <p className="text-gray-300 mb-2">{t('simulator.monthlyPayment')}</p>
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {formatCurrency(monthlyPayment)}<span className="text-lg text-gray-400 font-normal">/mois</span>
                  </div>
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                    <Percent className="w-3 h-3" /> {t('simulator.rate')}: {ANNUAL_RATE}%
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 relative h-full">
              
              <AnimatePresence mode="wait">
                {decision !== 'none' ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-10 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                  >
                    {decision === 'approved' ? (
                      <>
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                          <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('simulator.preApproved')}</h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-md">Félicitations ! Votre profil correspond à nos critères. Un conseiller va vous contacter sous peu pour finaliser votre dossier.</p>
                      </>
                    ) : (
                      <>
                        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                          <AlertCircle className="w-12 h-12" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('simulator.analysis')}</h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-md">Votre demande nécessite une analyse plus approfondie par l'un de nos experts. Nous vous recontacterons très vite.</p>
                      </>
                    )}
                    <button 
                      onClick={() => setDecision('none')}
                      className="px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Nouvelle simulation
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl font-bold mb-6">Demande en ligne</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('simulator.name')}</label>
                          <input 
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('simulator.email')}</label>
                          <input 
                            {...register("email")}
                            type="email"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('simulator.income')}</label>
                        <input 
                          {...register("monthlyIncome", { valueAsNumber: true })}
                          type="number"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-xl font-bold"
                        />
                        {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome.message}</p>}
                      </div>

                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 text-sm text-blue-800">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>Les informations saisies sont strictement confidentielles et ne servent qu'à évaluer la faisabilité de votre projet.</p>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-lg mt-8"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-6 h-6 animate-spin" /> Analyse en cours...</>
                        ) : (
                          t('simulator.submit')
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
