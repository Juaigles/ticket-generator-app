/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inconsolata: ["Inconsolata", "monospace"],
        },
        fontSize: {
          // Text Presets
          "preset-1": ["60px", { lineHeight: "110%", letterSpacing: "-1px" }],
          "preset-1-mobile": ["30px", { lineHeight: "110%", letterSpacing: "-1px" }],
          "preset-2": ["40px", { lineHeight: "110%", letterSpacing: "-1px" }],
          "preset-2-mobile": ["24px", { lineHeight: "110%", letterSpacing: "-1px" }],
          "preset-3": ["30px", { lineHeight: "110%", letterSpacing: "-1px" }],
          "preset-3-mobile": ["22px", { lineHeight: "110%", letterSpacing: "-1px" }],
          "preset-4": ["24px", { lineHeight: "120%", letterSpacing: "-0.5px" }],
          "preset-4-mobile": ["20px", { lineHeight: "120%", letterSpacing: "-0.5px" }],
          "preset-5": ["20px", { lineHeight: "110%", letterSpacing: "-0.3px" }],
          "preset-6": ["18px", { lineHeight: "120%", letterSpacing: "0px" }],
          "preset-6-mobile": ["14px", { lineHeight: "120%", letterSpacing: "0px" }],
          "preset-7": ["12px", { lineHeight: "120%", letterSpacing: "-0.2px" }],
        },
        colors: {
          text: "rgba(255, 255, 255, 0.87)",
          bg: "#242424",
        },
      },
    },
    plugins: [],
  };
  