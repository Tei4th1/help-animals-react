import React from "react";
import styled from "styled-components";

export const Background = styled.body`
  background-image: url("/BG.png");
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-direction: column;
`;
type TWrapper = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>;
};
