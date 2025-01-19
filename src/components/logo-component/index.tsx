import styled from "styled-components";
import { Logo } from "../../Icons/Logo";
import { Title } from "../main-page";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  min-width: 210px;

  @media (max-width: 768px) {
    justify-content: center;
    min-width: 150px;
    flex-direction: column;
  }
  @media (max-width: 420px) {
    justify-content: center;
    min-width: 130px;
    flex-direction: column;
  }
  @media (max-width: 340px) {
    justify-content: center;
    min-width: 100px;
    flex-direction: column;
  }
`;

export function LogoComponent() {
  return (
    <LogoContainer>
      <Logo />
      <Title>WILDLIFE</Title>
    </LogoContainer>
  );
}
