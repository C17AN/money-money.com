import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => {
  return (
    <Container className="ml-48 p-16">
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
