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
      </Container>
    </Wrapper>
  );
}

export default App;
