import { Link } from "wouter";
import { useI18n } from "@/lib/i18n-context";
import { Landmark, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Nova<span className="text-primary">Finance</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook className="w-4 h-4"/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="w-4 h-4"/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-4 h-4"/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Instagram className="w-4 h-4"/></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('nav.loans')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/loans/personnel" className="hover:text-primary transition-colors">{t('nav.loanTypes.personnel')}</Link></li>
              <li><Link href="/loans/pro" className="hover:text-primary transition-colors">{t('nav.loanTypes.pro')}</Link></li>
              <li><Link href="/loans/conso" className="hover:text-primary transition-colors">{t('nav.loanTypes.conso')}</Link></li>
              <li><Link href="/loans/auto" className="hover:text-primary transition-colors">{t('nav.loanTypes.auto')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Presse</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestion des cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-500 text-center space-y-4">
          <p className="font-semibold text-gray-400">⚠️ {t('footer.legal')}</p>
          <p>&copy; {currentYear} NovaFinance. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
