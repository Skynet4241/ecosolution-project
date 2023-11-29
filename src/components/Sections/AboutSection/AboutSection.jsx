import { Container } from "../../../utils/Container/Container";
import AboutSectionFotoOne from "../../../assets/images/about-section-foto-1.png";
import AboutSectionFotoTwo from "../../../assets/images/about-section-foto-2.png";
import AboutSectionFotoThree from "../../../assets/images/about-section-foto-3.png";
import AboutSectionFotoFour from "../../../assets/images/about-section-foto-4.png";
import {
  AboutCompanyBlock,
  AboutCompanyText,
  AboutCompanyTextSpan,
  AboutCompanyTitle,
  AboutSectionWrap,
  CompanyManagementImg,
  CompanyManagementList,
  CompanyManagementName,
  CompanyManagementPosition,
  CompanyValuesBlock,
  CompanyValuesText,
  CompanyValuesTitle,
  GreenLine,
  KeyPrinciplesBlock,
  KeyPrinciplesCard,
  KeyPrinciplesCardBlock,
  KeyPrinciplesCardSVG,
  KeyPrinciplesCardSpan,
  KeyPrinciplesCardText,
  KeyPrinciplesCardTitle,
} from "./AboutSection.styled";
import icons from "../../../assets/icons/icons.svg";

const AboutSection = () => {
  return (
    <div>
      <Container>
        <AboutSectionWrap>
          <AboutCompanyBlock>
            <AboutCompanyTitle>
              LET’s start with small start with ourselves
            </AboutCompanyTitle>
            <AboutCompanyText>
              <AboutCompanyTextSpan>ECOSOLUTION</AboutCompanyTextSpan> is the
              largest group of companies in Western Ukraine, which is engaged in
              the development and implementation of renewable environmentally
              friendly energy sources. We are the first privately owned company
              that received a loan from the European Bank for Reconstruction and
              Development (EBRD) and built the first wind farm in Western
              Ukraine. During the company`s work, a number of projects in the
              field of energy were implemented. At the same time, new investment
              projects, in particular small hydropower and biofuels, are
              constantly being developed and developed with existing objects.
            </AboutCompanyText>
          </AboutCompanyBlock>
          <div>
            <CompanyManagementList>
              <li>
                <CompanyManagementImg
                  src={AboutSectionFotoOne}
                  alt="CEO company Andrii Duda"
                />
                <CompanyManagementName>Andrii Duda</CompanyManagementName>
                <CompanyManagementPosition>CEO</CompanyManagementPosition>
              </li>
              <li>
                <CompanyManagementImg
                  src={AboutSectionFotoTwo}
                  alt="Technology officer Yurii Turchenko"
                />
                <CompanyManagementName>Yurii Turchenko</CompanyManagementName>
                <CompanyManagementPosition>
                  Technology officer
                </CompanyManagementPosition>
              </li>
              <li>
                <CompanyManagementImg
                  src={AboutSectionFotoThree}
                  alt="Director Vitalii Shevchenko"
                />
                <CompanyManagementName>
                  Vitalii Shevchenko
                </CompanyManagementName>
                <CompanyManagementPosition>Director</CompanyManagementPosition>
              </li>
              <li>
                <CompanyManagementImg
                  src={AboutSectionFotoFour}
                  alt="Senior engineer Victor Dunaev"
                />
                <CompanyManagementName>Victor Dunaev</CompanyManagementName>
                <CompanyManagementPosition>
                  Senior engineer
                </CompanyManagementPosition>
              </li>
            </CompanyManagementList>
          </div>
          <GreenLine></GreenLine>
          <CompanyValuesBlock>
            <CompanyValuesTitle>Main values of our company</CompanyValuesTitle>
            <CompanyValuesText>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world`s energy needs.
            </CompanyValuesText>
          </CompanyValuesBlock>
          <KeyPrinciplesBlock>
            <KeyPrinciplesCard>
              <KeyPrinciplesCardBlock>
                <KeyPrinciplesCardSVG>
                  <use href={icons + "#icon-maximize-circle"} />
                </KeyPrinciplesCardSVG>
                <KeyPrinciplesCardTitle>Openness</KeyPrinciplesCardTitle>
              </KeyPrinciplesCardBlock>
              <KeyPrinciplesCardSpan></KeyPrinciplesCardSpan>
              <KeyPrinciplesCardText>
                to the world, people, new ideas and projects
              </KeyPrinciplesCardText>
            </KeyPrinciplesCard>
            <KeyPrinciplesCard>
              <KeyPrinciplesCardBlock>
                <KeyPrinciplesCardSVG>
                  <use href={icons + "#icon-global-edit"} />
                </KeyPrinciplesCardSVG>
                <KeyPrinciplesCardTitle>Responsibility</KeyPrinciplesCardTitle>
              </KeyPrinciplesCardBlock>
              <KeyPrinciplesCardSpan></KeyPrinciplesCardSpan>
              <KeyPrinciplesCardText>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </KeyPrinciplesCardText>
            </KeyPrinciplesCard>
            <KeyPrinciplesCard>
              <KeyPrinciplesCardBlock>
                <KeyPrinciplesCardSVG>
                  <use href={icons + "#icon-cpu-charge"} />
                </KeyPrinciplesCardSVG>
                <KeyPrinciplesCardTitle>Innovation</KeyPrinciplesCardTitle>
              </KeyPrinciplesCardBlock>
              <KeyPrinciplesCardSpan></KeyPrinciplesCardSpan>
              <KeyPrinciplesCardText>
                we use the latest technology to implement non-standard solutions
              </KeyPrinciplesCardText>
            </KeyPrinciplesCard>
            <KeyPrinciplesCard>
              <KeyPrinciplesCardBlock>
                <KeyPrinciplesCardSVG>
                  <use href={icons + "#icon-ranking"} />
                </KeyPrinciplesCardSVG>
                <KeyPrinciplesCardTitle>Quality</KeyPrinciplesCardTitle>
              </KeyPrinciplesCardBlock>
              <KeyPrinciplesCardSpan></KeyPrinciplesCardSpan>
              <KeyPrinciplesCardText>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </KeyPrinciplesCardText>
            </KeyPrinciplesCard>
          </KeyPrinciplesBlock>
        </AboutSectionWrap>
      </Container>
    </div>
  );
};

export default AboutSection;
