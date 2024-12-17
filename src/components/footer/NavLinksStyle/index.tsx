import styled from "styled-components";

export const NavLinksStyle = styled.li`
  a {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-size: 23px;
    white-space: nowrap;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
