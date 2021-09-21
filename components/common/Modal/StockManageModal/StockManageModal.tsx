import React from "react";
import BaseModal from "../BaseModal";

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isModalOpen: boolean;
  setIsModalOpen: any;
}
const StockManageModal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    isModalOpen && (
      <BaseModal setIsModalOpen={setIsModalOpen}>
        <h1 className="text-2xl font-bold">포트폴리오 관리</h1>
        <h2>보유종목 리스트</h2>
        <ul></ul>
      </BaseModal>
    )
  );
};

export default StockManageModal;
