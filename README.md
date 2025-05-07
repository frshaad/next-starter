<div align="center">
  <h1>🚀 Next.js Enterprise Template</h1>
  <p>Modern, Production-ready template powered by Next.js 15 and React 19</p>
</div>

## ✨ Key Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Type Safety**: TypeScript + [Zod](https://zod.dev) schema validation
- **Development Tools**: ESLint, Prettier

## 🔒 Environment Variables

This template uses type-safe environment variables with Zod validation.

### Required Environment Variables

```bash
# .env
NODE_ENV=development
```

### Environment Schema (Zod)

```typescript
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
})
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
cp .env.example .env
```

3. Start development server:

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
pnpm check        # Check types, lint (fix) and Format codebase
```

## 📄 License

MIT License - See [LICENSE.md](LICENSE.md)
