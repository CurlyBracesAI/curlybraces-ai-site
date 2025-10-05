# Design Guidelines for curlybraces.ai Redesign

## Design Approach
**Reference-Based Refinement**: Maintain existing brand identity (dark neural network theme, cyan accents) while drawing layout inspiration from modern tech companies like Linear, Vercel, and Stripe for improved spacing, hierarchy, and component design.

## Core Design Principles
- **Technical Sophistication**: Preserve the AI/tech aesthetic with neural network backgrounds
- **Clarity First**: Improve readability through better spacing and typography hierarchy
- **Responsive Excellence**: Mobile-first approach with seamless breakpoint transitions
- **Subtle Motion**: Minimal animations - only for micro-interactions and scroll reveals

## Color Palette

**Dark Mode (Primary)**
- Background Base: 220 15% 8% (deep navy-black)
- Background Secondary: 220 15% 12% (elevated surfaces)
- Background Tertiary: 220 15% 16% (cards, sections)
- Primary Cyan: 190 85% 55% (brand color - CTAs, links, accents)
- Primary Cyan Muted: 190 60% 45% (hover states)
- Text Primary: 0 0% 98% (headings, important text)
- Text Secondary: 220 10% 70% (body text, descriptions)
- Text Tertiary: 220 8% 50% (meta text, labels)
- Border Subtle: 220 15% 20% (dividers, card borders)
- Neural Network Overlay: 190 85% 55% at 5% opacity (background pattern)

## Typography

**Font Families**
- Primary: Inter (Google Fonts) - headings, UI elements
- Body: Inter - all body text
- Mono: JetBrains Mono - code snippets, technical labels

**Type Scale**
- Hero Heading: text-6xl md:text-7xl font-bold (60px/72px desktop)
- Section Heading: text-4xl md:text-5xl font-bold (36px/48px desktop)
- Subsection: text-2xl md:text-3xl font-semibold (24px/30px desktop)
- Body Large: text-lg md:text-xl (18px/20px desktop)
- Body: text-base (16px)
- Small: text-sm (14px)
- Meta: text-xs (12px)

**Line Heights**: Generous - 1.6 for body, 1.2 for headings

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section vertical padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Small element spacing: gap-4, p-4

**Container Widths**
- Full sections: max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto px-6
- Text content: max-w-4xl

**Grid Systems**
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Agentic Workflows: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 (6 agents in 2 rows)
- Case Studies: grid-cols-1 md:grid-cols-2

## Component Library

**Navigation**
- Fixed header with backdrop blur (bg-[hsl(220,15%,8%)]/90 backdrop-blur-md)
- Logo left, nav center/right, CTA button cyan
- Mobile: hamburger menu with slide-in panel
- Border bottom: border-b border-[hsl(220,15%,20%)]

**Hero Section**
- Background: Neural network pattern (SVG or CSS gradient mesh) with cyan nodes
- Layout: Centered content, max-w-4xl
- Headline + subheadline + dual CTAs (primary cyan, secondary outline)
- Height: min-h-[85vh] - not forced 100vh

**Section Cards**
- Background: bg-[hsl(220,15%,12%)] with border border-[hsl(220,15%,20%)]
- Rounded: rounded-xl
- Hover: subtle lift (transform translate-y-[-2px]) and border glow
- Icon area: cyan accent circle or square with icon
- Title + description with generous spacing

**Agentic Workflows Section (New)**
- 6 agent cards in 3-column grid (2 rows)
- Each card: Agent icon, name, description, status indicator
- Status badge: "Active" with green dot, subtle bg-[hsl(142,70%,45%)]/10
- Card design consistent with features but distinct identity

**Buttons**
- Primary: bg-[hsl(190,85%,55%)] text-[hsl(220,15%,8%)] font-semibold px-6 py-3 rounded-lg
- Secondary: border-2 border-[hsl(190,85%,55%)] text-[hsl(190,85%,55%)] with backdrop-blur when over images
- Hover: slight scale and brightness increase

**Case Studies**
- Cards with image placeholder or gradient top
- Project title, description, tech tags
- "View Details" link with arrow icon

**Footer**
- Two-column: Company info + Quick links
- Social icons in cyan
- Newsletter signup with inline form
- Copyright and trust indicators
- Background: bg-[hsl(220,15%,10%)] with border-t

## Images

**Hero Section**: Neural network visualization or abstract AI imagery (full-width background with overlay)
**Case Study Cards**: Project screenshots or abstract tech visualizations
**Agent Icons**: Custom iconography or illustrations for each Rosie agent
**Feature Icons**: Streamline or Heroicons in cyan color

## Accessibility & Responsive

- Minimum touch target: 44x44px
- Focus states: cyan outline ring
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
- Mobile nav: full-screen overlay with large touch targets
- Contrast ratios: WCAG AA compliant (text on dark backgrounds)

## Animation Budget

- Page load: Subtle fade-in for hero content only
- Scroll reveals: Intersection observer fade-in for section entry (once per section)
- Hover states: Transform and color transitions (200ms ease)
- NO parallax, NO complex scroll animations, NO loading spinners unless data-driven