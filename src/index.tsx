import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider, createGlobalStyle } from "./styled-components";
import theme from "./theme";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  html > * {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
