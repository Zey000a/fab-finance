export const loanConfig: any = {
  personnel: {
    meta: {
      title: "Prêt personnel",
      slug: "pret-personnel",
      category: "personnel",
    },

    hero: {
      title: "Prêt personnel",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      tagline: "Financez vos projets en toute liberté",
    },

    conditions: {
      min: "1 000 €",
      max: "75 000 €",
      duration: "12 à 84 mois",
      taeg: "à partir de 2.9%",
      rateType: "Fixe",
    },

    advantages: [
      "Aucun justificatif d'utilisation",
      "Remboursement anticipé gratuit",
      "Pause mensualité possible",
    ],

    description: {
      intro: `
Le prêt personnel est une solution de financement simple et flexible
qui vous permet de concrétiser vos projets sans puiser dans votre épargne.
`,

      paragraphs: [
        `
Chez NovaFinance, le prêt personnel s’adapte à vos besoins et à votre situation.
Vous pouvez financer différents projets : travaux, achat d’un véhicule,
organisation d’un événement ou dépenses imprévues.
`,
        `
Grâce à notre plateforme digitale sécurisée, vous pouvez simuler votre financement
en quelques secondes et connaître immédiatement votre mensualité estimée.
`,
        `
Notre équipe d’experts analyse votre demande rapidement afin de vous proposer
la solution de financement la plus adaptée à votre situation.
`,
      ],
    },

    explanation: {
      title: "Comprendre le prêt personnel",

      paragraphs: [
        `Le prêt personnel est une solution de financement flexible qui permet
de financer différents projets sans avoir à fournir de justificatif
d'utilisation des fonds.`,

        `Que ce soit pour financer des travaux, un voyage ou faire face
à une dépense imprévue, ce crédit permet de disposer rapidement
d'une somme d'argent.`,

        `Chez NovaFinance, vous pouvez simuler votre prêt en ligne en quelques
secondes afin de connaître le montant de vos mensualités.`,

        `Notre équipe vous accompagne pour vous proposer une solution
claire, transparente et adaptée à votre situation financière.`,
      ],
    },

    usages: [
      {
        title: "Acheter une voiture",
        desc: "Financez votre véhicule neuf ou d'occasion rapidement.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      },

      {
        title: "Faire des travaux",
        desc: "Améliorez votre logement avec un financement flexible.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      },

      {
        title: "Financer un voyage",
        desc: "Réalisez vos projets personnels en toute sérénité.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
    ],

    cta: {
      title: "Simulez votre prêt personnel",
      button: "Faire une simulation",
    },
  },
  etudiant: {
    meta: {
      title: "Prêt étudiant",
      slug: "pret-etudiant",
      category: "etudiant",
    },

    hero: {
      title: "Prêt étudiant",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      tagline: "Financez vos études et préparez votre avenir",
    },

    conditions: {
      min: "1 000 €",
      max: "50 000 €",
      duration: "12 à 120 mois",
      taeg: "à partir de 0.90%",
      rateType: "Fixe",
    },

    advantages: [
      "Remboursement différé pendant les études",
      "Pas de frais de dossier",
      "Caution parentale simplifiée",
    ],

    description: {
      intro: `
Le prêt étudiant est une solution de financement spécialement conçue
pour accompagner les étudiants dans la réalisation de leurs études
et de leurs projets académiques.
`,

      paragraphs: [
        `
Grâce au prêt étudiant, vous pouvez financer les frais de scolarité,
le logement, le matériel informatique ou encore les dépenses liées
à votre vie étudiante.
`,
        `
Chez NovaFinance, nous proposons des solutions de financement
adaptées aux étudiants avec des conditions flexibles et un
remboursement différé pendant la durée de vos études.
`,
        `
Notre plateforme vous permet de simuler votre prêt étudiant
en quelques secondes afin de connaître le montant de vos mensualités
et choisir la durée de remboursement qui correspond à votre situation.
`,
      ],
    },

    explanation: {
      title: "Comprendre le prêt étudiant",

      paragraphs: [
        `
Le prêt étudiant est un crédit spécialement conçu pour aider les
étudiants à financer leurs études et les dépenses associées
à leur parcours académique.
`,
        `
Contrairement à un prêt classique, le remboursement peut être
différé pendant la durée des études afin de permettre à l’étudiant
de se concentrer sur sa formation.
`,
        `
Une fois les études terminées, le remboursement du prêt commence
selon les modalités définies lors de la souscription.
`,
        `
Chez NovaFinance, nous proposons des solutions de financement
simples, transparentes et adaptées à la réalité des étudiants.
`,
      ],
    },

    usages: [
      {
        title: "Financer les études",
        desc: "Payez vos frais de scolarité et votre formation.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      },

      {
        title: "Logement étudiant",
        desc: "Financez votre logement pendant vos études.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      },

      {
        title: "Matériel informatique",
        desc: "Achetez l'équipement nécessaire à vos études.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
    ],

    cta: {
      title: "Simulez votre prêt étudiant",
      button: "Faire une simulation",
    },

    simulation: {
      defaultAmount: 8000,
      defaultDuration: 60,
    },
  },

  auto: {
    meta: {
      title: "Prêt auto",
      slug: "pret-auto",
      category: "auto",
    },

    hero: {
      title: "Prêt auto",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      tagline: "Financez votre voiture neuve ou d'occasion",
    },

    conditions: {
      min: "2 000 €",
      max: "75 000 €",
      duration: "12 à 84 mois",
      taeg: "à partir de 3.2%",
      rateType: "Fixe",
    },

    advantages: [
      "Financement rapide de votre véhicule",
      "Taux fixe pendant toute la durée du prêt",
      "Possibilité de remboursement anticipé",
    ],

    description: {
      intro: `
Le prêt auto est une solution de financement conçue pour vous permettre
d’acheter un véhicule neuf ou d’occasion tout en maîtrisant votre budget.
`,

      paragraphs: [
        `
Que vous souhaitiez acheter une voiture neuve, un véhicule d'occasion
ou même un véhicule électrique, le prêt auto vous permet de financer
votre projet simplement et rapidement.
`,
        `
Avec NovaFinance, vous pouvez simuler votre financement en ligne
et obtenir une estimation immédiate de vos mensualités.
`,
        `
Notre équipe analyse votre demande afin de vous proposer une solution
de financement adaptée à votre situation et à votre projet automobile.
`,
      ],
    },

    explanation: {
      title: "Comprendre le prêt auto",

      paragraphs: [
        `
Le prêt auto est un crédit dédié qui permet de financer l’achat
d’un véhicule neuf ou d’occasion.
`,
        `
Il vous permet de répartir le coût de votre voiture sur plusieurs
mois ou années afin de préserver votre capacité d’épargne.
`,
        `
Le montant des mensualités dépend du capital emprunté,
de la durée du prêt et du taux d’intérêt appliqué.
`,
        `
Chez NovaFinance, vous pouvez simuler votre prêt auto en ligne
et obtenir rapidement une réponse de principe.
`,
      ],
    },

    usages: [
      {
        title: "Voiture neuve",
        desc: "Financez l'achat d'un véhicule neuf avec des mensualités adaptées.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      },

      {
        title: "Voiture d'occasion",
        desc: "Achetez un véhicule d'occasion tout en maîtrisant votre budget.",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763",
      },

      {
        title: "Véhicule électrique",
        desc: "Passez à la mobilité électrique avec un financement flexible.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75",
      },
    ],

    cta: {
      title: "Simulez votre prêt auto",
      button: "Faire une simulation",
    },

    simulation: {
      defaultAmount: 15000,
      defaultDuration: 60,
    },
  },
  professionnel: {
    meta: {
      title: "Prêt professionnel",
      slug: "pret-professionnel",
      category: "professionnel",
    },

    hero: {
      title: "Prêt professionnel",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      tagline: "Financez le développement de votre activité",
    },

    conditions: {
      min: "5 000 €",
      max: "500 000 €",
      duration: "12 à 120 mois",
      taeg: "à partir de 3.5%",
      rateType: "Fixe ou variable",
    },

    advantages: [
      "Financement adapté aux entreprises",
      "Accompagnement par des experts",
      "Remboursement flexible",
    ],

    description: {
      intro: `
Le prêt professionnel est une solution de financement destinée aux
entrepreneurs, indépendants et entreprises souhaitant développer
leur activité.
`,

      paragraphs: [
        `
Que vous souhaitiez lancer une nouvelle activité, investir dans du
matériel ou développer votre entreprise, le prêt professionnel vous
permet de financer vos projets.
`,
        `
Chez NovaFinance, nous accompagnons les entrepreneurs en leur
proposant des solutions de financement adaptées à leur secteur
et à leur situation.
`,
        `
Grâce à notre plateforme digitale, vous pouvez simuler votre prêt
professionnel en ligne et obtenir rapidement une estimation de
vos mensualités.
`,
      ],
    },

    explanation: {
      title: "Comprendre le prêt professionnel",

      paragraphs: [
        `
Le prêt professionnel permet aux entreprises et aux indépendants
de financer leurs investissements et leur développement.
`,
        `
Il peut servir à financer l'achat de matériel, l'aménagement
d'un local, le recrutement de personnel ou encore le lancement
d'un nouveau projet.
`,
        `
La durée et le montant du prêt dépendent du projet, de la capacité
de remboursement de l'entreprise et des garanties éventuelles.
`,
        `
Chez NovaFinance, nous proposons des solutions de financement
claires et adaptées aux besoins des professionnels.
`,
      ],
    },

    usages: [
      {
        title: "Créer une entreprise",
        desc: "Financez le lancement de votre activité.",
        image: "https://images.unsplash.com/photo-1556742400-b5b7c5125c7f",
      },

      {
        title: "Acheter du matériel",
        desc: "Investissez dans l’équipement nécessaire à votre activité.",
        image: "https://images.unsplash.com/photo-1581091012184-5c1c5d2c2e3c",
      },

      {
        title: "Développer votre entreprise",
        desc: "Soutenez la croissance de votre entreprise.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      },
    ],

    cta: {
      title: "Simulez votre prêt professionnel",
      button: "Faire une simulation",
    },

    simulation: {
      defaultAmount: 50000,
      defaultDuration: 72,
    },
  },
  conso: {
    meta: {
      title: "Prêt à la consommation",
      slug: "pret-consommation",
      category: "consommation",
    },

    hero: {
      title: "Prêt à la consommation",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      tagline: "Financez vos projets du quotidien",
    },

    conditions: {
      min: "500 €",
      max: "75 000 €",
      duration: "6 à 84 mois",
      taeg: "à partir de 2.5%",
      rateType: "Fixe",
    },

    advantages: [
      "Financement rapide",
      "Mensualités adaptées à votre budget",
      "Procédure simple et 100 % en ligne",
    ],

    description: {
      intro: `
Le prêt à la consommation est une solution de financement qui
vous permet de réaliser vos projets personnels sans attendre
d'avoir l'intégralité de l'épargne nécessaire.
`,

      paragraphs: [
        `
Ce type de crédit peut être utilisé pour financer différents
besoins : achat d'équipements, organisation d'événements,
dépenses imprévues ou amélioration du quotidien.
`,
        `
Avec NovaFinance, vous pouvez simuler votre prêt à la consommation
en ligne afin d'obtenir rapidement une estimation de vos mensualités.
`,
        `
Notre objectif est de vous proposer une solution de financement
simple, transparente et adaptée à votre capacité de remboursement.
`,
      ],
    },

    explanation: {
      title: "Comprendre le prêt à la consommation",

      paragraphs: [
        `
Le prêt à la consommation est un crédit accordé aux particuliers
pour financer des biens ou des services destinés à un usage personnel.
`,
        `
Il se distingue du prêt immobilier car il concerne généralement
des montants plus faibles et des durées de remboursement plus courtes.
`,
        `
Le remboursement se fait sous forme de mensualités fixes comprenant
une partie du capital emprunté et les intérêts.
`,
        `
Grâce aux outils de simulation en ligne, il est possible de connaître
rapidement le montant des mensualités et la durée de remboursement
adaptée à son budget.
`,
      ],
    },

    usages: [
      {
        title: "Acheter des équipements",
        desc: "Financez l'achat d'électroménager ou d'équipements pour votre maison.",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      },

      {
        title: "Organiser un événement",
        desc: "Financez un mariage, une fête ou un projet personnel important.",
        image: "https://images.unsplash.com/photo-1529636798458-92182e662485",
      },

      {
        title: "Faire face à une dépense imprévue",
        desc: "Disposez rapidement de fonds pour gérer une situation urgente.",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
      },
    ],

    cta: {
      title: "Simulez votre prêt à la consommation",
      button: "Faire une simulation",
    },

    simulation: {
      defaultAmount: 5000,
      defaultDuration: 36,
    },
  },
  rachat: {
    meta: {
      title: "Rachat de crédit",
      slug: "rachat-credit",
      category: "rachat",
    },

    hero: {
      title: "Rachat de crédit",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      tagline: "Regroupez vos crédits et allégez vos mensualités",
    },

    conditions: {
      min: "5 000 €",
      max: "250 000 €",
      duration: "24 à 144 mois",
      taeg: "à partir de 3.9%",
      rateType: "Fixe",
    },

    advantages: [
      "Une seule mensualité",
      "Réduction possible des mensualités",
      "Meilleure gestion de votre budget",
    ],

    description: {
      intro: `
Le rachat de crédit permet de regrouper plusieurs crédits en un seul
afin de simplifier leur gestion et réduire le montant des mensualités.
`,

      paragraphs: [
        `
Si vous avez plusieurs crédits en cours (crédit auto, prêt personnel,
crédit à la consommation), le rachat de crédit vous permet de les
regrouper en un seul prêt.
`,
        `
Cette opération permet souvent de réduire le montant des mensualités
en allongeant la durée de remboursement.
`,
        `
Chez NovaFinance, notre équipe analyse votre situation financière
afin de vous proposer une solution de regroupement adaptée à votre budget.
`,
      ],
    },

    explanation: {
      title: "Comprendre le rachat de crédit",

      paragraphs: [
        `
Le rachat de crédit consiste à regrouper plusieurs prêts en cours
en un seul crédit avec une mensualité unique.
`,
        `
Cette solution permet de simplifier la gestion de vos finances
et d'adapter le montant des mensualités à votre capacité
de remboursement.
`,
        `
Le regroupement peut concerner différents types de crédits :
prêt personnel, crédit auto ou crédit à la consommation.
`,
        `
L'objectif est d'améliorer l'équilibre de votre budget
tout en conservant une solution de financement adaptée.
`,
      ],
    },

    usages: [
      {
        title: "Regrouper plusieurs crédits",
        desc: "Fusionnez tous vos crédits en une seule mensualité.",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
      },

      {
        title: "Réduire les mensualités",
        desc: "Adaptez vos remboursements à votre budget.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      },

      {
        title: "Simplifier la gestion",
        desc: "Un seul crédit, une seule mensualité à gérer.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      },
    ],

    cta: {
      title: "Simulez votre rachat de crédit",
      button: "Faire une simulation",
    },

    simulation: {
      defaultAmount: 30000,
      defaultDuration: 84,
    },
  },
};
