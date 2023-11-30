import { Container } from "../../../utils/Container/Container";
import LogoBlock from "../LogoBlock/LogoBlock";
import {
  FooterArrowLink,
  FooterArrowButtonSVG,
  FooterInfoText,
  FooterInfoBlock,
  FooterLogoWrap,
  FooterSocialLinkSVG,
  FooterSocialList,
  FooterStyled,
  FooterWrap,
  FooterInfoLink,
  FooterButtonWrap,
} from "./Footer.styled";
import icons from "../../../assets/icons/icons.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterWrap>
          <FooterLogoWrap>
            <LogoBlock />
            <FooterSocialList>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FooterSocialLinkSVG>
                    <use href={icons + "#icon-facebook"} />
                  </FooterSocialLinkSVG>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FooterSocialLinkSVG>
                    <use href={icons + "#icon-instagram"} />
                  </FooterSocialLinkSVG>
                </a>
              </li>
            </FooterSocialList>
            <FooterButtonWrap>
              <FooterArrowLink href="#main">
                <FooterArrowButtonSVG>
                  <use href={icons + "#icon-arrow-right"} />
                </FooterArrowButtonSVG>
              </FooterArrowLink>
            </FooterButtonWrap>
          </FooterLogoWrap>
          <FooterInfoBlock>
            <FooterInfoText>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </FooterInfoText>
            <FooterInfoLink href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </FooterInfoLink>
            <FooterInfoText>ecosolution © 2023</FooterInfoText>
          </FooterInfoBlock>
        </FooterWrap>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
