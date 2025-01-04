import styled from "styled-components";

export const Navigation = styled.li`
  a {
    padding-right: 25px;
    padding-right: 25px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-size: 23px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 420px) {
      font-size: 18px;
    }
  }
`;
