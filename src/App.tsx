import * as React from "react";
import {
  AppWrapper,
  AppLogo,
  AppHeader,
  AppTitle,
  AppIntro
} from "./style/App";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
