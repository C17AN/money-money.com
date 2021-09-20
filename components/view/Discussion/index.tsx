import React from "react";
import BaseLayout from "layout/BaseLayout";

interface Props {}

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">토론 게시판</h1>
      <h3 className="text-gray-400">종목 토론 게시판</h3>
    </BaseLayout>
  );
};

export default Index;
