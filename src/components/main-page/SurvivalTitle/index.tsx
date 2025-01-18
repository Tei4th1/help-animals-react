import styled from "styled-components";

export const SurvivalTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: #cd6326;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    position: flex;
    font-size: 30px;
    color: #f7f7f7;
    align-items: center;
  }

  @media (max-width: 340px) {
    font-size: 30px;
    align-items: center;
  }
`;
