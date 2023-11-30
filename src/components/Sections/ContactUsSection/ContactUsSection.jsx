import { Container } from "../../../utils/Container/Container";
import {
  ContactUsBlock,
  ContactUsBlockLink,
  ContactUsBlockList,
  ContactUsBlockSVG,
  ContactUsBlockSocLink,
  ContactUsBlockSocSVG,
  ContactUsBlockTitle,
  ContactUsPhoneBlock,
  ContactUsPhoneBlockList,
  ContactUsSectionStyled,
  ContactUsSectionTitle,
  ContactUsSectionWrap,
} from "./ContactUsSection.styled";
import icons from "../../../assets/icons/icons.svg";
import ContactUsForm from "./ContactUsForm/ContactUsForm";

const ContactUsSection = () => {
  return (
    <ContactUsSectionStyled id="contact">
      <Container>
        <ContactUsSectionTitle>Contact us</ContactUsSectionTitle>
        <ContactUsSectionWrap>
          <ContactUsBlock>
            <ContactUsPhoneBlock>
              <ContactUsBlockTitle>Phone:</ContactUsBlockTitle>
              <ContactUsPhoneBlockList>
                <li>
                  <ContactUsBlockLink href="tel:+380981234567">
                    <ContactUsBlockSVG>
                      <use href={icons + "#icon-call"} />
                    </ContactUsBlockSVG>
                    38 (098) 12 34 567
                  </ContactUsBlockLink>
                </li>
                <li>
                  <ContactUsBlockLink href="tel:+380931234567">
                    <ContactUsBlockSVG>
                      <use href={icons + "#icon-call"} />
                    </ContactUsBlockSVG>
                    38 (093) 12 34 567
                  </ContactUsBlockLink>
                </li>
              </ContactUsPhoneBlockList>
            </ContactUsPhoneBlock>
            <div>
              <ContactUsBlockTitle>E-mail:</ContactUsBlockTitle>
              <ContactUsBlockLink href="mailto:office@ecosolution.com">
                <ContactUsBlockSVG>
                  <use href={icons + "#icon-sms"} />
                </ContactUsBlockSVG>
                office@ecosolution.com
              </ContactUsBlockLink>
            </div>
            <div>
              <ContactUsBlockTitle>Address:</ContactUsBlockTitle>
              <ContactUsBlockLink
                href="https://maps.app.goo.gl/rHGepHx6RRz6Mmw97"
                target="_blank"
                rel="noreferrer"
              >
                <ContactUsBlockSVG>
                  <use href={icons + "#icon-map"} />
                </ContactUsBlockSVG>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactUsBlockLink>
            </div>
            <div>
              <ContactUsBlockTitle>Social Networks:</ContactUsBlockTitle>
              <div>
                <ContactUsBlockList>
                  <li>
                    <ContactUsBlockSocLink href="">
                      <ContactUsBlockSocSVG>
                        <use href={icons + "#icon-facebook"} />
                      </ContactUsBlockSocSVG>
                    </ContactUsBlockSocLink>
                  </li>
                  <li>
                    <ContactUsBlockSocLink href="">
                      <ContactUsBlockSocSVG>
                        <use href={icons + "#icon-instagram"} />
                      </ContactUsBlockSocSVG>
                    </ContactUsBlockSocLink>
                  </li>
                </ContactUsBlockList>
              </div>
            </div>
          </ContactUsBlock>
          <ContactUsForm />
        </ContactUsSectionWrap>
      </Container>
    </ContactUsSectionStyled>
  );
};

export default ContactUsSection;
