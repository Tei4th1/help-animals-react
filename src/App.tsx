import React from "react";
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

function App() {
  return (
    <Wrapper>
      <Header>
        <LogoContainer>
          <Logo />
          <Title>Wild Life</Title>
        </LogoContainer>

        <NavContainer>
          <ul>
            <Navigation>
              <a href="*">Articles</a>
            </Navigation>
            <Navigation>
              <a href="*">Contacts</a>
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
    </Wrapper>
  );
}

export default App;
