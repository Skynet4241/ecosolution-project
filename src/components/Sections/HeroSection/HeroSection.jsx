import icons from "../../../assets/icons/icons.svg";
import { Container } from "../../../utils/Container/Container";
import {
  HeroSectionAddress,
  HeroSectionAddressBlock,
  HeroSectionAddressCopyright,
  HeroSectionAddressLink,
  HeroSectionButton,
  HeroSectionButtonSVG,
  HeroSectionGreenLine,
  HeroSectionStyled,
  HeroSectionText,
  HeroSectionTextWrap,
  HeroSectionTitle,
  HeroSectionBlockInfo,
  HeroSectionWrap,
  HeroSectionImage,
} from "./HeroSection.styled";
import HeroImage from "../../../assets/images/hero-img.png";

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <Container>
        <HeroSectionWrap>
          <HeroSectionBlockInfo>
            <HeroSectionTitle>RENEWABLE ENERGY For any task</HeroSectionTitle>
            <HeroSectionTextWrap>
              <HeroSectionText>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </HeroSectionText>
              <HeroSectionButton>
                Learn more
                <HeroSectionButtonSVG>
                  <use href={icons + "#icon-arrow-right"} />
                </HeroSectionButtonSVG>
              </HeroSectionButton>
            </HeroSectionTextWrap>
          </HeroSectionBlockInfo>
          <HeroSectionGreenLine></HeroSectionGreenLine>
          <HeroSectionAddressBlock>
            <HeroSectionAddress>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </HeroSectionAddress>
            <HeroSectionAddressLink href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </HeroSectionAddressLink>
            <HeroSectionAddressCopyright>
              ecosolution © 2023
            </HeroSectionAddressCopyright>
          </HeroSectionAddressBlock>
          <HeroSectionImage src={HeroImage} alt="" />
        </HeroSectionWrap>
      </Container>
    </HeroSectionStyled>
  );
};

export default HeroSection;
