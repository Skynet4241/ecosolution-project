import styled from "styled-components";

export const ContactUsSectionStyled = styled.div`
  padding: 36px 0;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding: 100px 0;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    padding: 120px 0;
  }
`;

export const ContactUsSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactUsSectionTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 120px;
  }
`;

export const ContactUsPhoneBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactUsBlockTitle = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 8px;
`;

export const ContactUsPhoneBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactUsBlockLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    color: #97d28b;
    & > svg {
      stroke: #97d28b;
    }
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 24px;
  }
`;

export const ContactUsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 244px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 475px;
  }
`;

export const ContactUsBlockSVG = styled.svg`
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  width: 100%;
  max-width: 24px;
  height: 24px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    stroke: #97d28b;
  }
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const ContactUsBlockSocSVG = styled.svg`
  fill: rgba(23, 61, 51, 1);
  stroke: rgba(23, 61, 51, 1);
  width: 24px;
  height: 24px;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    stroke: #97d28b;
    fill: transparent;
  }
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const ContactUsBlockList = styled.ul`
  display: flex;
  gap: 8px;
  li:last-child ${ContactUsBlockSocSVG} {
    fill: transparent;
  }
`;

export const ContactUsBlockSocLink = styled.a`
  display: block;
  padding: 12px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding: 0;
  }
`;
