import styled from "styled-components";

export const Header = styled.div`
  top: 1.188em;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
