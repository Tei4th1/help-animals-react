import "./App.css";
import { Wrapper } from "./components/main-page/Wrapper";
import { Container } from "./components/main-page/Container";
import { Survival } from "./components/main-page/Survival";
import { MainInfo } from "./components/main-page/MainInfo/Index";
import { DonateButton } from "./components/main-page/DonateButton";
import { SurvivalTitle } from "./components/main-page/SurvivalTitle";
import { RootContainer } from "./components/RootContainer";
import LatestArticles from "./components/latest-articles/LatestArticles";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { ModalContainer } from "./components/main-page/DonatePopup/Modal";
import Header from "./components/main-page/Header";

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
            <DonateButton onClick={() => setModalActive(true)}>
              Donate
            </DonateButton>
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
