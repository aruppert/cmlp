import React from "react";
import { ThemeProvider } from "emotion-theming";
import primary from "./themes/primary";
import GlobalStyles from "./GlobalStyles";
// import Start from "./pages/Start";
import Background from "./components/Background.js";

function App() {
  return (
    <>
      <ThemeProvider theme={primary}>
        <GlobalStyles />
        <Background />
        {/* <Start /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
