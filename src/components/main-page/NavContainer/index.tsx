import styled from "styled-components";

export const NavContainer = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style-type: none;
    align-items: center;

    @media (max-width: 420px) {
      flex-direction: column;
      align-items: center;
      list-style-type: none;
      gap: 10px;
    }
  }
`;
export {};
