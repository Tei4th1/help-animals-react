import "./App.css";
import {
  Wrapper,
  Container,
  Survival,
  SurvivalTitle,
  MainInfo,
} from "./components/main-page/";
import { RootContainer } from "./components/RootContainer";
import { useState } from "react";
import { ModalContainer } from "./components/modal";
import Header from "./components/header";
import LatestArticles from "./components/latest-articles/LatestArticles";
import Footer from "./components/footer/Footer";
import { Button } from "./components/button";

function App() {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  return (
    <RootContainer>
      <a id="about" />
      <Wrapper>
        <Container>
          <Header />

          <Survival>
            <SurvivalTitle>SURVIVAL</SurvivalTitle>
            <MainInfo>
              What this means is that we exist to help protect our environment
              and do in numbers of ways. You can save the planet by donation.
            </MainInfo>
            <Button filled onClick={() => setModalActive(true)}>
              Donate
            </Button>
            <ModalContainer active={isModalActive} setActive={setModalActive} />
          </Survival>
        </Container>
      </Wrapper>
      <LatestArticles />
      <Footer />
    </RootContainer>
  );
}

export default App;
