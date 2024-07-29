import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors:{
        "bg-primary": "#3F4647",
        "bg-secondary": "#6B6666",
        "bg-third": "#66D76E",
        "bg-four": "#26FFF2",
        "bg-fifth": "#684ED0",
        "bg-six": "#C7AE41",
        "bg-seven": "#495051",
        "bg-eight": "#333D3E",
        "primary": "#C5AC45",
        "secondary": "#F93C65",
        "third": "#00B69B",
        "progress-primary": "#684DD2",
        "progress-secondary": "#3ACA96",
        "progress-third": "#8686AE",
        "progress-fourth": "#D05E4E",
        "progress-fifth": "#4F7C72",
        "progress-six": "#D05E4E",
        "card-primary": "#D9D9D9",
        "card-secondary": "#1E5758",
        "orange-lo": "#F89D35",
        "orange-do": "#F86058",
        
      },
      spacing:{
        "46%": "46%",
        "50px": "50px",
        "83px": "83px",
        "250px": "250px",
        "265px": "265px",
        "280px": "280px",
        "444px": "444px",
        "458px": "458px",
        "486px": "486px",
        "594px": "594px",
        "584px": "584px",
        "unset": "unset",
      },
      fontSize: {
        '73px': '73px',
        '83px': '83px',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      lineHeight: {
        '5.2rem': '5.2rem',
      },
      boxShadow: {
        'btn-shadow': '0px 3px 2.8px rgb(0 0 0 / 15%)',
        'card-shadow': '0px 3px 7.4px rgb(0 0 0 / 12%)',
        'card-second': '0px 3px 4px rgb(0 0 0 / 15%)',
      },
      borderRadius: {
        '14px': '14px',
        '18px': '18px',
      },
      scale: {
        '14': '1.4',
      }
    },
  },
  plugins: [],
} satisfies Config;
