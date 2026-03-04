export type Language = 'fr' | 'en' | 'de' | 'es' | 'it' | 'pt';

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      loans: "Nos Prêts",
      about: "À Propos",
      contact: "Contact",
      simulator: "Simulateur",
      loanTypes: {
        personnel: "Prêt Personnel",
        pro: "Prêt Professionnel",
        conso: "Prêt Consommation",
        etudiant: "Prêt Étudiant",
        auto: "Prêt Auto",
        rachat: "Rachat de Crédit"
      }
    },
    hero: {
      title: "Une approche différente du financement",
      subtitle: "Des solutions de crédit sur mesure, transparentes et rapides pour réaliser tous vos projets en toute sérénité.",
      cta1: "Demander un prêt",
      cta2: "Découvrir nos prêts"
    },
    advantages: {
      title: "Pourquoi nous choisir ?",
      speed: "Rapidité",
      speedDesc: "Réponse de principe immédiate et fonds disponibles sous 48h.",
      transparency: "Transparence",
      transparencyDesc: "Aucun frais caché. Un taux fixe garanti pendant toute la durée.",
      support: "Accompagnement",
      supportDesc: "Des conseillers experts dédiés à la réussite de vos projets."
    },
    simulator: {
      title: "Simulez votre prêt",
      amount: "Montant souhaité (€)",
      duration: "Durée (mois)",
      monthlyPayment: "Mensualité estimée",
      rate: "TAEG Fixe (indicatif)",
      income: "Revenus mensuels nets (€)",
      name: "Nom complet",
      email: "Email",
      submit: "Demander un prêt",
      preApproved: "Pré-approuvé",
      analysis: "En analyse",
      success: "Votre demande a été envoyée avec succès. Un conseiller vous contactera sous 24h."
    },
    footer: {
      rights: "Tous droits réservés.",
      legal: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager."
    }
  },
  en: {
    nav: {
      home: "Home",
      loans: "Our Loans",
      about: "About",
      contact: "Contact",
      simulator: "Simulator",
      loanTypes: {
        personnel: "Personal Loan",
        pro: "Business Loan",
        conso: "Consumer Loan",
        etudiant: "Student Loan",
        auto: "Auto Loan",
        rachat: "Debt Consolidation"
      }
    },
    hero: {
      title: "A different approach to financing",
      subtitle: "Tailor-made, transparent, and fast credit solutions to achieve all your projects with peace of mind.",
      cta1: "Start Simulation",
      cta2: "Discover Loans"
    },
    advantages: {
      title: "Why choose us?",
      speed: "Speed",
      speedDesc: "Immediate approval in principle and funds available within 48h.",
      transparency: "Transparency",
      transparencyDesc: "No hidden fees. A guaranteed fixed rate throughout the term.",
      support: "Support",
      supportDesc: "Expert advisors dedicated to the success of your projects."
    },
    simulator: {
      title: "Simulate your loan",
      amount: "Requested amount (€)",
      duration: "Duration (months)",
      monthlyPayment: "Estimated monthly payment",
      rate: "Fixed APR (indicative)",
      income: "Net monthly income (€)",
      name: "Full Name",
      email: "Email",
      submit: "Submit Request",
      preApproved: "Pre-approved",
      analysis: "Under analysis",
      success: "Your request has been successfully sent. An advisor will contact you within 24h."
    },
    footer: {
      rights: "All rights reserved.",
      legal: "A loan binds you and must be repaid. Check your repayment capacity before committing."
    }
  },
  de: {
    nav: { home: "Startseite", loans: "Unsere Kredite", about: "Über uns", contact: "Kontakt", simulator: "Simulator", loanTypes: { personnel: "Privatkredit", pro: "Geschäftskredit", conso: "Konsumentenkredit", etudiant: "Studienkredit", auto: "Autokredit", rachat: "Umschuldung" } },
    hero: { title: "Ein anderer Ansatz zur Finanzierung", subtitle: "Maßgeschneiderte, transparente und schnelle Kreditlösungen.", cta1: "Simulation starten", cta2: "Kredite entdecken" },
    advantages: { title: "Warum uns wählen?", speed: "Geschwindigkeit", speedDesc: "Sofortige grundsätzliche Zusage.", transparency: "Transparenz", transparencyDesc: "Keine versteckten Gebühren.", support: "Unterstützung", supportDesc: "Expertenberater für Sie." },
    simulator: { title: "Kredit simulieren", amount: "Betrag (€)", duration: "Dauer (Monate)", monthlyPayment: "Monatliche Rate", rate: "Fester effektiver Jahreszins", income: "Nettoeinkommen (€)", name: "Name", email: "E-Mail", submit: "Anfrage senden", preApproved: "Vorab genehmigt", analysis: "In Prüfung", success: "Erfolgreich gesendet." },
    footer: { rights: "Alle Rechte vorbehalten.", legal: "Ein Kredit ist bindend und muss zurückgezahlt werden." }
  },
  es: {
    nav: { home: "Inicio", loans: "Nuestros Préstamos", about: "Acerca de", contact: "Contacto", simulator: "Simulador", loanTypes: { personnel: "Préstamo Personal", pro: "Préstamo Comercial", conso: "Préstamo de Consumo", etudiant: "Préstamo Estudiantil", auto: "Préstamo de Auto", rachat: "Consolidación de Deuda" } },
    hero: { title: "Un enfoque diferente para la financiación", subtitle: "Soluciones de crédito a medida, transparentes y rápidas.", cta1: "Iniciar Simulación", cta2: "Descubrir Préstamos" },
    advantages: { title: "¿Por qué elegirnos?", speed: "Velocidad", speedDesc: "Aprobación inmediata.", transparency: "Transparencia", transparencyDesc: "Sin comisiones ocultas.", support: "Soporte", supportDesc: "Asesores expertos." },
    simulator: { title: "Simula tu préstamo", amount: "Monto (€)", duration: "Duración (meses)", monthlyPayment: "Cuota mensual", rate: "TAE fija", income: "Ingresos netos (€)", name: "Nombre", email: "Email", submit: "Enviar solicitud", preApproved: "Preaprobado", analysis: "En análisis", success: "Enviado con éxito." },
    footer: { rights: "Todos los derechos reservados.", legal: "Un préstamo es un compromiso y debe ser reembolsado." }
  },
  it: {
    nav: { home: "Home", loans: "I nostri Prestiti", about: "Chi Siamo", contact: "Contatto", simulator: "Simulatore", loanTypes: { personnel: "Prestito Personale", pro: "Prestito Aziendale", conso: "Prestito al Consumo", etudiant: "Prestito Studenti", auto: "Prestito Auto", rachat: "Consolidamento Debiti" } },
    hero: { title: "Un approccio diverso al finanziamento", subtitle: "Soluzioni di credito su misura, trasparenti e veloci.", cta1: "Inizia Simulazione", cta2: "Scopri i Prestiti" },
    advantages: { title: "Perché sceglierci?", speed: "Velocità", speedDesc: "Approvazione immediata.", transparency: "Trasparenza", transparencyDesc: "Nessun costo nascosto.", support: "Supporto", supportDesc: "Consulenti esperti." },
    simulator: { title: "Simula il tuo prestito", amount: "Importo (€)", duration: "Durata (mesi)", monthlyPayment: "Rata mensile", rate: "TAEG fisso", income: "Reddito netto (€)", name: "Nome", email: "Email", submit: "Invia richiesta", preApproved: "Pre-approvato", analysis: "In analisi", success: "Inviato con successo." },
    footer: { rights: "Tutti i diritti riservati.", legal: "Un prestito è un impegno e deve essere rimborsato." }
  },
  pt: {
    nav: { home: "Início", loans: "Nossos Empréstimos", about: "Sobre", contact: "Contato", simulator: "Simulador", loanTypes: { personnel: "Crédito Pessoal", pro: "Crédito Empresarial", conso: "Crédito ao Consumo", etudiant: "Crédito Estudante", auto: "Crédito Automóvel", rachat: "Consolidação de Dívidas" } },
    hero: { title: "Uma abordagem diferente ao financiamento", subtitle: "Soluções de crédito à medida, transparentes e rápidas.", cta1: "Iniciar Simulação", cta2: "Descobrir Empréstimos" },
    advantages: { title: "Porquê escolher-nos?", speed: "Rapidez", speedDesc: "Aprovação imediata.", transparency: "Transparência", transparencyDesc: "Sem taxas ocultas.", support: "Apoio", supportDesc: "Consultores especializados." },
    simulator: { title: "Simule o seu empréstimo", amount: "Montante (€)", duration: "Duração (meses)", monthlyPayment: "Prestação mensal", rate: "TAEG fixa", income: "Rendimentos líquidos (€)", name: "Nome", email: "Email", submit: "Enviar pedido", preApproved: "Pré-aprovado", analysis: "Em análise", success: "Enviado com sucesso." },
    footer: { rights: "Todos os direitos reservados.", legal: "Um crédito é um compromisso e deve ser reembolsado." }
  }
};
