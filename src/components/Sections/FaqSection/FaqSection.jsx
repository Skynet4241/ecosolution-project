import { Container } from "../../../utils/Container/Container";
import CustomizedAccordions from "./Accordion/Accordion";
import {
  FaqSectionGreenLine,
  FaqSectionStyled,
  FaqSectionTitle,
  FaqSectionHeader,
  FaqSectionButton,
  FaqSectionButtonSVG,
  FaqSectionFooter,
  FaqSectionFooterTitle,
  FaqSectionWrap,
  FaqSectionFooterTwo,
  FaqSectionContainer,
} from "./FaqSection.styled";
import icons from "../../../assets/icons/icons.svg";

const FaqSection = () => {
  return (
    <FaqSectionStyled>
      <Container>
        <FaqSectionContainer>
          <FaqSectionWrap>
            <FaqSectionHeader>
              <FaqSectionTitle>Frequently Asked Questions</FaqSectionTitle>
              <FaqSectionGreenLine></FaqSectionGreenLine>
            </FaqSectionHeader>
            <FaqSectionFooter>
              <FaqSectionFooterTitle>
                Didn`t find the answer to your question?
              </FaqSectionFooterTitle>
              <FaqSectionButton>
                Contact Us
                <FaqSectionButtonSVG>
                  <use href={icons + "#icon-ellipse"} />
                </FaqSectionButtonSVG>
              </FaqSectionButton>
            </FaqSectionFooter>
          </FaqSectionWrap>
          <CustomizedAccordions />
          <FaqSectionFooterTwo>
            <FaqSectionFooterTitle>
              Didn`t find the answer to your question?
            </FaqSectionFooterTitle>
            <FaqSectionButton>
              Contact Us
              <FaqSectionButtonSVG>
                <use href={icons + "#icon-ellipse"} />
              </FaqSectionButtonSVG>
            </FaqSectionButton>
          </FaqSectionFooterTwo>
        </FaqSectionContainer>
      </Container>
    </FaqSectionStyled>
  );
};

export default FaqSection;
