import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CaseSectionStyled = styled.div`
  padding-bottom: 36px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-bottom: 100px;
  }
`;

export const CaseSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const CaseSectionTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 264px;
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const CaseSectionCustomElWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const CustomPagination = styled.p`
  color: rgba(23, 61, 51, 0.25);
  font-family: FiraSans-Regular;
  font-size: 28px;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const CustomButtonWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const CustomButton = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #173d33;
  background-color: transparent;
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const CustomButtonSVGLeft = styled.svg`
  width: 36px;
  height: 36px;
  transform: rotate(180deg);
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const CustomButtonSVGRight = styled.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const CaseSectionSwiper = styled(Swiper)`
  width: 320px;
  @media screen and (min-width: calc(768px - 0.02px)) {
  }
`;

export const SwiperSlideBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SwiperSlideInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 12px 12px;
  background-color: #eaedf1;
  gap: 21px;
`;
export const SwiperSlideInfoTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SwiperSlideInfoBlockTitle = styled.h5`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.8px;
  width: 175px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 20px;
  }
`;

export const SwiperSlideInfoBlockBtn = styled.button`
  display: inline-flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: #97d28b;
  width: 60px;
  height: 60px;
`;

export const SwiperSlideInfoBlockBtnSVG = styled.svg`
  width: 28px;
  height: 28px;
  transform: rotate(320deg);
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
`;

export const SwiperSlideSpan = styled.span`
  width: 296px;
  height: 1px;
  flex-shrink: 0;
  margin: 0 auto;
  background-color: #97d28b;
`;

export const SwiperSlideTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -9px;
`;

export const SwiperSlideText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;
`;