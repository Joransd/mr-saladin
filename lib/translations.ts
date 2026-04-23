export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      experience: "Expérience",
      ia: "Avec l'IA",
      competences: "Compétences",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      eyebrow: "UI/Web Designer — Joran Saladin",
      heading1: "Concevoir & développer",
      heading2: "des interfaces web",
      accent1: "rapides,",
      accent2: "claires",
      subtitle:
        "J'aide les entreprises à transformer leurs idées en interfaces claires, rapides et efficaces — du design jusqu'à l'intégration frontend.",
      cta1: "Voir mes projets",
      cta2: "Me contacter",
      scroll: "Scroll",
    },
    experience: {
      label: "En chiffres",
      heading1: "Mon",
      heading2: "expérience",
      description:
        "Une approche pragmatique du design : aller à l'essentiel, livrer vite, et produire des interfaces utiles.",
      toolsLabel: "Outils & environnements maîtrisés",
      kpi: [
        {
          label: "Sites conçus & réalisés",
          description: "De la landing page au design system complet",
        },
        {
          label: "D'expérience en design web",
          description: "Depuis les débuts du web responsive jusqu'à l'IA",
        },
        {
          label: "En quelques jours",
          description: "Du brief initial à la mise en ligne opérationnelle",
        },
      ],
    },
    ia: {
      label: "Différenciation",
      heading1: "J'intègre l'IA",
      heading2: "pour concevoir",
      heading3: "plus vite et mieux",
      description:
        "J'utilise des outils comme Claude et Antigravity pour accélérer les phases de conception, de prototypage et de développement frontend. Résultat : des cycles de production plus courts, plus d'itérations, et des interfaces plus abouties.",
      punchline:
        "“L'IA ne remplace pas le design — elle amplifie ma capacité à produire des solutions efficaces.”",
      punchlineLabel: "Approche IA-first",
      cards: [
        {
          title: "Prototypage rapide d'interfaces",
          description:
            "Je génère des maquettes fonctionnelles en quelques heures au lieu de jours, et itère à une vitesse impossible sans IA.",
        },
        {
          title: "Génération de code frontend",
          description:
            "Composants React, animations GSAP, intégrations complexes — structurés et produits avec l'IA comme copilote.",
        },
        {
          title: "Réduction du time-to-market",
          description:
            "Du brief à la mise en ligne en quelques jours plutôt que semaines.",
        },
        {
          title: "Itérations continues",
          description:
            "Plus de cycles de feedback, plus de variantes testées, interfaces plus abouties.",
        },
        {
          title: "Exploration de concepts UI plus rapidement",
          description:
            "L'IA me permet d'explorer 10x plus de directions créatives avant de converger vers la meilleure solution pour votre produit. Moins de temps à tâtonner, plus de temps à concevoir.",
        },
      ],
    },
    competences: {
      label: "Expertise",
      heading1: "Mes",
      heading2: "compétences",
      description:
        "Capable de concevoir, prototyper et intégrer — sans dépendre d'une chaîne de production complexe.",
      categories: [
        {
          title: "UI Design",
          subtitle:
            "Figma · Framer · Adobe XD · Webflow · Design orienté conversion · Hiérarchie visuelle · Mobile & Web",
        },
        {
          title: "UX Design",
          subtitle:
            "Wireframing · Prototypage interactif · User journey mapping · Tests utilisateur · Heuristiques Nielsen",
        },
        {
          title: "Frontend",
          subtitle:
            "Next.js · React · TypeScript · TailwindCSS · GSAP · Framer Motion · HTML/CSS/JS · Optimisation performance",
        },
        {
          title: "Design Systems",
          subtitle:
            "Création de composants · Tokens de design · Documentation · Architecture scalable · Storybook",
        },
        {
          title: "Outils & environnement",
          subtitle:
            "Figma · Claude Code · Antigravity · Stitch · GitHub · WordPress · Vercel · Cursor",
        },
      ],
    },
    portfolio: {
      label: "Projets sélectionnés",
      heading1: "Mes travaux",
      heading2: "récents",
      description:
        "Une sélection de projets récents, du design à l'intégration, avec une attention particulière portée à la clarté et à l'efficacité.",
      cta: "Vous avez un projet en tête ?",
      ctaButton: "Parlons-en",
      projects: [
        { actionText: "Voir le projet", context: "Restaurant — Design & Prototype IA" },
        { actionText: "Voir le projet", context: "Artisan — Design & Prototype IA" },
        { actionText: "Voir le site", context: "Art-thérapeute — Design & WordPress" },
        { actionText: "Voir le projet", context: "Web3 — UI Design application" },
        { actionText: "Voir le site", context: "SaaS — Landing page" },
        { actionText: "Voir le projet", context: "Startup — Landing page" },
      ],
    },
    testimonials: {
      label: "Ce qu'ils disent",
      heading1: "Ils m'ont fait",
      heading2: "confiance",
      clickDesktop: "Cliquer pour naviguer",
      clickMobile: "Toucher pour naviguer",
      next: "Next",
      items: [
        {
          quote:
            "Joran en partant de « 0 » a su choisir le bon design pour concevoir une interface utilisateur destinée au repricing sur Marketplace et à l'envoi automatisé de commandes logicielles dématérialisées. Il a su être à l'écoute des besoins et a fait preuve d'initiatives pertinentes en matière de graphisme comme le bouton de synchronisation ou les règles de repricing. Il a bien compris les besoins utilisateurs de l'interface et s'est investi à 100%. Je le recommande vivement.",
          author: "Nicolas Bourdeau",
          role: "CEO",
          company: "Wintive",
        },
        {
          quote:
            "Fort d'une expérience de 10 ans, d'une grande capacité d'écoute et d'une aptitude à travailler avec tous les corps de métiers, Joran est la personne qu'il vous faut pour travailler sur vos projets digitaux. Il excelle en refonte et création d'interfaces. Il est capable d'encadrer une équipe, de mener un projet en respectant les contraintes (coûts, délais etc.). C'est une personne de grande qualité et de totale confiance.",
          author: "Loik Rimbault",
          role: "Manager Salesforce",
          company: "Edifixio",
        },
        {
          quote:
            "Joran s'est montré très réactif et disponible pour arranger ses propositions graphiques et d'intégration web en fonction de nos retours. Travail esthétique et soigné.",
          author: "Matthieu Tylez",
          role: "Responsable communication",
          company: "BTU Protocol",
        },
        {
          quote: "Excellent webdesigner c'était un plaisir de travailler avec lui, je recommande.",
          author: "Adrien Lafourcade",
          role: "PDG",
          company: "La Suite du Monde",
        },
        {
          quote: "Joran a réussi à capturer mon univers et à le retranscrire de façon fidèle. Merci encore à lui.",
          author: "Aline Jaulin",
          role: "Art-thérapeute",
          company: "alinejaulin.fr",
        },
      ],
    },
    contact: {
      status: "Disponible pour missions freelance & équipes produit",
      heading1: "Parlons de",
      heading2: "votre projet",
      description:
        "Que vous ayez besoin d'un MVP, d'une refonte complète ou d'un design system — discutons de ce que je peux apporter à votre équipe.",
      cta: "Envoyer un message",
      infoGrid: [
        { label: "Disponibilité", value: "Immédiate" },
        { label: "Type de mission", value: "Freelance / CDI" },
        { label: "Localisation", value: "Remote / France" },
      ],
      footer: "© 2025 Joran Saladin — UI/Web Designer Senior",
    },
  },

  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      ia: "With AI",
      competences: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      eyebrow: "UI/Web Designer — Joran Saladin",
      heading1: "Designing & building",
      heading2: "web interfaces",
      accent1: "fast &",
      accent2: "clear",
      subtitle:
        "I help businesses turn their ideas into clear, fast, and effective interfaces — from design all the way to frontend integration.",
      cta1: "View my work",
      cta2: "Get in touch",
      scroll: "Scroll",
    },
    experience: {
      label: "By the numbers",
      heading1: "My",
      heading2: "experience",
      description:
        "A pragmatic approach to design: cut to the essential, ship fast, and build interfaces that actually work.",
      toolsLabel: "Tools & environments",
      kpi: [
        {
          label: "Sites designed & built",
          description: "From landing pages to full design systems",
        },
        {
          label: "Years in web design",
          description: "From the early days of responsive web to AI-first workflows",
        },
        {
          label: "In just a few days",
          description: "From initial brief to live and operational",
        },
      ],
    },
    ia: {
      label: "Differentiation",
      heading1: "I integrate AI",
      heading2: "to design",
      heading3: "faster and better",
      description:
        "I use tools like Claude and Antigravity to accelerate design, prototyping, and frontend development phases. The result: shorter production cycles, more iterations, and more polished interfaces.",
      punchline:
        "“AI doesn’t replace design — it amplifies my ability to produce effective solutions.”",
      punchlineLabel: "AI-first approach",
      cards: [
        {
          title: "Rapid interface prototyping",
          description:
            "I generate functional mockups in hours instead of days, and iterate at a speed that simply isn't possible without AI.",
        },
        {
          title: "Frontend code generation",
          description:
            "React components, GSAP animations, complex integrations — structured and produced with AI as a copilot.",
        },
        {
          title: "Reduced time-to-market",
          description:
            "From brief to launch in days rather than weeks.",
        },
        {
          title: "Continuous iterations",
          description:
            "More feedback cycles, more tested variants, more refined interfaces.",
        },
        {
          title: "Exploring UI concepts faster",
          description:
            "AI lets me explore 10x more creative directions before converging on the best solution for your product. Less time fumbling, more time designing.",
        },
      ],
    },
    competences: {
      label: "Expertise",
      heading1: "My",
      heading2: "skills",
      description:
        "Able to design, prototype, and integrate — without depending on a complex production chain.",
      categories: [
        {
          title: "UI Design",
          subtitle:
            "Figma · Framer · Adobe XD · Webflow · Conversion-driven design · Visual hierarchy · Mobile & Web",
        },
        {
          title: "UX Design",
          subtitle:
            "Wireframing · Interactive prototyping · User journey mapping · User testing · Nielsen heuristics",
        },
        {
          title: "Frontend",
          subtitle:
            "Next.js · React · TypeScript · TailwindCSS · GSAP · Framer Motion · HTML/CSS/JS · Performance optimization",
        },
        {
          title: "Design Systems",
          subtitle:
            "Component creation · Design tokens · Documentation · Scalable architecture · Storybook",
        },
        {
          title: "Tools & environment",
          subtitle:
            "Figma · Claude Code · Antigravity · Stitch · GitHub · WordPress · Vercel · Cursor",
        },
      ],
    },
    portfolio: {
      label: "Selected projects",
      heading1: "Recent",
      heading2: "work",
      description:
        "A selection of recent projects, from design to integration, with a particular focus on clarity and effectiveness.",
      cta: "Got a project in mind?",
      ctaButton: "Let's talk",
      projects: [
        { actionText: "View project", context: "Restaurant — Design & AI Prototype" },
        { actionText: "View project", context: "Craftsman — Design & AI Prototype" },
        { actionText: "View site", context: "Art therapist — Design & WordPress" },
        { actionText: "View project", context: "Web3 — UI Design application" },
        { actionText: "View site", context: "SaaS — Landing page" },
        { actionText: "View project", context: "Startup — Landing page" },
      ],
    },
    testimonials: {
      label: "What they say",
      heading1: "They trusted",
      heading2: "me",
      clickDesktop: "Click to navigate",
      clickMobile: "Tap to navigate",
      next: "Next",
      items: [
        {
          quote:
            "Starting from scratch, Joran demonstrated great expertise in choosing the right design for a Marketplace repricing interface and automated software order dispatch system. He listened carefully to our needs, showed great initiative on graphical aspects like the sync button and repricing rules, and truly understood what users needed. He gave 100%. Highly recommended.",
          author: "Nicolas Bourdeau",
          role: "CEO",
          company: "Wintive",
        },
        {
          quote:
            "With 10 years of experience, excellent listening skills, and the ability to collaborate across all teams, Joran is the person you need for your digital projects. He excels at redesigning and creating interfaces, can manage a team, and lead projects within budget and timeline constraints. A person of outstanding quality and total reliability.",
          author: "Loik Rimbault",
          role: "Salesforce Manager",
          company: "Edifixio",
        },
        {
          quote:
            "Joran was very responsive and always available to refine his graphic and web integration proposals based on our feedback. Aesthetic and meticulous work.",
          author: "Matthieu Tylez",
          role: "Communication Manager",
          company: "BTU Protocol",
        },
        {
          quote:
            "An excellent web designer — it was a real pleasure working with him. Highly recommend.",
          author: "Adrien Lafourcade",
          role: "CEO",
          company: "La Suite du Monde",
        },
        {
          quote:
            "Joran managed to capture my universe and translate it faithfully. Thank you so much.",
          author: "Aline Jaulin",
          role: "Art therapist",
          company: "alinejaulin.fr",
        },
      ],
    },
    contact: {
      status: "Available for freelance missions & product teams",
      heading1: "Let's talk about",
      heading2: "your project",
      description:
        "Whether you need an MVP, a full redesign, or a design system — let's discuss what I can bring to your team.",
      cta: "Send a message",
      infoGrid: [
        { label: "Availability", value: "Immediate" },
        { label: "Mission type", value: "Freelance / Full-time" },
        { label: "Location", value: "Remote / France" },
      ],
      footer: "© 2025 Joran Saladin — Senior UI/Web Designer",
    },
  },
} as const;

export type Translations = (typeof translations)[Language];
