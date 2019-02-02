import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// import theme from "./theme";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
