import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { Logo } from "./components/Icons/Logo";
import { Loupe } from "./components/Icons/Loupe";
import { LogButton } from "./components/LogButton";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Wrapper>
      <Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "19px 450px 0 121px",
            top: "19px",
          }}
        >
          <Logo />
          <Title>Wild Life</Title>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
            }}
          >
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
        </div>
      </Header>
    </Wrapper>
  );
}

export default App;
