import styled from "styled-components";

export const NavContainer = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export {};
