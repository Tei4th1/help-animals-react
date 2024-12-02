import "./App.css";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { Logo } from "./components/Icons/Logo";
import { Loupe } from "./components/Icons/Loupe";
import { LogButton } from "./components/LogButton";
import { Navigation } from "./components/Navigation";
import { NavContainer } from "./components/NavContainer";
import { LogoContainer } from "./components/LogoContainer";
import { Container } from "./components/Container";
import { Survival } from "./components/Survival";
import { MainInfo } from "./components/MainInfo/Index";
import { DonateButton } from "./components/DonateButton";
import { SurvivalTitle } from "./components/SurvivalTitle";

function App() {
  return (
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
            What this means is that we exist to help protect our environment and
            do in numbers of ways. You can save the planet by donation.
          </MainInfo>
          <DonateButton>Donate</DonateButton>
        </Survival>
      </Container>
    </Wrapper>
  );
}

export default App;
