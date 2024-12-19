import styled from "styled-components";

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
  text-align: center;
`;

export const ModalContainer: React.FC<ModalContainerProps> = ({
  active,
  setActive,
}) => {
  return (
    <Modal show={active} onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Зодньте</h2>
        <p>пжпжпж( для животных)</p>
        <button onClick={() => setActive(false)}>Close</button>
      </ModalContent>
    </Modal>
  );
};
