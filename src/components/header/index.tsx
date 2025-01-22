import styled from "styled-components";
import { NavContainer } from "../main-page/NavContainer";
import { Navigation } from "../main-page/Navigation";
import { Loupe } from "../../Icons/Loupe";
import { LogoComponent } from "../logo-component";
import { Button } from "../button";
import { TextLink } from "../text-link";

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
      <LogoComponent />

      <NavContainer>
        <ul>
            <TextLink href="#articles">Articles</TextLink>
          <Navigation>
            <TextLink href="#contacts">Contacts</TextLink>
          </Navigation>
          <li>
            <Loupe />
          </li>
          <li>
            <TextLink href="#email">
              <Button>Sign in</Button>
            </TextLink>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
export default Header;
