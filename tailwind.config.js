/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat_reg:["Montserrat-Regular", "sans-serif"],
        montserrat_med:["Montserrat-Medium", "sans-serif"],
        montserrat_bold:["Montserrat-Bold", "sans-serif"],
        nexa_reg:["Nexa-Regular", "sans-serif"],
        inter_reg:["Inter-Regular", "sans-serif"]
      }
    },
  },
  plugins: [
    plugin(function({addUtilities, theme}){
      const pyroTypography = {
        ".montserrat-reg-12":{
          fontFamily: theme("fontFamily.montserrat_reg"),
          fontSize: "12px",
        },
        ".montserrat-reg-14":{
          fontFamily: theme("fontFamily.montserrat_reg"),
          fontSize: "14px",
        },
        ".montserrat-med-10":{
          fontFamily: theme("fontFamily.montserrat_med"),
          fontSize: "10px",
        },
        ".montserrat-med-12":{
          fontFamily: theme("fontFamily.montserrat_med"),
          fontSize: "12px",
        },
        ".montserrat-med-14":{
          fontFamily: theme("fontFamily.montserrat_med"),
          fontSize: "14px",
        },
        ".montserrat-med-15":{
          fontFamily: theme("fontFamily.montserrat_med"),
          fontSize: "15px",
        },
        ".montserrat-med-18":{
          fontFamily: theme("fontFamily.montserrat_med"),
          fontSize: "18px",
        },
        ".montserrat-bold-25":{
          fontFamily: theme("fontFamily.montserrat_bold"),
          fontSize: "25px",
        },
        ".montserrat-bold-31":{
          fontFamily: theme("fontFamily.montserrat_bold"),
          fontSize: "31px",
        },
        ".inter-reg-8":{
          fontFamily: theme("fontFamily.inter_reg"),
          fontSize: "8px",
        },
        ".inter-reg-10":{
          fontFamily: theme("fontFamily.inter_reg"),
          fontSize: "10px",
        },
        ".inter-reg-12":{
          fontFamily: theme("fontFamily.inter_reg"),
          fontSize: "12px",
        },
        ".nexa-reg-15":{
          fontFamily: theme("fontFamily.nexa_reg"),
          fontSize: "15px",
        },
        ".nexa-reg-16":{
          fontFamily: theme("fontFamily.nexa_reg"),
          fontSize: "16px",
        },
        ".nexa-reg-18":{
          fontFamily: theme("fontFamily.nexa_reg"),
          fontSize: "18px",
        },
        ".nexa-reg-20":{
          fontFamily: theme("fontFamily.nexa_reg"),
          fontSize: "20px",
        },
        ".nexa-reg-25":{
          fontFamily: theme("fontFamily.nexa_reg"),
          fontSize: "25px",
        },
      };

      addUtilities(pyroTypography, ["responsive"]);
    })
  ],
};
