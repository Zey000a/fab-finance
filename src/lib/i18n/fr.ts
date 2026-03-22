// ─────────────────────────────────────────────────────────────────────────────
// FRANÇAIS — Source de vérité
// Couvre : Home, Navbar, Footer, et tous les composants home/
// Toute nouvelle clé doit être ajoutée ici EN PREMIER
// puis reproduite dans en.ts / de.ts / es.ts / it.ts / pt.ts
// ─────────────────────────────────────────────────────────────────────────────

export const fr = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:      "Accueil",
    loans:     "Nos Prêts",
    about:     "À Propos",
    contact:   "Contact",
    comment:   "Comment ça marche",
    simulator: "Simulateur",
    loanTypes: {
      personnel:     "Prêt Personnel",
      professionnel: "Prêt Professionnel",
      conso:         "Prêt Consommation",
      etudiant:      "Prêt Étudiant",
      auto:          "Prêt Auto",
      rachat:        "Rachat de Crédit",
    },
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    badge:        "Réponse en moins de 2 minutes",
    titleLine1:   "Financez",
    titleHighlight:"vos projets",
    titleLine2:   "simplement.",
    subtitle:     "Simulez votre prêt en quelques secondes, obtenez une réponse immédiate.",
    subtitleBold: "Transparent, rapide, sans engagement.",
    cta1:         "Simuler mon prêt",
    cta2:         "Découvrir les prêts",
    trustBadges: {
      instant:  "Réponse immédiate",
      secure:   "Données sécurisées",
      clients:  "+12 000 clients",
    },
    statsCard: {
      rateLabel:   "Taux à partir de",
      rateCompete: "Compétitif",
      rateSub:     "TAEG · Sous conditions",
      minLabel:    "Montant min.",
      maxLabel:    "Montant max.",
      secureTitle: "100% sécurisé",
      secureSub:   "Vos données protégées",
      clientsCount:"12 000+",
      clientsSub:  "clients satisfaits",
    },
  },

  // ── Hero Simulator ───────────────────────────────────────────────────────────
  heroSimulator: {
    badge:        "Simulateur de prêt",
    titleBefore:  "Financez",
    titleHighlight:"ce qui compte",
    titleAfter:   "vraiment.",
    subtitle:     "Voiture, travaux, études ou voyage — obtenez une estimation en temps réel, sans engagement.",
    projects: {
      travaux: "Travaux",
      auto:    "Auto",
      etudes:  "Études",
      voyage:  "Voyage",
      mariage: "Mariage",
      sante:   "Santé",
    },
    stats: {
      rate:    "3%",
      rateLabel:    "TAEG dès",
      unlock:  "48h",
      unlockLabel:  "Déblocage",
      online:  "100%",
      onlineLabel:  "En ligne",
    },
    card: {
      title:       "Votre simulation",
      badge:       "Gratuit · Sans engagement",
      amountLabel: "Montant souhaité",
      durationLabel:"Durée de remboursement",
      monthlyLabel: "Mensualité estimée",
      interestLabel:"Coût total intérêts",
      rateNote:    "TAEG fixe indicatif : 3% · Simulation non contractuelle",
      nofees:      "Sans frais de dossier",
      instant:     "Réponse immédiate",
      cta:         "Trouver mon crédit",
      legal:       "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    },
  },

  // ── Popular Projects ─────────────────────────────────────────────────────────
  popularProjects: {
    badge:    "Vos projets de vie",
    title:    "Donnez vie à vos projets",
    subtitle: "Des solutions de financement pensées pour chaque étape de votre vie.",
    cta:      "Simuler mon prêt gratuitement",
    ctaSub:   "Sans engagement · Réponse en moins de 2 minutes",
    learnMore:"En savoir plus",
    projects: [
      {
        title:       "Acheter une voiture",
        description: "Financez votre véhicule neuf ou d'occasion avec un taux compétitif.",
        tag:         "Dès 3%",
      },
      {
        title:       "Faire des travaux",
        description: "Rénovez votre maison avec un financement flexible et rapide.",
        tag:         "Jusqu'à 75 000€",
      },
      {
        title:       "Partir en voyage",
        description: "Réalisez le voyage dont vous rêvez sans attendre.",
        tag:         "Réponse immédiate",
      },
      {
        title:       "Financer des études",
        description: "Investissez dans votre avenir avec un prêt étudiant sur mesure.",
        tag:         "Taux préférentiel",
      },
      {
        title:       "Organiser un mariage",
        description: "Préparez votre grand jour en toute sérénité.",
        tag:         "Sans frais de dossier",
      },
    ],
  },

  // ── Loan Products ────────────────────────────────────────────────────────────
  loanProducts: {
    badge:    "Nos produits",
    title:    "Nos solutions de financement",
    subtitle: "Survolez une carte pour voir une estimation instantanée de votre mensualité.",
    cta:      "Comparer toutes nos offres",
    example:  "Exemple",
    perMonth: "/ mois estimé",
    seeOffer: "Voir l'offre",
    products: [
      { title: "Prêt personnel",    description: "Financez n'importe quel projet de vie sans justificatif."        },
      { title: "Prêt professionnel",description: "Développez votre activité avec un financement flexible."         },
      { title: "Prêt conso",        description: "Réalisez vos achats avec une solution simple et rapide."         },
      { title: "Prêt étudiant",     description: "Financez vos études et investissez dans votre avenir."           },
      { title: "Prêt auto",         description: "Achetez votre véhicule neuf ou d'occasion au meilleur taux."    },
      { title: "Rachat de crédit",  description: "Regroupez vos crédits et allégez vos mensualités."              },
    ],
  },

  // ── Highlighted Project (slider) ─────────────────────────────────────────────
  highlightedProject: {
    badge: "Projets à la une",
    title: "Quel est votre prochain projet ?",
    noCommit: "Sans engagement · Gratuit",
    trustBadges: {
      rating:  "+200 000 clients",
      secure:  "100% sécurisé",
    },
    proofs: {
      rating: "Noté 4.8/5 par nos clients",
      speed:  "Réponse en 2 minutes",
      secure: "Données 100% sécurisées",
    },
    slides: [
      {
        title:       "Achetez la voiture de vos rêves",
        subtitle:    "Prêt auto",
        description: "Neuf ou d'occasion, obtenez un financement rapide avec un taux compétitif. Réponse en moins de 2 minutes.",
        cta:         "Simuler mon prêt auto",
        tag:         "Dès 3,9% TAEG",
      },
      {
        title:       "Transformez votre maison",
        subtitle:    "Travaux & rénovation",
        description: "Cuisine, salle de bain, extension… Financez vos travaux jusqu'à 75 000€ avec des mensualités adaptées.",
        cta:         "Financer mes travaux",
        tag:         "Jusqu'à 75 000€",
      },
      {
        title:       "Le monde vous appartient",
        subtitle:    "Voyage & évasion",
        description: "Bali, Islande, Japon… Ne laissez plus le budget freiner vos aventures. Partez maintenant, remboursez sereinement.",
        cta:         "Financer mon voyage",
        tag:         "Réponse immédiate",
      },
      {
        title:       "Investissez dans votre avenir",
        subtitle:    "Études & formation",
        description: "Master, école de commerce, formation pro — accédez aux meilleures formations sans contrainte financière.",
        cta:         "Financer mes études",
        tag:         "Taux préférentiel",
      },
    ],
  },

  // ── Mission Section ──────────────────────────────────────────────────────────
  mission: {
    badge:      "FabFinance & Vous",
    title:      "Le financement qui",
    titleHighlight: "fait la différence",
    text1:      "Chez FabFinance, nous mettons notre expertise au service de vos projets de vie. Prêt personnel, crédit consommation, prêt auto ou rachat de crédit : des solutions simples, transparentes et adaptées à chaque situation.",
    text2:      "Notre mission est de rendre le financement plus accessible grâce à des outils digitaux innovants et à un accompagnement humain à chaque étape.",
    cta:        "Découvrir notre mission",
    stats: {
      clients:     "+200 000",
      clientsLabel:"projets financés",
      rating:      "4.8",
      ratingLabel: "Avis clients",
    },
    pillars: [
      { title: "Rapidité",        text: "Réponse en moins de 2 minutes, déblocage des fonds en 48h."                    },
      { title: "Transparence",    text: "Zéro frais cachés. Chaque euro est expliqué avant signature."                   },
      { title: "Accompagnement",  text: "Des conseillers humains disponibles à chaque étape de votre projet."            },
      { title: "Inclusion",       text: "Nos solutions sont pensées pour tous les profils, sans discrimination."          },
    ],
  },

  // ── Why Choose Us ────────────────────────────────────────────────────────────
  whyChooseUs: {
    badge:    "Nos engagements",
    title:    "Pourquoi choisir",
    titleHighlight: "FabFinance ?",
    subtitle: "Technologie et expertise humaine réunies pour une expérience de financement simple, rapide et fiable.",
    items: [
      {
        title:      "Réponse rapide",
        desc:       "Obtenez une réponse de principe en quelques minutes. Pas d'attente, pas de paperasse inutile.",
        stat:       "2 min",
        statLabel:  "réponse de principe",
      },
      {
        title:      "100% sécurisé",
        desc:       "Vos données sont chiffrées et protégées par des technologies bancaires de dernière génération.",
        stat:       "256-bit",
        statLabel:  "chiffrement SSL",
      },
      {
        title:      "Accompagnement humain",
        desc:       "Nos conseillers dédiés vous guident à chaque étape, de la simulation à la signature.",
        stat:       "7j/7",
        statLabel:  "conseillers disponibles",
      },
      {
        title:      "Taux compétitifs",
        desc:       "Des solutions transparentes adaptées à votre profil. Zéro frais cachés, zéro mauvaise surprise.",
        stat:       "3%",
        statLabel:  "TAEG à partir de",
      },
    ],
    metrics: [
      { value: "+200 000", label: "projets financés"    },
      { value: "48h",      label: "déblocage des fonds" },
      { value: "4.8/5",    label: "satisfaction client" },
      { value: "0€",       label: "frais de dossier"    },
    ],
  },

  // ── Trust Section ────────────────────────────────────────────────────────────
  trust: {
    badge:    "Preuve sociale",
    title:    "Ils nous font",
    titleHighlight: "confiance",
    subtitle: "Des milliers de clients font confiance à FabFinance pour financer leurs projets personnels et professionnels.",
    certifiedBy: "Reconnu et certifié par",
    stats: [
      { value: "+200 000", label: "projets financés"     },
      { value: "4.8 / 5",  label: "satisfaction clients" },
      { value: "48h",      label: "délai de déblocage"   },
      { value: "100%",     label: "plateforme sécurisée" },
    ],
    reviews: [
      {
        name: "Sophie Martin",
        role: "Prêt personnel · 12 000€",
        text: "Demande ultra simple et réponse en quelques minutes. J'ai obtenu mon financement en moins de 48h. Je recommande les yeux fermés !",
      },
      {
        name: "Lucas Bernard",
        role: "Prêt auto · 18 000€",
        text: "Interface claire et transparente. La simulation m'a permis de comprendre immédiatement le coût réel de mon crédit. Aucune mauvaise surprise.",
        featured: true,
        featuredLabel: "Coup de ❤️",
      },
      {
        name: "Claire Dupont",
        role: "Travaux · 25 000€",
        text: "Service client vraiment professionnel et disponible. Ils m'ont accompagnée de A à Z pour financer ma rénovation. Merci FabFinance !",
      },
    ],
  },

  // ── FAQ Section ──────────────────────────────────────────────────────────────
  faq: {
    badge:       "FAQ",
    title:       "Questions fréquentes",
    subtitle:    "Tout ce que vous devez savoir avant de faire votre demande.",
    notFound:    "Vous ne trouvez pas votre réponse ?",
    teamReply:   "Notre équipe répond en moins de 2h en semaine.",
    contactCta:  "Nous contacter",
    items: [
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
    ],
  },

  // ── Final CTA ────────────────────────────────────────────────────────────────
  finalCta: {
    badge:       "Simulation gratuite · Sans engagement",
    title:       "Prêt à concrétiser",
    titleHighlight: "votre projet ?",
    subtitle1:   "Rejoignez",
    subtitle2:   "+200 000 clients",
    subtitle3:   "qui nous font confiance. Faites votre demande en 2 minutes et obtenez une réponse de principe immédiate.",
    cta1:        "Demander un prêt maintenant",
    cta2:        "Parler à un conseiller",
    badges: {
      speed:    "Réponse en 2 minutes",
      secure:   "100% sécurisé",
      clients:  "+200 000 clients satisfaits",
    },
    legal: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. FabFinance — ORIAS n° XXXXXXXX.",
  },

  // ── Simulator page ───────────────────────────────────────────────────────────
  simulator: {
    title:          "Simulez votre prêt",
    subtitle:       "Estimation instantanée · Sans engagement",
    amount:         "Montant souhaité",
    duration:       "Durée de remboursement",
    monthlyPayment: "Mensualité estimée",
    rate:           "TAEG fixe indicatif : 4,5%",
    totalPaid:      "Total remboursé",
    totalInterest:  "Coût des intérêts",
    cta:            "Demander mon prêt",
    legal:          "Simulation non contractuelle",
    nofees:         "Sans frais de dossier",
    instant:        "Réponse immédiate",
  },

  // ── How it works ─────────────────────────────────────────────────────────────
  howItWorks: {
    badge:     "Processus 100% transparent",
    title:     "Comment obtenir votre prêt ?",
    subtitle:  "De la simulation au versement des fonds, découvrez chaque étape.",
    steps:     "6 étapes simples",
    journey:   "Le parcours FabFinance",
    guarantee: "Nos engagements",
    whyUs:     "Pourquoi choisir FabFinance ?",
    cta:       "Démarrer ma simulation",
    ctaSub:    "Gratuit · Sans engagement · Réponse en 2 minutes",
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    badge:    "Notre histoire",
    title:    "Une fintech au service de vos projets",
    subtitle: "Depuis 2016, FabFinance accompagne particuliers et professionnels dans leurs projets de financement.",
    mission:  "Notre mission",
    values:   "Nos valeurs",
    team:     "Notre équipe",
    cta:      "Simuler un prêt",
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    badge:        "Nous contacter",
    title:        "Parlons de votre projet",
    subtitle:     "Notre équipe vous répond sous 24h.",
    name:         "Nom complet",
    email:        "Email",
    phone:        "Téléphone",
    subject:      "Sujet",
    message:      "Votre message",
    submit:       "Envoyer le message",
    success:      "Message envoyé avec succès !",
    successDesc:  "Nous vous répondrons sous 24h.",
    online:       "En ligne maintenant",
    responseTime: "Réponse sous 24h",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline:    "Votre partenaire de confiance pour tous vos projets de financement.",
    ctaTitle:   "Prêt à financer votre projet ?",
    ctaSub:     "Simulation gratuite · Réponse en 2 minutes · Sans engagement",
    ctaButton:  "Simuler mon prêt",
    rights:     "Tous droits réservés.",
    legal:      "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    links: {
      loans:   "Nos prêts",
      company: "Entreprise",
      legal:   "Légal",
    },
    legalLinks: {
      mentions:  "Mentions légales",
      privacy:   "Politique de confidentialité",
      howItWorks:"Comment ça marche",
      cookies:   "Gestion des cookies",
    },
  },

  // ── Common ───────────────────────────────────────────────────────────────────
  common: {
    simulate:  "Simuler mon prêt",
    learnMore: "En savoir plus",
    back:      "Retour",
    free:      "Gratuit",
    noFees:    "Sans frais",
    secure:    "100% sécurisé",
    instant:   "Réponse instantanée",
    noCommit:  "Sans engagement",
    monthly:   "mois",
    euros:     "€",
  },
}

export type Translation = typeof fr