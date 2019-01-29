import * as React from "react";
import styled, { keyframes } from "./styled-components";

import logo from "./logo.svg";

const rotate360 = keyframes`
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

const AppTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes[2]};
`;

const AppIntro = styled.p`
  font-size: large;
`;
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
