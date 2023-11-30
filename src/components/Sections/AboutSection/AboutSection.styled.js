import styled from "styled-components";

export const AboutSectionStyled = styled.div`
  padding-bottom: 36px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-bottom: 100px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    padding-bottom: 120px;
  }
`;

export const AboutSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: calc(768px - 0.02px)) {
    gap: 100px;
  }
`;

export const AboutCompanyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row-reverse;
    gap: 0;
    justify-content: space-between;
  }
`;

export const AboutCompanyTitleWrap = styled.div`
  display: flex;
  @media screen and (min-width: calc(768px - 0.02px)) {
    justify-content: flex-end;
  }
`;

export const AboutCompanyTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 320px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 36px;
    line-height: 36px;
    width: 340px;
  }
`;

export const VerticalGreenLine = styled.span`
  display: none;

  @media screen and (min-width: calc(768px - 0.02px)) {
    display: block;
    width: 1px;
    height: auto;
    flex-shrink: 0;
    background-color: #97d28b;
    margin-right: 11px;
    @media screen and (min-width: calc(1280px - 0.02px)) {
      margin-right: 161px;
    }
  }
`;

export const AboutCompanyText = styled.p`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: justify;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: block;
    width: 485px;
    margin-right: 65px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    margin-right: 134px;
  }
`;

export const AboutCompanyTextSpan = styled.span`
  color: #97d28b;
  font-family: FiraSans-Medium;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const CompanyManagementList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 0;
  }
`;

export const CompanyManagementImg = styled.img`
  width: 148px;
  height: 168px;
  object-fit: cover;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 248px;
    height: 268px;
  }
`;

export const CompanyManagementName = styled.h6`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  margin-top: 8px;
  margin-bottom: 2px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    margin-top: 12px;
    margin-bottom: 2px;
  }
`;

export const CompanyManagementPosition = styled.p`
  color: #828382;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const GreenLine = styled.span`
  width: 100px;
  height: 1px;
  flex-shrink: 0;
  background-color: #97d28b;
  margin: -20px 0 -17px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: none;
  }
`;

export const CompanyValuesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;

export const CompanyValuesTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 320px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    margin-right: 82px;
    font-size: 36px;
    line-height: 36px;
    width: 280px;
    @media screen and (min-width: calc(1280px - 0.02px)) {
      margin-right: 254px;
    }
  }
`;

export const CompanyValuesText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: calc(100% / 2);
  }
`;
export const KeyPrinciplesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 48px;
  }
`;

export const KeyPrinciplesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 48px;
  }
`;

export const KeyPrinciplesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaedf1;
  height: 197px;
  padding: 13px 12px;
  box-sizing: border-box;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-top: 12px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    height: 339px;
    padding: 48px 24px;
  }
`;

export const KeyPrinciplesImg = styled.img`
  display: none;

  @media screen and (min-width: calc(768px - 0.02px)) {
    display: block;
    height: 100%;
    max-height: 197px;
    object-fit: cover;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    max-height: 339px;
  }
`;

export const KeyPrinciplesCardBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;
  box-sizing: border-box;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    margin-bottom: 94px;
  }
`;

export const KeyPrinciplesCardSVG = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 24px;
    height: 24px;
  }
`;

export const KeyPrinciplesCardTitle = styled.h5`
  color: #173d33;
  font-family: Oswald;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (min-width: calc(1440px - 0.02px)) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const KeyPrinciplesCardSpan = styled.span`
  width: 124px;
  height: 1px;
  flex-shrink: 0;
  background-color: #97d28b;
  margin-bottom: 12px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    margin-bottom: 24px;
  }
`;

export const KeyPrinciplesCardText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 16px;
  }
`;
