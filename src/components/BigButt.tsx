import styled from "../styled-components";
import Button from "./Button";

interface BigButtProps {
  medium?: boolean;
}

const BigButt = styled(Button)<BigButtProps>`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
`;

export default BigButt;
