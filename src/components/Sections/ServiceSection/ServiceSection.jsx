import { useEffect, useState } from "react";
import { Container } from "../../../utils/Container/Container";
import {
  ElectricCounter,
  ElectricCounterBlock,
  ElectricCounterText,
  ServiceSectionStyled,
  ServiceSectionSubTitle,
  ServiceSectionTitle,
  ServiceSectionVerticalLine,
  ServiceSectionWrap,
} from "./ServiceSection.styled";
import EnergySources from "./EnergySources";

const ServiceSection = () => {
  const [number, setNumber] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const numberWithDots = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const formattedNumber = numberWithDots(number);

  return (
    <ServiceSectionStyled>
      <Container>
        <ServiceSectionWrap>
          <ServiceSectionTitle>
            Electricity we produced for all time
          </ServiceSectionTitle>
          <ServiceSectionVerticalLine></ServiceSectionVerticalLine>
          <ElectricCounterBlock>
            <ElectricCounter>{formattedNumber}</ElectricCounter>
            <ElectricCounterText>kWh</ElectricCounterText>
          </ElectricCounterBlock>
          <ServiceSectionVerticalLine></ServiceSectionVerticalLine>
          <ServiceSectionSubTitle>
            The services we provide
          </ServiceSectionSubTitle>
          <EnergySources />
        </ServiceSectionWrap>
      </Container>
    </ServiceSectionStyled>
  );
};

export default ServiceSection;
