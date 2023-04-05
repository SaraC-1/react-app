import { ReactNode } from "react";

type ButtonColorType = "red" | "green" | "yellow";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
  color?: "red" | "green" | "yellow";
};
const Button = ({
  animate,
  value = "Click me",
  icon,
  color = "red",
}: ButtonProps) => {
  return (
    <button className={`btn ${animate ? "btn--animate" : ""}`}>
      {icon}
      {value}
    </button>
  );
};

const ColorSwitcher = (color: ButtonColorType) => {
  switch (color) {
    case "red":
      return "btn--red";
    case "green":
      return "btn--green";
    case "yellow":
      return "btn--yellow";
  }
};

export default Button;
