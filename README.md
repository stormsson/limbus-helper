# Limbus

A Next.js application for managing and selecting game characters.

## Project Overview

Limbus is a web interface that allows users to select owned characters with different identities, skills, and characteristics. The application saves selection data in the browser's local storage for persistence.


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Radix UI](https://www.radix-ui.com/) - UI component library

## Development Guidelines

- Components are organized in the `src/components` directory
- CSS modules are used for styling each component
- No Tailwind CSS - using CSS modules instead
- Reuse components when possible
- Use Radix UI components when applicable

