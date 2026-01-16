# Overview

This is a full-stack web application showcasing Afrin Jabee, a swimmer who made history as the first AMU (Aligarh Muslim University) student to successfully swim across the English Channel. The application is a portfolio/tribute website built with React on the frontend and Express.js on the backend, featuring modern UI components and responsive design to highlight her swimming achievements and journey.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application built with React 18 using TypeScript
- **Component Library**: Extensive use of shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom swimming-themed color palette and responsive design
- **Routing**: Client-side routing with Wouter for lightweight navigation
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript support
- **Development Setup**: Hot module replacement and middleware for development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (easily replaceable with database)
- **Static Serving**: Serves React build artifacts in production

## Database Design
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **User Model**: Basic user table with id, username, and password fields
- **Migration Support**: Database migrations managed through Drizzle Kit

## Component Architecture
- **Modular Design**: Well-organized component structure with separate sections (Hero, About, Achievements, Gallery, etc.)
- **UI Components**: Comprehensive component library in `/components/ui/` including forms, navigation, dialogs, and data display
- **Responsive Layout**: Mobile-first design with adaptive layouts for different screen sizes
- **Accessibility**: Built-in accessibility features through Radix UI primitives

## Development Workflow
- **TypeScript**: Full TypeScript support across frontend and backend
- **Path Aliases**: Configured import aliases for clean imports (@/, @shared/, etc.)
- **Environment Support**: Separate development and production configurations
- **Code Quality**: ESLint configuration and TypeScript strict mode

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend Framework**: Express.js with TypeScript support
- **Build Tools**: Vite, ESBuild for production builds

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography

## Database and ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for schema validation with Drizzle integration

## Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Code Formatting**: Prettier integration through editor plugins
- **Development Server**: Vite dev server with HMR
- **Testing**: Test-ready setup with data-testid attributes on components

## Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Form Handling**: React Hook Form with resolvers
- **Carousel**: Embla Carousel for image galleries
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Deployment Configuration
- **Production Build**: Optimized builds with Vite and ESBuild
- **Static Assets**: Proper static file serving configuration
- **Environment Variables**: Environment-based configuration for database and services