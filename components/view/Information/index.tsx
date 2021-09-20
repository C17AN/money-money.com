import React from "react";
import BaseLayout from "layout/BaseLayout";

interface Props {}

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">배당종목 정보</h1>
      <h3 className="text-gray-400">배당종목 상세정보</h3>
    </BaseLayout>
  );
};

export default Index;
