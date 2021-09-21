import React from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLElement> {
  setIsModalOpen: any;
}

const BaseModal = ({ children, setIsModalOpen, ...props }: Props) => {
  return (
    <Backdrop onClick={() => setIsModalOpen(false)}>
      <ModalBody>{children}</ModalBody>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: #66666665;
`;

const ModalBody = styled.div`
  width: 40vw;
  height: 80vh;
  margin: auto auto;
  background-color: white;
  border-radius: 8px;
`;

export default BaseModal;
