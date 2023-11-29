import styled from "styled-components";

export const AboutSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-bottom: 36px;
`;

export const AboutCompanyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AboutCompanyTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
`;

export const AboutCompanyText = styled.p`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: justify;
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
`;

export const CompanyManagementImg = styled.img`
  width: 148px;
  height: 168px;
  object-fit: cover;
`;

export const CompanyManagementName = styled.h6`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  margin-top: 8px;
  margin-bottom: 2px;
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
`;

export const CompanyValuesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CompanyValuesTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
`;

export const CompanyValuesText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const KeyPrinciplesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

export const KeyPrinciplesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaedf1;
  height: 197px;
  padding: 13px 12px;
`;

export const KeyPrinciplesCardBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;
`;

export const KeyPrinciplesCardSVG = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
`;

export const KeyPrinciplesCardTitle = styled.h5`
  color: #173d33;
  font-family: Oswald;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const KeyPrinciplesCardSpan = styled.span`
  width: 124px;
  height: 1px;
  flex-shrink: 0;
  background-color: #97d28b;
  margin-bottom: 12px;
`;

export const KeyPrinciplesCardText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;
`;
