import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add other folders as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;