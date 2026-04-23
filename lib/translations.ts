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
    designSystem: {
      back: "Retour",
      heroSubtitle: "Langage visuel, tokens, composants et animations du portfolio de Joran Saladin.",
      darkTab: "Mode sombre",
      lightTab: "Mode clair",
      sections: ["Colors", "Typographie", "Espacements", "Composants", "Motion", "Glass", "Bordures", "Logo"],
      colors:     { label: "Tokens",       title: "Couleurs",     outline: "Palette" },
      typography: { label: "Polices",      title: "Typo",         outline: "Échelle", role1: "Titres & affichage", role2: "Corps & labels" },
      spacing:    { label: "Mise en page", title: "Espacements",  outline: "Échelle" },
      components: {
        label: "UI Kit", title: "Composants",
        buttons: "Boutons",
        buttonsNote: "Tous les boutons utilisent rounded-full — cohérence avec les contrôles circulaires de la nav.",
        radii: ["Boutons, contrôles nav", "Tags, badges", "Cards, inputs, panels"],
        badges: "Badges",
        cards: "Cards",
        cardGlassDesc: "Surface glassmorphism — backdrop-blur, fond semi-transparent.",
        cardFeatureDesc: "Brackets accent au hover — motif décoratif du UI.",
        inputs: "Formulaire",
      },
      motion:  { label: "Animation",  title: "Motion",    outline: "Tokens" },
      glass:   { label: "Surface",    title: "Glass",     outline: "Panel",
        previewTitle: "Glass Panel",
        previewDesc: "Surface réutilisable pour cards, overlays et panneaux.",
      },
      borders: { label: "Profondeur", title: "Bordures" },
      logo: {
        label: "Marque", title: "Logo", outline: "Utilisation",
        usagesTitle: "Usages réels sur le site",
        heroLabel: "HeroSection",
        heroContext: "width=44 height=22 · brightness-0 invert opacity-70 (dark)\nbrighness-0 opacity-70 (light)",
        heroContextDark: "width=44 height=22 · brightness-0 invert opacity-70",
        heroContextLight: "width=44 height=22 · brightness-0 opacity-70",
        navLabel: "Navbar overlay",
        navContext: "width=56 height=28 · brightness-0 invert opacity-60\nToujours sur fond sombre (#020202/97%)",
        rulesTitle: "Règles d'utilisation",
        rules: [
          { rule: "Monochrome uniquement", body: "Le logo est toujours rendu via filtre CSS. Sur fond sombre : brightness-0 invert (blanc). Sur fond clair : brightness-0 (noir). Jamais en couleur." },
          { rule: "Opacité réduite", body: "Le logo n'est jamais affiché à 100% d'opacité. Utiliser opacity-60 à opacity-70 selon le contexte pour une présence subtile." },
          { rule: "Fonds autorisés", body: "Fond sombre #020202 (hero, overlay). Sur fond clair #f5f3ef, utiliser brightness-0 sans invert. Jamais sur fond coloré." },
          { rule: "Taille minimale", body: "Ne pas descendre sous 22px de hauteur (taille hero). La plus grande utilisation est 28px (nav overlay). Ratio fixe 2:1." },
          { rule: "Proportions", body: "Ne jamais étirer ou déformer. Toujours conserver le viewBox d'origine (0 0 378 180). Passer par width/height proportionnels." },
          { rule: "Effets interdits", body: "Aucune rotation, ombre portée, dégradé ou colorisation. Le logo reste plat, monochrome, et sans effet de mise en valeur." },
        ],
        specsTitle: "Spécifications",
        specs: [
          { label: "Format",       value: "SVG — vectoriel" },
          { label: "ViewBox",      value: "0 0 378 180" },
          { label: "Ratio",        value: "2.1 : 1 (≈ 2:1)" },
          { label: "Chemin",       value: "/public/logo.svg" },
          { label: "Usage Hero",   value: "44×22px · opacity-70" },
          { label: "Usage Nav",    value: "56×28px · opacity-60" },
          { label: "Taille min.",  value: "22px de hauteur" },
        ],
      },
      footer: "Retour au portfolio",
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
    designSystem: {
      back: "Back",
      heroSubtitle: "Visual language, tokens, components, and motion patterns powering the Joran Saladin portfolio.",
      darkTab: "Dark mode",
      lightTab: "Light mode",
      sections: ["Colors", "Typography", "Spacing", "Components", "Motion", "Glass", "Borders", "Logo"],
      colors:     { label: "Tokens",    title: "Colors",    outline: "Palette" },
      typography: { label: "Typefaces", title: "Type",      outline: "Scale", role1: "Display & Headings", role2: "Body & Labels" },
      spacing:    { label: "Layout",    title: "Spacing",   outline: "Scale" },
      components: {
        label: "UI Kit", title: "Components",
        buttons: "Buttons",
        buttonsNote: "All buttons use rounded-full — consistent with the circular nav controls.",
        radii: ["Buttons, nav controls", "Tags, badges", "Cards, inputs, panels"],
        badges: "Badges",
        cards: "Cards",
        cardGlassDesc: "Glassmorphism surface — backdrop-blur, semi-transparent background.",
        cardFeatureDesc: "Accent brackets on hover — decorative UI pattern.",
        inputs: "Form Input",
      },
      motion:  { label: "Animation", title: "Motion",   outline: "Tokens" },
      glass:   { label: "Surface",   title: "Glass",    outline: "Panel",
        previewTitle: "Glass Panel",
        previewDesc: "Reusable surface for cards, overlays and panels.",
      },
      borders: { label: "Depth",    title: "Borders" },
      logo: {
        label: "Brand", title: "Logo", outline: "Usage",
        usagesTitle: "Real usage on the site",
        heroLabel: "HeroSection",
        heroContextDark: "width=44 height=22 · brightness-0 invert opacity-70",
        heroContextLight: "width=44 height=22 · brightness-0 opacity-70",
        navLabel: "Navbar overlay",
        navContext: "width=56 height=28 · brightness-0 invert opacity-60\nAlways on dark background (#020202/97%)",
        rulesTitle: "Usage rules",
        rules: [
          { rule: "Monochrome only", body: "The logo is always rendered via CSS filter. On dark backgrounds: brightness-0 invert (white). On light backgrounds: brightness-0 (black). Never in color." },
          { rule: "Reduced opacity", body: "The logo is never displayed at 100% opacity. Use opacity-60 to opacity-70 depending on context for a subtle presence." },
          { rule: "Approved backgrounds", body: "Dark background #020202 (hero, overlay). On light background #f5f3ef, use brightness-0 without invert. Never on colored backgrounds." },
          { rule: "Minimum size", body: "Do not go below 22px height (hero size). The largest usage is 28px (nav overlay). Fixed 2:1 ratio." },
          { rule: "Proportions", body: "Never stretch or distort. Always preserve the original viewBox (0 0 378 180). Use proportional width/height values." },
          { rule: "No effects allowed", body: "No rotation, drop shadow, gradient, or colorization. The logo stays flat, monochrome, and unaltered." },
        ],
        specsTitle: "Specifications",
        specs: [
          { label: "Format",    value: "SVG — vector" },
          { label: "ViewBox",   value: "0 0 378 180" },
          { label: "Ratio",     value: "2.1 : 1 (≈ 2:1)" },
          { label: "Path",      value: "/public/logo.svg" },
          { label: "Hero use",  value: "44×22px · opacity-70" },
          { label: "Nav use",   value: "56×28px · opacity-60" },
          { label: "Min. size", value: "22px height" },
        ],
      },
      footer: "Back to portfolio",
    },
  },
} as const;

export type Translations = (typeof translations)[Language];
