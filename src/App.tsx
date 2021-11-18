import { globalCss } from "./stitches.config";
import ColorModeProvider from "./color-mode-provider";
import Header from "./header/header";
import Content from "./content/content";

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily: "$default",
    margin: 0,
    backgroundColor: "$loContrast",
    height: "100%",
    width: "100%",
  },
  body: {
    margin: 0,
    height: "100%",
    width: "100%",
  },
  "#root": {
    height: "100%",
  },
});

function App() {
  globalStyles();

  return (
    <ColorModeProvider>
      <Header />
      <Content />
    </ColorModeProvider>
  );
}

export default App;
