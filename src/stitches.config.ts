import { createStitches, createTheme } from "@stitches/react";

export const { styled, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      default: "BlinkMacSystemFont",
    },
    fontSizes: {
      small: "1rem",
      medium: "1.25rem",
      large: "1.5rem",
    },
    colors: {
      hiContrast: "black",
      loContrast: "white",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    hiContrast: "white",
    loContrast: "black",
  },
});

export const funTheme = createTheme({
  colors: {
    hiContrast: "blue",
    loContrast: "pink",
  },
});
