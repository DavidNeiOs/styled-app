import styled from "../styled-components";
import { rotate360 } from "./keyframes";

export const AppWrapper = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

export const AppTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 900;
`;

export const AppIntro = styled.p`
  font-size: large;
`;

export const EmojiWrapper = styled.span.attrs({
  role: "img"
})``;
