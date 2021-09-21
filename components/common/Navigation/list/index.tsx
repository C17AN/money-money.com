import React, { useState } from "react";
import NavigationItem from "../item";
import {
  CalculatorIcon,
  CalendarIcon,
  ClipboardListIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { menuAtom } from "store/page";
import SideBarChart from "components/common/SideBarChart/SideBarChart";

interface Props {}

const Index = (props: Props) => {
  const [menu, selectMenu] = useRecoilState(menuAtom);

  return (
    <NavigationList className="absolute pt-4 w-48">
      <SideBarChart />
      <ul>
        <li onClick={() => selectMenu("calculator")}>
          <NavigationItem text="배당금 계산기" target="/calculator" Icon={CalculatorIcon} />
        </li>
        <li onClick={() => selectMenu("calendar")}>
          <NavigationItem text="배당금 캘린더" target="/calendar" Icon={CalendarIcon} />
        </li>
        <li onClick={() => selectMenu("information")}>
          <NavigationItem text="배당종목 정보" target="/information" Icon={ClipboardListIcon} />
        </li>
        <li onClick={() => selectMenu("discussion")}>
          <NavigationItem text="토론 게시판" target="/discussion" Icon={ChatAltIcon} />
        </li>
      </ul>
    </NavigationList>
  );
};

const NavigationList = styled.aside`
  height: calc(100vh - 56px - 80px);
`;

export default Index;
