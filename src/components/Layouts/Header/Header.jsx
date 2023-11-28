import {
  BurgerMenuButton,
  BurgerMenuSVG,
  ButtonGet,
  ButtonGetSVG,
  HeaderButtonBlock,
  HeaderStyled,
  HeaderWrap,
} from "./Header.styled";
import icons from "../../../assets/icons/icons.svg";
import { Container } from "../../../utils/Container/Container";
import { useState } from "react";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import LogoBlock from "../LogoBlock/LogoBlock";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ButtonMenuHandler = () => setIsMenuOpen((pS) => !pS);

  return (
    <HeaderStyled>
      <Container>
        <HeaderWrap>
          <LogoBlock />
          <HeaderButtonBlock>
            <BurgerMenuButton onClick={ButtonMenuHandler}>
              <BurgerMenuSVG>
                <use href={icons + "#icon-menu"} />
              </BurgerMenuSVG>
            </BurgerMenuButton>
            <ButtonGet>
              Get in touch
              <ButtonGetSVG>
                <use href={icons + "#icon-ellipse"} />
              </ButtonGetSVG>
            </ButtonGet>
          </HeaderButtonBlock>
          {isMenuOpen && <BurgerMenu isOpen={ButtonMenuHandler} />}
        </HeaderWrap>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
