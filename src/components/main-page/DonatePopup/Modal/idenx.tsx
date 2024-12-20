import styled from "styled-components";
import { CloseButton } from "../CloseButton";
import { useState } from "react";

interface PopupOverlayProps {
  show: boolean;
}

interface ModalContainerProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

export const Modal = styled.div<PopupOverlayProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &.active {
    transform: scale(1);
  }
`;
export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 300px;
`;

const DonateTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 48px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
`;

const InputTitle = styled.h3`
  margin: 0;
  flex-direction: row;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 0.7em;
  color: #828282;
`;

const MoneyInput = styled.input`
  font-size: 18px;
  border: none;
  color: #8c8c8c;
  border-bottom: 1px solid #d3d3d3;
  padding: 5px 0;
  outline: none;
  background: none;
`;

const NameInput = styled.input`
  font-size: 18px;
  border: none;
  color: #8c8c8c;
  border-bottom: 1px solid #d3d3d3;
  padding: 5px 0;
  outline: none;
  background: none;
`;

const CommentInput = styled.input`
  font-size: 18px;
  min-height: 100px;
  border: 1px solid #d3d3d3;
  background: none;
`;

export const ModalContainer: React.FC<ModalContainerProps> = ({
  active,
  setActive,
}) => {
  return (
    <Modal show={active} onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <DonateTitle>Donate</DonateTitle>
        <Container>
          <InputsContainer>
            <InputTitle>Your name</InputTitle>
            <NameInput placeholder="Name" pattern="/^[a-zA-Z ]+$/"></NameInput>
          </InputsContainer>
          <InputsContainer>
            <InputTitle>Amount</InputTitle>
            <MoneyInput placeholder="1000$" type="number"></MoneyInput>
          </InputsContainer>
          <InputsContainer>
            <InputTitle>Your comment</InputTitle>
            <CommentInput />
          </InputsContainer>
          <CloseButton onClick={() => setActive(false)}>Close</CloseButton>
        </Container>
      </ModalContent>
    </Modal>
  );
};
