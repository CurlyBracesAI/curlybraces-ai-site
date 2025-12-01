# CurlyBraces.ai - AI Automation Platform

## Overview

CurlyBraces.ai is a SaaS platform that provides ready-to-use AI agents ("Rosie") for automating business workflows like proposals, follow-ups, reports, and data enrichment. The platform targets professionals in real estate, sales, healthcare, and other industries requiring high-volume, detail-oriented automation. The application features a marketing website with dark mode design aesthetic, neural network visual theme, and integration capabilities with CRM platforms like Pipedrive, Wix, and HubSpot.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript
- Vite as build tool and development server
- Wouter for client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for styling with custom design system

**UI Component Strategy:**
- Built on shadcn/ui component library (Radix UI primitives)
- Custom design system with "New York" style variant
- Dark mode as primary theme with neural network aesthetic
- Cyan/blue gradient accent colors (primary: 190 85% 55%)
- Extensive use of gradient backgrounds and card-based layouts

**Design Philosophy:**
- Dark theme with navy-black background (220 15% 8%)
- Technical sophistication with AI/neural network visual elements
- Mobile-first responsive design
- Minimal animations focused on micro-interactions
- Typography: Inter font family for UI, JetBrains Mono for code/technical elements

**Page Structure:**
- Single-page marketing site with scroll-based navigation
- Component-based sections: Hero, Features, Agents, Case Studies, Pricing, Contact
- Image preview page for design assets
- 404 fallback page

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ES modules (type: "module")
- Middleware for JSON/URL-encoded request parsing
- Request logging with duration tracking for API routes

**Development vs Production:**
- Vite middleware integration in development mode
- SSR-style HTML templating for Vite integration
- Static file serving in production
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)

**API Design:**
- Routes prefixed with `/api`
- Storage abstraction layer (IStorage interface)
- Currently using in-memory storage (MemStorage) with user management placeholder
- Designed for future database integration

### Data Storage

**Database Strategy:**
- Drizzle ORM configured for PostgreSQL
- Neon serverless PostgreSQL expected (@neondatabase/serverless)
- Schema located in `shared/schema.ts`
- Currently minimal schema (users table with username/password)
- Migrations directory configured at `./migrations`

**Session Management:**
- Prepared for PostgreSQL-backed sessions (connect-pg-simple)
- Cookie-based authentication strategy

**Data Models:**
- User model with UUID primary keys
- Zod schema integration for validation (drizzle-zod)
- Type-safe insert schemas generated from Drizzle tables

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI primitives (accordion, dialog, dropdown, popover, toast, etc.)
- Embla Carousel for image galleries
- CMDK for command palette functionality
- Recharts for potential data visualization
- Lucide React for iconography

**Development Tools:**
- TypeScript with strict mode
- ESBuild for server bundling
- TSX for development server execution
- Path aliases configured (@/, @shared/, @assets/)

**CRM/Platform Integrations:**
- Designed for Pipedrive integration (live)
- Wix integration support (live)
- HubSpot, Webflow, WordPress, Shopify (coming soon)
- API-based workflow automation architecture

**Design Assets:**
- Stock images of adaptive creatures (chameleons, octopuses, arctic foxes, cuttlefish)
- Neural network background patterns
- Google Fonts (Inter, JetBrains Mono)

**Security & Compliance:**
- Built on AWS infrastructure foundation
- SOC 2 Type II compliance preparation
- Encryption at rest and in transit
- IAM-based access control patterns
- CloudTrail monitoring integration

**External Services:**
- Jridgewell trace-mapping for source maps
- Date-fns for date manipulation
- Class-variance-authority for component variants
- Vercel deployment configuration (static site mode)