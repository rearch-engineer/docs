# ReArch Docs

This is the official ReArch documentation site.

## Quick Start

### Prerequisites

- **bun** >=1.3.10

### Development

```bash
# Clone
git clone git@github.com:rearch-engineer/docs.git
cd docs

# Install dependencies
bun i

# Develop
bun run dev

# Build
bun run build

# Preview
bun run preview
```

## Project Structure

```
src/
  assets/         # Images and static assets
  content/
    docs/         # Documentation pages (.md / .mdx)
  content.config.ts
```

## Deployment

The site is deployed on Vercel with automatic builds from the main branch.
