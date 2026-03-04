import { Link } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, ArrowRight, Wallet, Car, GraduationCap, Building2, CreditCard, RefreshCw } from "lucide-react";

export default function Home() {
  const { t } = useI18n();

  const loanTypes = [
    { id: 'personnel', icon: Wallet, color: 'bg-blue-50 text-blue-600' },
    { id: 'pro', icon: Building2, color: 'bg-indigo-50 text-indigo-600' },
    { id: 'conso', icon: CreditCard, color: 'bg-purple-50 text-purple-600' },
    { id: 'etudiant', icon: GraduationCap, color: 'bg-orange-50 text-orange-600' },
    { id: 'auto', icon: Car, color: 'bg-rose-50 text-rose-600' },
    { id: 'rachat', icon: RefreshCw, color: 'bg-green-50 text-green-600' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">
        {/* modern architecture glass building */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              100% Digital & Sécurisé
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/simulateur" className="px-8 py-4 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2">
                {t('hero.cta1')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="px-8 py-4 rounded-xl font-bold bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all text-center">
                {t('hero.cta2')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('advantages.title')}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('advantages.speed')}</h3>
              <p className="text-gray-600">{t('advantages.speedDesc')}</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('advantages.transparency')}</h3>
              <p className="text-gray-600">{t('advantages.transparencyDesc')}</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('advantages.support')}</h3>
              <p className="text-gray-600">{t('advantages.supportDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos solutions de financement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Découvrez la gamme complète de nos prêts adaptés à chaque étape de votre vie.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan, idx) => {
              const Icon = loan.icon;
              return (
                <Link key={loan.id} href={`/loans/${loan.id}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white group p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all cursor-pointer h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${loan.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {t(`nav.loanTypes.${loan.id}`)}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Taux fixe à partir de 2.9% TAEG. Financement rapide et sans apport obligatoire.
                    </p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Découvrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Notre Histoire</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">2016</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="font-bold text-lg mb-1">Création de NovaFinance</h3>
                <p className="text-gray-600 text-sm">Lancement de la plateforme avec une vision: démocratiser l'accès au crédit.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">2019</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="font-bold text-lg mb-1">Expansion Européenne</h3>
                <p className="text-gray-600 text-sm">Ouverture de bureaux en Allemagne et en Espagne.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">2023</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="font-bold text-lg mb-1">1 Million de clients</h3>
                <p className="text-gray-600 text-sm">Une étape majeure franchie avec plus d'un million de projets financés.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880210830-85910bad3d00?q=80&w=2000&auto=format&fit=crop" 
            alt="Advisor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Besoin de financement ?<br/>
            <span className="text-primary">Faites votre demande en 2 minutes.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers de clients qui nous font confiance pour leurs projets. Réponse de principe immédiate et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/simulateur" className="px-10 py-5 rounded-2xl font-black text-xl bg-primary text-white shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-1 transition-all">
              Demander un prêt
            </Link>
            <Link href="/contact" className="px-10 py-5 rounded-2xl font-black text-xl bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
