# React + Vite

This project is a minimal setup to run React with Vite, featuring Hot Module Replacement (HMR) and ESLint configurations.

## Features

- **Vite**: A fast build tool for modern web applications.
- **React 18.3**: The latest version of React.
- **ESLint**: Configured with recommended rules and React-specific rules.
- **Fast Refresh**: Enabled via Babel or SWC for instant updates.

## Project Structure

```
./
├── index.html  # Entry point
├── eslint.config.js  # ESLint configuration
├── src/
│   ├── main.jsx  # Main React file
│   ├── components/  # React components
│   ├── App.jsx  # Root component
└── public/  # Static assets
```

## Installation

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

## ESLint Configuration

The ESLint configuration is defined in `eslint.config.js`, using:

- `@eslint/js` for base JavaScript rules
- `eslint-plugin-react` for React best practices
- `eslint-plugin-react-hooks` for React Hooks rules
- `eslint-plugin-react-refresh` for enforcing rules on React Refresh

## Running Linter

To check for linting issues, run:

```sh
npm run lint
```

## Building for Production

To create an optimized production build, run:

```sh
npm run build
```

## License

This project is open-source and available under the MIT License.