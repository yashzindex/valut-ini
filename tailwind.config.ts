
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1300px',
    },
    extend: {
      colors: {
        primary: "#F8B653",
        secondary: "#19253F",
      },
      boxShadow: {
        "sector-card-shadow": "4px 4px 31.9px 0px rgba(69, 78, 98, 0.14)",
        "fund-card-shadow": "0px 4px 40px 0px rgba(25, 37, 62, 0.78)",
        "navbar-shadow": "0px 4px 40px 0px rgba(25, 37, 63, 0.43)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          '@screen sm': {
            maxWidth: '552px',
          },
          '@screen md': {
            maxWidth: '752px',
          },
          '@screen lg': {
            maxWidth: '952px',
          },
          '@screen xl': {
            maxWidth: '1152px',
          },
          '@screen xxl': {
            maxWidth: '1252px',
          },
        },
      })
    },
  ],
};
export default config;
