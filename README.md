# Next.js 15 Enterprise Template

A modern, feature-rich template for building scalable applications with Next.js 15, TypeScript, and TailwindCSS.

## Features

- ⚡️ **Next.js 15** with App Router and Server Components
- 🔥 **Turbopack** enabled for faster development
- 📦 **TypeScript** for type safety
- 🎨 **TailwindCSS** for styling
- 🎭 **shadcn/ui** for beautiful and accessible components
- 🔍 **Biome** for lightning-fast linting and formatting (replaces ESLint + Prettier)
- 🛠️ **Ultracite** for enhanced development workflow
- ⚡️ **Zod** for runtime type validation
- 🔐 **Type-safe Env** for validated environment variables

## Getting Started

### Using this template

```bash
# Using npx
npx create-next-app your-app-name -e https://github.com/frshaad/next-template

# Using create-next-app
pnpm create next-app -e https://github.com/frshaad/next-template
```

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Requirements

- Node.js 18.17.0 or later
- pnpm v8 or later

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting (uses BiomeJS)
- `pnpm format` - Format code (uses BiomeJS)
- `pnpm clean:build` - Clean build outputs
- `pnpm clean:node` - Clean node_modules

## Environment Variables

This template includes a type-safe environment variables setup using `Zod`. To add new environment variables:

1. Define your variables in `.env` file
2. Add validation schema in `src/lib/env.ts`

Example:
```typescript
// In src/lib/env.ts
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1)
});
```

Your environment variables will be automatically validated at build time and provide full TypeScript support.

## Why Biome Instead of ESLint + Prettier?

This template uses Biome as a unified tool for linting and formatting, replacing the traditional ESLint + Prettier setup. Here's why:

- **Speed**: Biome is significantly faster, being written in Rust
- **Simplicity**: Single tool for both linting and formatting
- **No Dependencies**: No need to manage multiple plugins and configurations
- **Modern**: Built with modern JavaScript/TypeScript features in mind
- **Consistency**: Single source of truth for code style

Example formatting times for this project:
- Biome: ~100ms
- Prettier + ESLint: ~2000ms

The template includes a pre-configured `biome.json` that works seamlessly with modern Next.js features.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
