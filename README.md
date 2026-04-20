# Mr. Saladin — Portfolio

Portfolio de **Joran Saladin**, UI/Web Designer senior. Site one-page avec animations avancées, canvas 3D et deux prototypes HTML intégrés.

Live : [mrsaladin.com](https://mrsaladin.com)

---

## Stack technique

| Catégorie | Technologie | Version |
|-----------|-------------|---------|
| Framework | [Next.js](https://nextjs.org) (App Router) | 14.2 |
| Langage | TypeScript | 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 | 4.1 |
| Animations | [GSAP](https://gsap.com) | 3.12 |
| Animations UI | [Framer Motion](https://www.framer.com/motion/) | 11 |
| Scroll fluide | [Lenis](https://lenis.darkroom.engineering) | 1.1 |
| 3D / Canvas | [Three.js](https://threejs.org) + [React Three Fiber](https://r3f.docs.pmnd.rs) + [Drei](https://drei.docs.pmnd.rs) | r172 |
| Icônes | [Lucide React](https://lucide.dev) | 0.468 |
| Fonts | Oswald + JetBrains Mono via `next/font/google` | — |

---

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:3000
```

### Build production

```bash
npm run build
npm start
```

---

## Architecture

```
mr-saladin/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata SEO/OG
│   ├── page.tsx            # Page d'accueil (assemblage des sections)
│   ├── globals.css         # Design tokens CSS, reset, typography
│   └── icon.svg            # Favicon
├── components/
│   ├── Navbar.tsx          # Navigation responsive (sidebar ↔ burger)
│   ├── HeroSection.tsx     # Section hero avec GSAP
│   ├── ExperienceSection.tsx  # KPI animés (GSAP ScrollTrigger)
│   ├── IASection.tsx       # Section IA (bento cards)
│   ├── CompetencesSection.tsx # Compétences avec hover expand
│   ├── PortfolioSection.tsx   # Grille projets + 2 prototypes
│   ├── TestimonialsSection.tsx # Témoignages clients
│   ├── ContactSection.tsx  # Contact avec canvas Three.js
│   ├── LenisProvider.tsx   # Provider smooth scroll global
│   └── ui/                 # Composants UI réutilisables (voir ci-dessous)
├── public/
│   ├── images/             # Screenshots projets (next/image optimisées)
│   ├── charpentier-couvreur/  # Prototype HTML — artisan charpentier
│   ├── jardin-des-saveurs/    # Prototype HTML — restaurant gastronomique
│   ├── robots.txt          # Directives crawlers
│   └── logo.svg            # Logo principal
├── lib/
│   └── utils.ts            # Utilitaire cn() (clsx + tailwind-merge)
├── docs/
│   └── prototypes/         # Notes de travail des composants (référence)
├── next.config.mjs         # Config Next.js (images AVIF/WebP, Three.js)
└── tsconfig.json
```

---

## Sections

| Section | Composant | Description |
|---------|-----------|-------------|
| **Hero** | `HeroSection.tsx` | Fond animé particules, titre GSAP, CTA |
| **Experience** | `ExperienceSection.tsx` | Compteurs animés (GSAP ScrollTrigger) |
| **IA** | `IASection.tsx` | Bento grid avec cartes Framer Motion |
| **Compétences** | `CompetencesSection.tsx` | Liste catégories avec hover expand |
| **Portfolio** | `PortfolioSection.tsx` | 6 projets en cartes 3D interactives |
| **Témoignages** | `TestimonialsSection.tsx` | Carrousel de témoignages clients |
| **Contact** | `ContactSection.tsx` | Canvas Three.js + formulaire CTA |

---

## Composants UI (`components/ui/`)

| Fichier | Composant | Description |
|---------|-----------|-------------|
| `3d-card.tsx` | `InteractiveTravelCard` | Carte portfolio avec tilt 3D (Framer Motion, mouse tracking) |
| `falling-pattern.tsx` | `FallingPattern` | Fond animé hero : grille de caractères tombants (canvas) |
| `experience-hero.tsx` | `ExperienceHeroCanvas` | Canvas Three.js — particules interactives (section Contact) |
| `menu-vertical.tsx` | `MenuVertical` | Nav sidebar animée Framer Motion |
| `logo-cloud-2.tsx` | `LogoCloud` | Grille défilante de logos clients (svgl.app) |
| `ruixen-bento-cards.tsx` | `RuixenBentoCards` | Layout bento grid pour section IA |
| `category-list.tsx` | `CategoryList` | Liste de compétences avec expansion au hover |
| `clean-testimonial.tsx` | `CleanTestimonial` | Carte témoignage avec avatar et note |

---

## Prototypes HTML

Deux prototypes de sites client sont intégrés dans `public/` et accessibles comme pages statiques :

| Prototype | URL locale | Description |
|-----------|------------|-------------|
| **Moreau Charpente & Couverture** | `/charpentier-couvreur/` | Artisan charpentier-couvreur Loire-Atlantique. Design "blueprint" technique, thème navy/bois. Tailwind CSS CDN. |
| **Le Jardin des Saveurs** | `/jardin-des-saveurs/` | Restaurant gastronomique. Design luxe noir/or/sauge, cursor custom, animations GSAP ScrollTrigger. |

Ces prototypes sont liés directement depuis les cartes de la section Portfolio.

---

## Navigation

Comportement responsive de la navbar :

- **Desktop + scroll = 0** → sidebar fixe à droite (`w-64`)
- **Desktop + scroll > 100px** → burger icon en haut à droite
- **Mobile / tablette** → toujours burger → overlay plein écran

---

## Performance

- `next/image` sur toutes les images portfolio avec `sizes` responsifs
- **Three.js** chargé en lazy avec `dynamic(..., { ssr: false })` — pas d'impact sur le SSR
- Formats images : **AVIF / WebP** activés dans `next.config.mjs` (servis automatiquement par `next/image` selon le support navigateur)
- Fonts via `next/font/google` avec `display: swap` — aucun FOIT
- `reactStrictMode: true`, `poweredByHeader: false`

---

## Déploiement Vercel

Connecter le repo GitHub `mr-saladin` à Vercel (déploiement automatique sur push `main`).

Variables d'environnement requises : aucune (site statique/SSG).

```bash
# Push vers GitHub → déploiement automatique sur Vercel
git push origin main
```

> **Note :** Remplacer `/public/og-image.png` (1200×630 px) avant le premier déploiement pour activer les previews Open Graph sur les réseaux sociaux.
