import React, { ReactNode } from "react";
import styled from "styled-components";
import { PresentationChartLineIcon } from "@heroicons/react/outline";

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => {
  return (
    <Container className="ml-48 p-16">
      <div className="fixed">
        {/* <PresentationChartLineIcon className="h-5 text-gray-400  inline top-1 left-1/3 p-3 rounded-full shadow-md" /> */}
      </div>
      <>{children}</>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 192px;
  padding: 24px;
  height: calc(100vh - 56px - 80px);
`;

export default Index;
