import * as React from "react";
import styled from "../styled-components";

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0 0.5rem;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  border-radius: 2px;
`;

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`;

interface ThemeSelectProps {
  handleThemeChange: (e: any) => void;
}

class ThemeSelect extends React.Component<ThemeSelectProps, {}> {
  render() {
    return (
      <div>
        <Select onChange={e => this.props.handleThemeChange(e)}>
          <SelectOpt value="theme1">Theme 1</SelectOpt>
          <SelectOpt value="theme2">Theme 2</SelectOpt>
        </Select>
      </div>
    );
  }
}

export default ThemeSelect;
