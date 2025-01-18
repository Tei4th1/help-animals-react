import styled from "styled-components";
import { LogoContainer } from "../LogoContainer";
import { Logo } from "../../../Icons/Logo";
import { Title } from "../Title";
import { NavContainer } from "../NavContainer";
import { Navigation } from "../Navigation";
import { Loupe } from "../../../Icons/Loupe";
import { LogButton } from "../LogButton";

const HeaderContainer = styled.div`
  top: 1.188em;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
  }

  @media (min-width: 420px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 200px;
}
    @media (min-width: 340px) {
      flex-direction: column;
      justify-content: space-between;
      gap: 100px;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <Title>WILDLIFE</Title>
      </LogoContainer>

      <NavContainer>
        <ul>
          <Navigation>
            <a href="#articles">Articles</a>
          </Navigation>
          <Navigation>
            <a href="#contacts">Contacts</a>
          </Navigation>
          <li>
            <Loupe />
          </li>
          <li>
            <a href="#email">
              <LogButton>Sign in</LogButton>
            </a>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
export default Header;
