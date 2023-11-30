import styled from "styled-components";

export const ServiceSectionStyled = styled.div`
  padding-top: 36px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-top: 100px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    padding-top: 120px;
  }
`;

export const ServiceSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 16px;
  }
`;

export const ServiceSectionTitle = styled.h2`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 286px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 36px;
    line-height: 36px;
    width: 368px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 48px;
    line-height: 48px;
    width: 491px;
  }
`;

export const ServiceSectionVerticalLine = styled.span`
  width: 1px;
  height: 48px;
  flex-shrink: 0;
  background-color: #97d28b;
  @media screen and (min-width: calc(768px - 0.02px)) {
    height: 87px;
  }
`;

export const ElectricCounterBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    gap: 24px;
  }
`;

export const ElectricCounter = styled.h3`
  color: #97d28b;
  text-align: center;
  font-family: Oswald-Bold;
  font-size: 48px;
  line-height: 48px;
  text-transform: uppercase;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 100px;
    line-height: 100px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const ElectricCounterText = styled.p`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  line-height: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 28px;
    line-height: 48px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ServiceSectionSubTitle = styled.h2`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 145px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 36px;
    line-height: 36px;
    width: 186px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 48px;
    line-height: 48px;
    width: 248px;
  }
`;
