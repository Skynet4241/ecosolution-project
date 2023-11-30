import styled from "styled-components";

export const BlurBackground = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2px);
  z-index: ${(props) => (props.isOpen ? 2 : -1)};
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  width: 320px;
  height: 568px;
  flex-shrink: 0;
  padding: 24px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  position: fixed;
  top: 36px;
  right: 50%;
  transform: translateX(50%);
  z-index: 10;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 365px;
    height: 90%;
    top: 30px;
    right: 30px;
    transform: none;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    right: 100px;
  }
`;

export const ButtonClose = styled.button`
  display: inline-flex;
  background: transparent;
  color: #fff;
  margin-bottom: 6px;
  font-family: FiraSans-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    color: #ee763d;
    & > svg {
      stroke: #ee763d;
    }
  }
`;

export const ButtonCloseSVG = styled.svg`
  stroke: #fff;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease-in;
`;

export const WhiteLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background-color: #fff;
`;

export const MenuNav = styled.nav`
  margin-top: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #fff;
  font-family: FiraSans-Regular;
  font-size: 24px;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    color: #97d28b;
    & > svg {
      stroke: #97d28b;
    }
  }
`;

export const NavLinkSVG = styled.svg`
  stroke: #fff;
  fill: transparent;
  transform: rotate(320deg);
  width: 16px;
  height: 16px;
  transition: all 0.2s ease-in;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const SocialLinkSVG = styled.svg`
  fill: transparent;
  stroke: #fff;
  width: 24px;
  height: 24px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    stroke: #97d28b;
  }
`;
