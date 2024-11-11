import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        kurb: ['var(--font-kurb)'],
        noto: ['var(--font-noto)'],
      },
      colors: {
        primary: {
          DEFAULT: '#17495B',
        },
        "dark-blue": "#1C1F35",
        gray: "#6F7B8E",
        "secondary": "#F8A71B",
        "light-gray": "#F4F4F4",
        "input-border": "#4A5B73",
      },
      backgroundImage: {
        "banner-small-head": 'linear-gradient(94deg, #F8A71B -1.21%, #FBC65D 58.66%, #FCE2A0 116.84%)',
        "banner-button": 'linear-gradient(94deg, #F8A71B 0%, #FBC65D 50%, #FCE2A0 100%)',
        "home-service-card": 'linear-gradient(0deg, #17495B 14.34%, rgba(123, 123, 123, 0.00) 43.86%)',
        "about-banner": 'linear-gradient(91deg, #17495B 19.32%, rgba(9, 18, 66, 0.35) 59.95%)',
      }
    },
  },
  plugins: [],
};
export default config;
