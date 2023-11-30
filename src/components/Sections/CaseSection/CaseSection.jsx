import { Container } from "../../../utils/Container/Container";
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
  CaseSectionHeader,
  CaseSectionGreenLine,
  SwiperSlideImg,
  CaseSectionSwiperSlide,
} from "./CaseSection.styled";
import icons from "../../../assets/icons/icons.svg";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomButtons from "./CustomButton";
import { useMediaQuery } from "react-responsive";
import SlideOne from "../../../assets/images/swiper-slide-1.png";
import SlideTwo from "../../../assets/images/swiper-slide-2.png";

const swiperSourcesData = [
  {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    image: SlideOne,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    title: "Zhytomyr city Private Enterprise “Bosch”",
    image: SlideTwo,
    alt: "Beautiful view wind turbines grass covered field captured holland",
    description: "Solar Panels for industrial use",
    date: "November 2023",
  },
  {
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    image: SlideOne,
    alt: "Panoramic view of the field where the solar panels are located",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    title: "Zhytomyr city Private Enterprise “Bosch”",
    image: SlideTwo,
    alt: "Beautiful view wind turbines grass covered field captured holland",
    description: "Solar Panels for industrial use",
    date: "November 2023",
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
  const isMobile = useMediaQuery({
    query: "(max-width: calc(768px - 0.02px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: calc(1280px - 0.02px) ",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: calc(1280px - 0.02px)",
  });

  let slidesPerView;

  switch (true) {
    case isMobile:
      slidesPerView = 1;
      break;
    case isTablet:
      slidesPerView = 2;
      break;
    case isDesktop:
      slidesPerView = 2.2;
      break;
    default:
      slidesPerView = 1;
  }

  return (
    <CaseSectionStyled id="case">
      <Container>
        <CaseSectionWrap>
          <CaseSectionHeader>
            <CaseSectionTitle>Successful cases of our company</CaseSectionTitle>
            <CaseSectionGreenLine></CaseSectionGreenLine>
            <CaseSectionCustomElWrap>
              <CustomPagination className="swiper-pagination"></CustomPagination>
              <CustomButtons />
            </CaseSectionCustomElWrap>
          </CaseSectionHeader>
          <CaseSectionSwiper
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction",
              clickable: true,
              renderFraction: function (currentClass, totalClass) {
                return (
                  '<span class="' +
                  currentClass +
                  '"></span>' +
                  " <span class='span-between'>/</span> " +
                  '<span class="' +
                  totalClass +
                  '"></span>'
                );
              },
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={slidesPerView}
          >
            {swiperSourcesData.map((item, index) => (
              <CaseSectionSwiperSlide key={index}>
                <SwiperSlideBlock>
                  <SwiperSlideImg src={item.image} alt={item.alt} />
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
              </CaseSectionSwiperSlide>
            ))}
          </CaseSectionSwiper>
        </CaseSectionWrap>
      </Container>
    </CaseSectionStyled>
  );
};

export default CaseSection;
