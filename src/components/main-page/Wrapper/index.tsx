import React from "react";
import styled from "styled-components";

export const Background = styled.div`
  position: flex;
  width: 100%;
  background-image: url("img/BG.png");
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
type TWrapper = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>;
};
