import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider } from "./styled-components";
import theme from "./theme";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";

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
