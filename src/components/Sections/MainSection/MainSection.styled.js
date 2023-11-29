import styled from "styled-components";

export const MainSectionStyled = styled.div`
  padding: 222px 0 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-bottom: 100px;
  }
`;

export const MainSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MainSectionBlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainSectionTitle = styled.h1`
  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  max-width: 520px;

  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 48px;
    line-height: 48px;
    width: 300px;
  }
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 64px;
    line-height: 64px;
    width: 485px;
  }
`;
export const MainSectionTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    justify-content: space-between;
  }
`;

export const MainSectionText = styled.p`
  max-width: 620px;
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 342px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 363px;
  }
`;

export const MainSectionButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 141px;
  height: 39px;
  padding: 4px 4px 4px 15px;
  flex-shrink: 0;
  border-radius: 500px;
  border: 1px solid #97d28b;
  margin: 0 auto;

  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.64px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    margin: 0;
  }
`;

export const MainSectionButtonSVG = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  background: #97d28b;
  stroke: rgba(23, 61, 51, 1);
  fill: transparent;
`;

export const MainSectionGreenLine = styled.span`
  height: 1px;
  flex-shrink: 0;
  background-color: #97d28b;
`;

export const MainSectionAddressBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row;
  }
`;

export const MainSectionAddress = styled.p`
  color: #173d33;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const MainSectionAddressLink = styled.a`
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

export const MainSectionAddressCopyright = styled.p`
  display: none;

  @media screen and (min-width: calc(768px - 0.02px)) {
    display: block;
    color: #173d33;
    font-family: FiraSans-Regular;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`;

export const MainSectionImage = styled.img`
  height: 316px;
  flex-shrink: 0;
  object-fit: cover;

  @media screen and (min-width: calc(768px - 0.02px)) {
    height: 550px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    height: 600px;
  }
`;
