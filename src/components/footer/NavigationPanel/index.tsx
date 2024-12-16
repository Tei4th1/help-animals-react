import styled from "styled-components";

export const NavigationPanel = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 85px;
    margin-left: 120px;
    list-style-type: none;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      list-style-type: none;
      gap: 10px;
    }
  }
`;
export {};
