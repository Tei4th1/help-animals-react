import { FooterContainer } from "./FooterContainer";
import { Logo } from "../main-page/Icons/Logo";
import { LogoContainer } from "../main-page/LogoContainer";
import { Title } from "../main-page/Title";
import { ItemsContainer } from "./ItemsContainer";
import { NavigationPanel } from "./NavigationPanel";
import { NavLinksStyle } from "./NavLinksStyle";
import { LinksContainer } from "./LinksContainer";
import { Facebook } from "./Icons/Facebook";
import { Inst } from "./Icons/Inst";
import { Pintrest } from "./Icons/Pintrest";
import { Telegram } from "./Icons/Telergam";

function Footer() {
  return (
    <FooterContainer>
      <ItemsContainer>
        <LogoContainer>
          <Logo />
          <Title>WILDLIFE</Title>
        </LogoContainer>
        <NavigationPanel>
          <ul>
            <NavLinksStyle>
              <a href="*">Articles</a>
            </NavLinksStyle>
            <NavLinksStyle>
              <a href="*">About us</a>
            </NavLinksStyle>
            <NavLinksStyle>
              <a href="*">Learn more</a>
            </NavLinksStyle>
          </ul>
        </NavigationPanel>
        <LinksContainer>
          <Facebook />
          <Inst />
          <Pintrest />
          <Telegram />
        </LinksContainer>
      </ItemsContainer>
    </FooterContainer>
  );
}
export default Footer;
