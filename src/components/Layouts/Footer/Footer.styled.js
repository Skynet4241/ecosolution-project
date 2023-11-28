import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 24px 0 51px;
  border-top: 1px solid #97d28b;
`;
export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterLogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 129px;
  }
`;

export const FooterArrowButton = styled.button`
  display: inline-flex;
  transform: rotate(-90deg);
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #97d28b;
  height: 32px;
  width: 32px;
  transition: all 0.2s ease-in;
  z-index: -1;
  &:hover,
  &:focus {
    background-color: #ee763d;
    & > svg {
      stroke: #fff;
    }
  }
`;

export const FooterArrowButtonSVG = styled.svg`
  stroke: rgba(23, 61, 51, 1);
  fill: transparent;
  width: 16px;
  height: 16px;
`;
export const FooterSocialLinkSVG = styled.svg`
  fill: rgba(23, 61, 51, 1);
  stroke: rgba(23, 61, 51, 1);
  width: 24px;
  height: 24px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    stroke: #97d28b;
    fill: #97d28b;
  }
`;

export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  width: 100%;
  order: 2;
  li:last-child ${FooterSocialLinkSVG} {
    fill: transparent;
  }

  @media screen and (min-width: calc(768px - 0.02px)) {
    justify-content: flex-start;
    order: 0;
    width: 162px;
    margin-top: 0;
  }
`;

export const FooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterInfoText = styled.p`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const FooterInfoLink = styled.a`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    color: #97d28b;
  }
`;
