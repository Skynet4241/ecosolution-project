import styled from "styled-components";
import EnergyImg from "../../../../assets/images/energy.png";

export const ServiceSectionEnergySources = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 16px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    margin-top: 96px;
  }
`;

export const ServiceSectionCardWrap = styled.div`
  width: 320px;
  height: 320px;
  padding: 52px 18px;
  background-color: #eaedf1;
  box-sizing: border-box;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 342px;
    height: 342px;
    padding: 51px 29px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 526px;
    height: 526px;
  }
  @media screen and (min-width: calc(1440px - 0.02px)) {
    width: 596px;
    height: 596px;
    padding: 48px;
  }
`;

export const OpenCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 24px;
  }
`;

export const OpenCardInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OpenCardInfoTitle = styled.h3`
  color: #173d33;
  font-family: Oswald;
  font-size: 24px;
  line-height: 24px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const OpenCardInfoLink = styled.a`
  display: inline-flex;
  transform: rotate(0deg);
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #97d28b;

  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    background-color: #ee763d;
    & > svg {
      stroke: #fff;
    }
  }
`;

export const OpenCardInfoSVG = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(23, 61, 51, 1);
  fill: transparent;
  transform: rotate(320deg);
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 28px;
    height: 28px;
  }
`;

export const OpenCardInfoImg = styled.img`
  width: 192px;
  height: 132px;
  margin: 0 auto;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 238px;
    height: 168px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
  }
`;

export const OpenCardInfoText = styled.p`
  color: #173d33;
  text-align: center;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ServiceSectionCardTitle = styled.h3`
  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 40px;
    line-height: 40px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const EnergySourcesWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 322px;
  background-image: url(${EnergyImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 340px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 585px;
  }
  @media screen and (min-width: calc(1440px - 0.02px)) {
    width: 685px;
  }
`;

export const EnergySourcesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100px;
  gap: 16px;
`;

export const EnergySourcesListItemBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const EnergySourcesListItemSVG = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #97d28b;
  fill: transparent;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 28px;
    height: 28px;
  }
`;

export const EnergySourcesListButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  color: ${(props) => (props.active ? "#97D28B" : "#173d33")};
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;
  background-color: transparent;

  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 24px;
  }

  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 40px;
  }
`;
