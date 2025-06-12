# Ruyaa AI Landing Page

This project is a Vite-based React + TypeScript application showcasing the Ruyaa AI landing page. It uses Tailwind CSS and Radix UI primitives to build reusable components. Storybook is included for developing and previewing these components.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Linting and Formatting

ESLint and Prettier are configured. Run checks with:

```bash
npm run lint
```

Format source files:

```bash
npx prettier --write .
```

## Testing

Vitest and Testing Library are used for unit tests:

```bash
npm test
```

## Environment Variables

Some features rely on environment variables such as `SUPABASE_PROJECT_ID` and `OPENROUTER_API_KEY`. Create a `.env.local` file and add any required keys.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
