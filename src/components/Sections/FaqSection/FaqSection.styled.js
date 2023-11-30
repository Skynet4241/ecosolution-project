import styled from "styled-components";

export const FaqSectionStyled = styled.div`
  padding-top: 36px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-top: 100px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    padding-top: 120px;
  }
`;

export const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row-reverse;
    gap: 24px;
    height: 660px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 185px;
  }
`;

export const FaqSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: calc(768px - 0.02px)) {
    justify-content: space-between;
    min-width: calc(100% / 2);
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    min-width: calc((100% / 3) + 50px);
  }
`;

export const FaqSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
`;

export const FaqSectionTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 264px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 400px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const FaqSectionGreenLine = styled.span`
  width: 100%;
  height: 1px;
  background-color: #97d28b;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: none;
  }
`;

export const FaqSectionFooter = styled.div`
  display: none;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 36px;
    justify-content: space-between;
  }
`;
export const FaqSectionFooterTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 36px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: none;
  }
`;

export const FaqSectionFooterTitle = styled.h5`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 24px;
  }
`;

export const FaqSectionButton = styled.a`
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
`;

export const FaqSectionButtonSVG = styled.svg`
  width: 14px;
  height: 14px;
  transition: all 0.2s ease-in;
`;
