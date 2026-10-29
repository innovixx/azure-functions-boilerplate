# Azure Functions Boilerplate

## Highlights

A production-ready TypeScript boilerplate for Azure Functions with integrated tooling for linting, type-checking, and development. Includes pre-configured HTTP and Timer triggers with modern development practices.

## Quick Start

## Usage

To use the Azure Functions boilerplate, follow these steps:

1. Clone the repository and install dependencies:

```bash
git clone git@github.com:innovixx/azure-functions-boilerplate.git
cd azure-functions-boilerplate
pnpm i
```

2. Start the development server:

```bash
pnpm run dev
```

3. Create new functions in the `src/functions` directory following the existing HTTP and Timer trigger examples.

## Pre-commit Checks

This project uses Husky and lint-staged to automatically run ESLint and TypeScript type-checking on commit for staged files. No configuration needed—hooks are installed with `pnpm install`.

## License

[MIT](https://github.com/innovixx/azure-functions-boilerplate/blob/master/LICENSE) Copyright (c) Innovixx Digital Limited