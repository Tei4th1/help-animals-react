import React from "react";
import styled from "styled-components";

export const Background = styled.div`
  top: 0;
  left: 0;
  position: static;
  width: 100%;
  background-image: url("/BG.png");
  display: flex;
  margin: 0;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
type TWrapper = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>;
};
