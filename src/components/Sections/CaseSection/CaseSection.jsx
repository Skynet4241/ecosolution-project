import { Container } from "../../../utils/Container/Container";
import { useState } from "react";
import {
  CaseSectionStyled,
  CaseSectionSwiper,
  CaseSectionCustomElWrap,
  CaseSectionTitle,
  CaseSectionWrap,
  CustomPagination,
  SwiperSlideBlock,
  SwiperSlideInfoBlock,
  SwiperSlideInfoBlockBtn,
  SwiperSlideInfoBlockBtnSVG,
  SwiperSlideInfoBlockTitle,
  SwiperSlideSpan,
  SwiperSlideText,
  SwiperSlideTextBlock,
  SwiperSlideInfoTitleBlock,
} from "./CaseSection.styled";
import icons from "../../../assets/icons/icons.svg";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SlideOne from "../../../assets/images/swiper-slide-1.png";
import CustomButtons from "./CustomButton";

const swiperSourcesData = [
  {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    image: SlideOne,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    image: SlideOne,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    image: SlideOne,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    image: SlideOne,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
];

const CaseSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSwiperUpdate = (swiper) => {
    setTotalSlides(swiper.slides.length);
  };

  return (
    <CaseSectionStyled>
      <Container>
        <CaseSectionWrap>
          <CaseSectionTitle>Successful cases of our company</CaseSectionTitle>
          <CaseSectionCustomElWrap>
            <CustomPagination className="pagination">
              {`${activeSlide + 1}/${totalSlides}`}
            </CustomPagination>
            <CustomButtons />
          </CaseSectionCustomElWrap>
          <CaseSectionSwiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
              renderBullet: function (index, pagination) {
                return `<span class="${pagination}">${index + 1}</span>`;
              },
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={handleSwiperUpdate}
          >
            {swiperSourcesData.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperSlideBlock>
                  <img src={item.image} alt={item.alt} />
                  <SwiperSlideInfoBlock>
                    <SwiperSlideInfoTitleBlock>
                      <SwiperSlideInfoBlockTitle>
                        {item.title}
                      </SwiperSlideInfoBlockTitle>
                      <SwiperSlideInfoBlockBtn>
                        <SwiperSlideInfoBlockBtnSVG>
                          <use href={icons + "#icon-arrow-right"} />
                        </SwiperSlideInfoBlockBtnSVG>
                      </SwiperSlideInfoBlockBtn>
                    </SwiperSlideInfoTitleBlock>
                    <SwiperSlideSpan></SwiperSlideSpan>
                    <SwiperSlideTextBlock>
                      <SwiperSlideText>{item.description}</SwiperSlideText>
                      <SwiperSlideText>{item.date}</SwiperSlideText>
                    </SwiperSlideTextBlock>
                  </SwiperSlideInfoBlock>
                </SwiperSlideBlock>
              </SwiperSlide>
            ))}
          </CaseSectionSwiper>
        </CaseSectionWrap>
      </Container>
    </CaseSectionStyled>
  );
};

export default CaseSection;
