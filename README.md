<div align="center">
  <h1>🚀 Next.js Enterprise Template</h1>
  <p>Modern, Production-ready template powered by Next.js 15 and React 19</p>
</div>

## ✨ Key Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team) with PostgreSQL
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [Shadcn/ui](https://ui.shadcn.com)
- **Theme**: Dark/Light mode using [next-themes](https://github.com/pacocoursey/next-themes)
- **Type Safety**: TypeScript + [Zod](https://zod.dev) schema validation
- **Development Tools**: ESLint, Prettier, Husky, Lint-staged

## 🔒 Environment Variables

This template uses type-safe environment variables with Zod validation.

### Required Environment Variables

```bash
# .env.local
NODE_ENV=development
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_PORT=5432
DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
```

### Environment Schema (Zod)

```typescript
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
  DB_MIGRATING: z
    .string()
    .refine((s) => s === 'true' || s === 'false')
    .transform((s) => s === 'true')
    .optional(),
});
```

## 📦 Getting Started

1. Clone & create your project:

```bash
git clone https://github.com/frshaad/next-starter.git my-project
cd my-project
pnpm install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
```

3. Initialize database:

```bash
pnpm db:generate   # Generate migrations
pnpm db:push      # Push schema to database
pnpm db:studio    # (Optional) Open Drizzle Studio
```

4. Start development server:

```bash
pnpm dev
```

## 🛠 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build production application
pnpm start        # Start production server
pnpm lint         # Lint code with ESLint
pnpm format       # Format code with Prettier
pnpm db:generate  # Generate Drizzle migrations
pnpm db:push      # Push migrations to database
pnpm db:studio    # Open Drizzle Studio
```

## 📁 Project Structure

```
.
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   └── shared/      # Shared components
│   └── lib/             # Utility functions
│       ├── db/          # Database configuration
│       ├── env/         # Environment validation
│       └── utils/       # Helper functions
├── drizzle/             # Database migrations
├── public/              # Static assets
└── types/              # TypeScript types
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Set environment variables
4. Deploy!

## 📄 License

MIT License - See [LICENSE.md](LICENSE.md)
