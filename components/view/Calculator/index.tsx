import React from "react";
import BaseLayout from "layout/BaseLayout";
import HoldingStockChart from "components/HoldingStockChart/index";
import styled from "styled-components";

interface Props {}

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">배당금 계산기</h1>
      <h3 className="text-gray-400">배당금 계산기 & 시뮬레이터</h3>
      <section className="flex">
        <HoldingStockChartWrapper>
          <HoldingStockChart />
        </HoldingStockChartWrapper>
        <div className="flex-1">계산기</div>
      </section>
    </BaseLayout>
  );
};

const HoldingStockChartWrapper = styled.div`
  width: 520px;
  height: 400px;
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
`;

export default Index;
