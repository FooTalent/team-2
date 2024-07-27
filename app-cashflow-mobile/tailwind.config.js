/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontSize:{
      headxxl: "27px",
      headxl: "22px",
      headlg: "18px",
      headmd: "14px",
      headsm: "11px",
      headxs: "9px",
      pxl: "18px",
      plg: "14px",
      pmd: "11px",
      psm: "9px",
      pxs: "7px",
    },
    fontWeight:{
      headblack: "900",
      headbold: "700",
      headsemibold: "500",
      headlight: "200",
      pbold: "700",
      psemibold: "500",
      plight: "300",
    },
    colors: {
      primaryGreen: "#04FD3B",
      primaryLightGreen: "#6EFF8E",
      primaryLighterGreen: "#ABFEBD",
      primaryPink: "#FF00B8",
      primaryLightPink: "#FF75D9",
      primaryLighterPink: "#FFA7E6",
      primaryBackground: "#090215",
      neutralGray: "#4B4B4B",
      neutralLightGray: "#838383",
      neutralLighterGray: "#C1C1C1",
      neutralWhite: "#FFFFFF",

      },
    fontFamily:{
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}