import styled from "styled-components";

export const EmailInput = styled.input`
  width: 540px;
  height: 54px;
  border-radius: 15px 0 0 15px;
  font-size: 23px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  border-right: none;
  border-color: #666666;
  padding-left: 20px;

  @media (min-width: 768px) {
    max-width: 480px;
  }
`;
