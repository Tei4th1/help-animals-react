import styled from "styled-components";

export const NavigationPanel = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    flex-wrap: nowrap;
    gap: 5em;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      list-style-type: none;
      gap: 10px;
    }
  }
`;
export {};
