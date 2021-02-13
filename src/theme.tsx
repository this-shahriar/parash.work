import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: `'Karla', sans-serif`,
  body: `'Karla', sans-serif`,
  mono: `'Menlo', monospace`,
};

const breakpoints = createBreakpoints({
  sm: "0",
  md: "768px",
  lg: "1920px",
  xl: "6000px",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    accent: "#f5389e",
    accent2: "#922cf9",
  },
  fonts,
  breakpoints,
});

export default theme;
