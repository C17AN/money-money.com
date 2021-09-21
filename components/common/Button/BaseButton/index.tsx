import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const index: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <BaseButton {...props}>{text}</BaseButton>;
};

const BaseButton = styled.button`
  padding: 10px 18px;
  margin: 0rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 12px;
  border: 1px solid #cdcdcd;
  flex: 1;
`;

export default index;
