import styled from "styled-components";

export const FooterContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("img/footerBg.jpeg");
  flex-direction: row;
  width: 100%;
  position: flex;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
