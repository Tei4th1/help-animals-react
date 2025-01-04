import "./App.css";
import { Header } from "./components/main-page/Header";
import { Title } from "./components/main-page/Title";
import { Wrapper } from "./components/main-page/Wrapper";
import { Logo } from "./components/main-page/Icons/Logo";
import { Loupe } from "./components/main-page/Icons/Loupe";
import { LogButton } from "./components/main-page/LogButton";
import { Navigation } from "./components/main-page/Navigation";
import { NavContainer } from "./components/main-page/NavContainer";
import { LogoContainer } from "./components/main-page/LogoContainer";
import { Container } from "./components/main-page/Container";
import { Survival } from "./components/main-page/Survival";
import { MainInfo } from "./components/main-page/MainInfo/Index";
import { DonateButton } from "./components/main-page/DonateButton";
import { SurvivalTitle } from "./components/main-page/SurvivalTitle";
import { GlobalContainer } from "./components/GlobalContainer";
import LatestArticles from "./LatestArticles";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { ModalContainer } from "./components/main-page/DonatePopup/Modal";

function App() {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  return (
    <GlobalContainer>
      <a id="about" />
      <Wrapper>
        <Container>
          <Header>
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
                    <LogButton>Log in</LogButton>
                  </a>
                </li>
              </ul>
            </NavContainer>
          </Header>

          <Survival>
            <SurvivalTitle>SURVIVAL</SurvivalTitle>
            <MainInfo>
              What this means is that we exist to help protect our environment
              and do in numbers of ways. You can save the planet by donation.
            </MainInfo>
            <DonateButton onClick={() => setModalActive(true)}>
              Donate
            </DonateButton>
            <ModalContainer active={isModalActive} setActive={setModalActive} />
          </Survival>
        </Container>
      </Wrapper>
      <LatestArticles />
      <Footer />
    </GlobalContainer>
  );
}

export default App;
