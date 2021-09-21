import React from "react";
import styled from "styled-components";

interface Props {}

const SideBarChart = (props: Props) => {
  return <Container>{/* <p>차트</p> */}</Container>;
};

const Container = styled.aside`
  height: 100vh;
  background-color: red;
  position: fixed;
  right: 0;
`;

export default SideBarChart;
