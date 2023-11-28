import {
  HeaderStyled,
  Logo,
  LogoBlock,
  LogoText,
  Slogan,
  SloganSpan,
} from "./Header.styled";
import icons from "../../assets/icons/icons.svg";
import { Container } from "../../utils/Container/Container";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <LogoBlock>
          <Logo>
            <use href={icons + "#icon-logo"} />
          </Logo>
          <LogoText>ecosolution</LogoText>
          <Slogan>
            <SloganSpan>green</SloganSpan>ergy for life
          </Slogan>
        </LogoBlock>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
