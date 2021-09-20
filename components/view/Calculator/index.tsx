import React from "react";
import BaseLayout from "layout/BaseLayout";

interface Props {}

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">배당금 계산기</h1>
      <h3 className="text-gray-400">배당금 & 세금 계산기</h3>
    </BaseLayout>
  );
};

export default Index;
