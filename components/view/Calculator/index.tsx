import React, { useState } from "react";
import BaseLayout from "layout/BaseLayout";
import HoldingStockChart from "components/HoldingStockChart";
import Calculator from "components/Calculator";
import { PlusCircleIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import StockManageModal from "components/common/Modal/StockManageModal";
import TransparentButton from "components/common/Button/TransparentButton";

interface Props {}

const Index = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">배당금 계산기</h1>
      <h3 className="text-gray-400">배당금 계산기 & 시뮬레이터</h3>
      <div className="flex mt-4">
        <section>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">자산 보유현황</h2>
            <TransparentButton onClick={() => setIsModalOpen(true)}>
              <PlusCircleIcon className="h-4 inline-block text-gray-400 mr-1" />
              <p className="text-gray-400 text-sm">종목 관리</p>
            </TransparentButton>
          </div>
          <CalculatorContentWrapper className="shadow-lg">
            <HoldingStockChart />
          </CalculatorContentWrapper>
        </section>
        <section className="flex-1 ml-8">
          <h2 className="text-xl font-semibold">계산기</h2>
          <CalculatorContentWrapper>
            <Calculator />
          </CalculatorContentWrapper>
        </section>
      </div>
      <StockManageModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </BaseLayout>
  );
};

const CalculatorContentWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  width: 40vw;
  max-width: 520px;
  height: 400px;
  margin-top: 8px;
  border: 1px solid #cdcdcd4e;
  border-radius: 8px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
`;

export default Index;
