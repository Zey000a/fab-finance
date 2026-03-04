import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import { Globe, Menu, X, ChevronDown, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const { lang, setLang, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
    { code: 'pt', label: 'PT' }
  ];

  const loanTypes = [
    { id: 'personnel', path: '/loans/personnel' },
    { id: 'pro', path: '/loans/pro' },
    { id: 'conso', path: '/loans/conso' },
    { id: 'etudiant', path: '/loans/etudiant' },
    { id: 'auto', path: '/loans/auto' },
    { id: 'rachat', path: '/loans/rachat' },
  ];

  const navLinks = [
    { path: "/", label: t('nav.home') },
    { path: "/about", label: t('nav.about') },
    { path: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Landmark className="w-6 h-6" />
            </div>
            <span className={`font-display font-bold text-2xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground lg:text-white'}`}>
              Nova<span className="text-primary">Finance</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>
              {t('nav.home')}
            </Link>

            {/* Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${location.startsWith('/loans') ? 'text-primary' : isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>
                {t('nav.loans')} <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {loansDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                  >
                    {loanTypes.map((loan) => (
                      <Link key={loan.id} href={loan.path} className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-primary transition-colors">
                        {t(`nav.loanTypes.${loan.id}`)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className={`font-medium transition-colors hover:text-primary ${location === '/about' ? 'text-primary' : isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>
              {t('nav.about')}
            </Link>
            <Link href="/contact" className={`font-medium transition-colors hover:text-primary ${location === '/contact' ? 'text-primary' : isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <button className={`flex items-center gap-1 p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/10 text-white'}`}>
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{lang}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code as any)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${lang === l.code ? 'text-primary font-bold' : 'text-gray-700'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <Link href="/simulateur" className="px-6 py-2.5 rounded-full font-semibold bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
              {t('nav.simulator')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium ${location === link.path ? 'text-primary' : 'text-gray-700'}`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-2 pb-2 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wider">{t('nav.loans')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {loanTypes.map((loan) => (
                    <Link 
                      key={loan.id} 
                      href={loan.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-gray-700 hover:text-primary py-1"
                    >
                      {t(`nav.loanTypes.${loan.id}`)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as any); setMobileMenuOpen(false); }}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${lang === l.code ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <Link 
                href="/simulateur" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 mt-4 rounded-xl font-semibold bg-primary text-white shadow-lg shadow-primary/30"
              >
                {t('nav.simulator')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
