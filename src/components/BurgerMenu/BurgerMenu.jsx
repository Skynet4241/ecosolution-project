import {
  BlurBackground,
  ButtonClose,
  ButtonCloseSVG,
  MenuNav,
  MenuWrap,
  NavLink,
  NavLinkSVG,
  NavList,
  SocialLinkSVG,
  SocialList,
  WhiteLine,
} from "./BurgerMenu.styled";
import icons from "../../assets/icons/icons.svg";

const BurgerMenu = ({ isOpen }) => {
  return (
    <>
      <BlurBackground isOpen={isOpen} />
      <MenuWrap>
        <div>
          <ButtonClose onClick={isOpen}>
            <ButtonCloseSVG>
              <use href={icons + "#icon-close"} />
            </ButtonCloseSVG>
            close
          </ButtonClose>
          <WhiteLine></WhiteLine>
          <MenuNav>
            <NavList>
              <li>
                <NavLink onClick={isOpen}>
                  Main
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={isOpen}>
                  About
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={isOpen}>
                  Service
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={isOpen}>
                  Cases
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={isOpen}>
                  FAQ
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={isOpen}>
                  Customers
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={isOpen}>
                  Contact Us
                  <NavLinkSVG>
                    <use href={icons + "#icon-arrow-right"} />
                  </NavLinkSVG>
                </NavLink>
              </li>
            </NavList>
          </MenuNav>
        </div>
        <div>
          <SocialList>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialLinkSVG>
                  <use href={icons + "#icon-facebook"} />
                </SocialLinkSVG>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialLinkSVG>
                  <use href={icons + "#icon-instagram"} />
                </SocialLinkSVG>
              </a>
            </li>
          </SocialList>
        </div>
      </MenuWrap>
    </>
  );
};

export default BurgerMenu;
