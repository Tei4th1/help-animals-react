import React from "react";
import styled from "styled-components";

export const Background = styled.body`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("/BG.png");
  display: flex;
  margin: 0;
  flex-direction: column;
  height: 100%;
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
`;
type TWrapper = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>;
};
