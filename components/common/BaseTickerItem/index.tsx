import React from "react";
import styled from "styled-components";

interface Props {}

const Index = (props: Props) => {
  return <BaseTickerItem></BaseTickerItem>;
};

const BaseTickerItem = styled.li`
  border-radius: 12px;
  box-shadow: 3px 3px 10px 2px #cdcdcd;
  list-style: none;
  margin: 0.75rem 0;
  flex: 1;
`;

export default Index;
