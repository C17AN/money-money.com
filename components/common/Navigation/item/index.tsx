import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { menuAtom } from "store/page";
import { Router, useRouter } from "next/dist/client/router";

interface Props {
  text: string;
  target: string;
  Icon?: any;
}

const Index = ({ text, target, Icon }: Props) => {
  const [selectedMenu, _] = useRecoilState(menuAtom);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    selectedMenu === target.slice(1) ? setIsSelected(true) : setIsSelected(false);
  }, [selectedMenu]);

  return (
    <Link href={target} passHref={true}>
      <NavigationItem className="transition-colors" isSelected={isSelected}>
        <Icon className="h-5 mr-3" />
        <p>{text}</p>
      </NavigationItem>
    </Link>
  );
};

const NavigationItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding-left: 36px;
  padding: 10px;
  margin: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) => (props.isSelected ? "#accbf1d6" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.isSelected ? "white" : "rgba(147,197,253)")};
  }
`;

export default Index;
