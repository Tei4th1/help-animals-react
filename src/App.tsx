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

function App() {
  return (
    <GlobalContainer>
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
                  <a href="*">Articles</a>
                </Navigation>
                <Navigation>
                  <a href="*">Contact</a>
                </Navigation>
                <li>
                  <Loupe />
                </li>
                <li>
                  <LogButton>Log in</LogButton>
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
            <DonateButton>Donate</DonateButton>
          </Survival>
        </Container>
      </Wrapper>

      <LatestArticles />
      <Footer />
    </GlobalContainer>
  );
}

export default App;
