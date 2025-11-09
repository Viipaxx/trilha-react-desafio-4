import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disable, onClick }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disable}>{title}</ButtonContainer>
  )
};

export default Button;
