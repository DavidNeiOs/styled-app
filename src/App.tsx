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
              Bootstrapped with <code>create-react-app</code>.
            </AppIntro>
            <AppIntro>
              Components styled with <code>styled-components</code>{" "}
              <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
            </AppIntro>
            <ThemeSelect handleThemeChange={this.handleThemeChange} />
          </AppWrapper>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
