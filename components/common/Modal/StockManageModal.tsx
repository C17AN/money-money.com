import React from "react";
import BaseModal from "./BaseModal";

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isModalOpen: boolean;
  setIsModalOpen: any;
}
const StockManageModal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    isModalOpen && (
      <BaseModal setIsModalOpen={setIsModalOpen}>
        <div>모달 헤더</div>
      </BaseModal>
    )
  );
};

export default StockManageModal;
