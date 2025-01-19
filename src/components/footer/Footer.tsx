import {
  FooterContainer,
  ItemsContainer,
  NavigationPanel,
  LinksContainer,
  NavLinksStyle,
} from "./";
import { Pintrest, Telegram, Inst, Facebook } from "../../Icons";
import { LogoComponent } from "../logo-component";

function Footer() {
  return (
    <FooterContainer>
      <a id="contacts" />
      <ItemsContainer>
        <LogoComponent />
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
