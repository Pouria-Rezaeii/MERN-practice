export const theme = {
  palette: {
    primary: {
      light: "#27C09F",
      main: "#029F85",
      dark: "#049575",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
    },
  },
  mobileSize: generateMediaQuery(600, "down"),
  tabletSize: generateMediaQuery(900, "down"),
  breakpoints: {
    up: (size: number) => generateMediaQuery(size, "up"),
    down: (size: number) => generateMediaQuery(size, "down"),
  },
};

function generateMediaQuery(size: number, type: "up" | "down") {
  return type === "up"
    ? `@media (min-width: ${size + 0.05}px)`
    : `@media (max-width: ${size - 0.05}px)`;
}
