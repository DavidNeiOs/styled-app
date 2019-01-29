import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider, createGlobalStyle } from "./styled-components";
import theme from "./theme";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Times New Roman', Times, serif;
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
