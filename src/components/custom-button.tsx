import React, { ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";

interface PropSTypes {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

function CustomButton(props: PropSTypes) {
  const {
    onClick,
    variant,
    size = "medium",
    type = "button",
    color = "primary",
    disabled = false,
    children,
  } = props;

  return (
    <MuiButton
      type={type}
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
}

export default CustomButton;
