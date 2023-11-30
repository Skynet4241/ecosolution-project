import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 36px 0;
  position: fixed;
  width: 100%;
  background-color: #f3f5fa;
  z-index: 11;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButtonBlock = styled.div`
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: flex;
    gap: 12px;
  }
`;

export const BurgerMenuButton = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  background-color: #dcefd8;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    background-color: #ee763d;
    & > svg {
      stroke: #fff;
    }
  }
`;

export const BurgerMenuSVG = styled.svg`
  stroke: rgba(41, 45, 50, 1);
  width: 16px;
  height: 16px;
`;

export const ButtonGet = styled.a`
  display: none;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 500px;
    background: #97d28b;
    color: #173d33;
    font-size: 16px;
    font-family: FiraSans-Regular;
    line-height: normal;
    letter-spacing: -0.64px;
    transition: all 0.2s ease-in;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #ee763d;
      & > svg {
        fill: #fff;
      }
    }
  }
`;

export const ButtonGetSVG = styled.svg`
  width: 14px;
  height: 14px;
  transition: all 0.2s ease-in;
`;
