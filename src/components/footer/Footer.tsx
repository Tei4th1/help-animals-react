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
      <a id="contacts" />
      <ItemsContainer>
        <LogoContainer>
          <Logo />
          <Title>WILDLIFE</Title>
        </LogoContainer>
        <NavigationPanel>
          <ul>
            <NavLinksStyle>
              <a href="#articles">Articles</a>
            </NavLinksStyle>
            <NavLinksStyle>
              <a href="#about">About us</a>
            </NavLinksStyle>
            <NavLinksStyle>
              <a
                href="https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B8%D0%BD%D0%BF%D0%B8%D1%81"
                target="_blank"
              >
                Learn more
              </a>
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
