import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

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
    gap: 36px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 100px;
  }
`;

export const CaseSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
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
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 400px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const CaseSectionGreenLine = styled.span`
  display: none;
  @media screen and (min-width: calc(768px - 0.02px)) {
    display: block;
    width: 1px;
    height: 65px;
    background-color: #97d28b;
    margin-right: 5px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    margin-right: 0;
  }
`;
export const CaseSectionCustomElWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (min-width: calc(768px - 0.02px)) {
    flex-grow: 1;
    max-width: 260px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    max-width: 510px;
  }
`;

export const CustomPagination = styled.p`
  color: rgba(23, 61, 51, 0.25);
  font-family: FiraSans-Regular;
  font-size: 28px;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const CustomPaginationSpan = styled.span`
  color: #173d33;
  text-align: justify;
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
    width: 100%;
  }
`;
export const CaseSectionSwiperSlide = styled(SwiperSlide)`
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 100%;
  }
`;

export const SwiperSlideBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SwiperSlideImg = styled.img`
  height: 100%;
  @media screen and (min-width: calc(768px - 0.02px)) {
    height: 220px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    height: 340px;
  }
`;

export const SwiperSlideInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px 12px 12px;
  background-color: #eaedf1;
  gap: 21px;

  @media screen and (min-width: calc(768px - 0.02px)) {
    gap: 16px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 24px;
    padding: 48px;
  }
`;

export const SwiperSlideInfoTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 50px;
  }
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
    width: 200px;
    min-height: 72px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 24px;
    width: 350px;
    min-height: 58px;
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
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  margin: 0 auto;
  background-color: #97d28b;
  margin-bottom: -9px;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    margin-bottom: 0;
  }
`;

export const SwiperSlideTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SwiperSlideText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 14px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 16px;
  }
`;
