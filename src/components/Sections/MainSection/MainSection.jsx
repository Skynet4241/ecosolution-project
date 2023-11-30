import icons from "../../../assets/icons/icons.svg";
import { Container } from "../../../utils/Container/Container";
import {
  MainSectionAddress,
  MainSectionAddressBlock,
  MainSectionAddressCopyright,
  MainSectionAddressLink,
  MainSectionButton,
  MainSectionButtonSVG,
  MainSectionGreenLine,
  MainSectionStyled,
  MainSectionText,
  MainSectionTextWrap,
  MainSectionTitle,
  MainSectionBlockInfo,
  MainSectionWrap,
  MainSectionImage,
} from "./MainSection.styled";
import SectionImage from "../../../assets/images/hero-img.png";

const MainSection = () => {
  return (
    <MainSectionStyled id="main">
      <Container>
        <MainSectionWrap>
          <MainSectionBlockInfo>
            <MainSectionTitle>RENEWABLE ENERGY For any task</MainSectionTitle>
            <MainSectionTextWrap>
              <MainSectionText>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </MainSectionText>
              <MainSectionButton href="#case">
                Learn more
                <MainSectionButtonSVG>
                  <use href={icons + "#icon-arrow-right"} />
                </MainSectionButtonSVG>
              </MainSectionButton>
            </MainSectionTextWrap>
          </MainSectionBlockInfo>
          <MainSectionGreenLine></MainSectionGreenLine>
          <MainSectionAddressBlock>
            <MainSectionAddress>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </MainSectionAddress>
            <MainSectionAddressLink href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </MainSectionAddressLink>
            <MainSectionAddressCopyright>
              ecosolution © 2023
            </MainSectionAddressCopyright>
          </MainSectionAddressBlock>
          <MainSectionImage src={SectionImage} alt="Wind turbine operation" />
        </MainSectionWrap>
      </Container>
    </MainSectionStyled>
  );
};

export default MainSection;
