import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import { Menu, X, ChevronDown, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const { lang, setLang, t } = useI18n();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = useMemo(() => [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
  ], []);

  const activeLang = languages.find(l => l.code === lang);

  const loanTypes = [
    { id: "personnel", path: "/loans/personnel" },
    { id: "pro", path: "/loans/pro" },
    { id: "conso", path: "/loans/conso" },
    { id: "etudiant", path: "/loans/etudiant" },
    { id: "auto", path: "/loans/auto" },
    { id: "rachat", path: "/loans/rachat" },
  ];

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

 

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition">
            <Landmark className="w-5 h-5" />
          </div>

          <span className="font-bold text-xl tracking-tight text-gray-900">
            Nova<span className="text-primary">Finance</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">

          <Link
            href="/"
            className={`font-medium transition ${
              location === "/" ? "text-primary" : "text-gray-700 hover:text-primary"
            }`}
          >
            {t("nav.home")}
          </Link>

          {/* LOANS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setLoansDropdownOpen(true)}
            onMouseLeave={() => setLoansDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-primary">
              {t("nav.loans")}
              <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {loansDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border"
                >
                  {loanTypes.map((loan) => (
                    <Link
                      key={loan.id}
                      href={loan.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-primary"
                    >
                      {t(`nav.loanTypes.${loan.id}`)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-medium transition ${
                location === link.path
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">

          {/* LANGUAGE */}
          <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg">{activeLang?.flag}</span>
            <span className="text-sm">{activeLang?.label}</span>
            <ChevronDown className="w-4 h-4 opacity-60" />
          </button>

          <AnimatePresence>
            {langDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border z-50"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as any)
                      setLangDropdownOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 ${
                      lang === l.code
                        ? "text-primary font-semibold bg-green-50"
                        : ""
                    }`}
                  >
                    <span>{l.flag}</span>
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
          {/* CTA */}
          <Link
            href="/simulateur"
            className="px-6 py-2.5 rounded-full font-semibold bg-primary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Demander un prêt
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4">

              {navLinks.map(link => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code as any)}
                    className={`p-2 rounded text-xl ${
                      lang === l.code ? "bg-primary/10 ring-2 ring-primary" : "bg-gray-100"
                    }`}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>

              <Link
                href="/simulateur"
                className="mt-4 text-center px-6 py-3 bg-primary text-white rounded-xl font-semibold"
              >
                Demander un prêt
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}