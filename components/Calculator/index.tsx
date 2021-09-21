import { ResponsiveTreeMap } from "@nivo/treemap";
import React from "react";
import styled from "styled-components";

interface Props {}

const index = (props: Props) => {
  return (
    <Container>
      <Content>
        <h2>이번달에 수령할 배당금은 총 20,180원 입니다.</h2>
      </Content>
      <Result className="bg-blue-100 flex items-center justify-end pr-4">
        <h3 className="text-2xl">9월 예상 배당금 : 20,180₩</h3>
      </Result>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 16px;
`;

const Result = styled.div`
  position: absolute;
  width: 100%;
  height: 84px;
  border-bottom: none;
  bottom: 0;
`;

export default index;
