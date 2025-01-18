import styled from "styled-components";

export const ItemsContainer = styled.div`
  padding: 9.3em 9em;
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 5.5rem;

  @media (max-width: 430px) {
    padding: 1em 3em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
