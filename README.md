# Hire My Idea

A modern, high-performance full-stack monorepo built with TypeScript, React 19, and Express 5.

## 🚀 Overview

This project is structured as a monorepo using **pnpm workspaces**, ensuring a clean separation between the frontend application, backend API server, and shared libraries.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4, Radix UI, Framer Motion
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: Wouter
- **Icons**: Lucide React

### Backend
- **Framework**: Express 5 (Node.js)
- **Logging**: Pino & Pino-HTTP
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod
- **API Codegen**: Orval (OpenAPI to React Query hooks)

### Monorepo & Tools
- **Package Manager**: pnpm Workspaces
- **Language**: TypeScript
- **Runtime**: Node.js 24+

## 📂 Project Structure

- `artifacts/olive-app/` - The main React frontend application.
- `artifacts/api-server/` - The Express backend API server.
- `lib/db/` - Shared database schema and Drizzle configurations.
- `lib/api-spec/` - OpenAPI specification files.
- `lib/api-client-react/` - Generated React Query hooks for API interaction.
- `lib/api-zod/` - Generated Zod schemas from API specs.
- `scripts/` - Workspace-wide utility scripts.

## ⚡ Getting Started

### Prerequisites
- Node.js 24 or higher
- pnpm installed (`npm install -g pnpm`)

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the project:
   ```bash
   pnpm build
   ```

### Running Locally
To run both the frontend and backend in development mode:
```bash
# Start Frontend
pnpm --filter @workspace/olive-app run dev

# Start Backend
pnpm --filter @workspace/api-server run dev
```

## 🌐 Deployment

### Database
Provision a PostgreSQL database (e.g., [Neon.tech](https://neon.tech)) and set the `DATABASE_URL` environment variable.

### Hosting
- **Frontend**: Deploy `artifacts/olive-app/dist` to Vercel or Netlify.
- **Backend**: Deploy `artifacts/api-server` to Railway, Render, or any Node.js hosting.

## 📝 License
MIT
