import * as React from "react";
import { ThemeProvider } from "./styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme1, theme2, ThemeInterface } from "./theme/themes";
import {
  AppWrapper,
  AppLogo,
  AppHeader,
  AppTitle,
  AppIntro,
  EmojiWrapper
} from "./style/App";
import ThemeSelect from "./components/ThemeSelect";
import Button from "./components/Button";
import BigButt from "./components/BigButt";
import Underline from "./components/Underline";

interface AppState {
  theme: ThemeInterface;
}

import logo from "./logo.svg";

class App extends React.Component<{}, AppState> {
  state = {
    theme: theme1
  };
  public handleThemeChange = (e: any) => {
    const value = e.target.value;
    let selectedTheme: ThemeInterface;
    value === "theme1" ? (selectedTheme = theme1) : (selectedTheme = theme2);
    this.setState({ theme: selectedTheme });
  };
  public render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyle />
          <AppWrapper>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <AppTitle>Welcome to React</AppTitle>
            </AppHeader>
            <AppIntro>
              Bootstrapped with{" "}
              <Underline>
                <code>create-react-app</code>.
              </Underline>
            </AppIntro>
            <AppIntro>
              Components styled with{" "}
              <Underline>
                <code>styled-components</code>
              </Underline>{" "}
              <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
            </AppIntro>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <ThemeSelect handleThemeChange={this.handleThemeChange} />
            <BigButt medium>Big Button</BigButt>
          </AppWrapper>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
