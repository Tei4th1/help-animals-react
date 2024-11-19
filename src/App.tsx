import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "15px",
            left: "19px",
          }}
        >
          <svg xmlns="./logos.svg" width={70} height={60} />
          <Title>Wild Life</Title>
        </div>
      </Header>
    </Wrapper>
  );
}

export default App;
