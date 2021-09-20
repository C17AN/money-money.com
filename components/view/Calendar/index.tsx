import React from "react";
import BaseLayout from "layout/BaseLayout";

interface Props {}

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">배당금 캘린더</h1>
      <h3 className="text-gray-400">주요 배당일정 달력</h3>
    </BaseLayout>
  );
};

export default Index;
