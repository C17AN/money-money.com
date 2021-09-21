import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const index: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <TransparentButton
      {...props}
      className="transition-shadow hover:shadow-md flex items-center px-3 py-1 rounded-md"
    >
      {children}
    </TransparentButton>
  );
};

const TransparentButton = styled.button``;

export default index;
