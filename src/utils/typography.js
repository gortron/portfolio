import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Lora", "serif"],
  bodyFontFamily: ["Nunito", "sans-serif"],
})

// const typography = new Typography(theme);

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
