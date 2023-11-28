import {
  Logo,
  LogoBlockStyled,
  LogoText,
  Slogan,
  SloganSpan,
} from "./LogoBlock.styled";
import icons from "../../../assets/icons/icons.svg";

const LogoBlock = () => {
  return (
    <LogoBlockStyled>
      <Logo>
        <use href={icons + "#icon-logo"} />
      </Logo>
      <LogoText>ecosolution</LogoText>
      <Slogan>
        <SloganSpan>green</SloganSpan>ergy for life
      </Slogan>
    </LogoBlockStyled>
  );
};

export default LogoBlock;
