import { Container } from "../../../utils/Container/Container";
import {
  CustomersList,
  CustomersListItem,
  CustomersListItemImg,
  CustomersListItemText,
  CustomersSectionStyled,
  CustomersSectionTitle,
  CustomersSectionWrap,
} from "./CustomersSection.styled";
import Bosh from "../../../assets/images/bosch.png";
import Buh from "../../../assets/images/western-bug.png";
import Audi from "../../../assets/images/audi.png";
import DnimroM from "../../../assets/images/dnipro-m.png";

const CustomersSection = () => {
  return (
    <CustomersSectionStyled>
      <Container>
        <CustomersSectionWrap>
          <CustomersSectionTitle>our satisfied customers</CustomersSectionTitle>
          <div>
            <CustomersList>
              <CustomersListItem>
                <CustomersListItemText>Bosch</CustomersListItemText>
                <CustomersListItemImg src={Bosh} alt="Logo Bosch" />
              </CustomersListItem>
              <CustomersListItem>
                <CustomersListItemText>Zakhidnyi Buh</CustomersListItemText>
                <CustomersListItemImg src={Buh} alt="Logo Zakhidnyi Buh" />
              </CustomersListItem>
              <CustomersListItem>
                <CustomersListItemText>Audi</CustomersListItemText>
                <CustomersListItemImg src={Audi} alt="Logo Audi" />
              </CustomersListItem>
              <CustomersListItem>
                <CustomersListItemText>Dnipro</CustomersListItemText>
                <CustomersListItemImg src={DnimroM} alt="Logo Dnipro" />
              </CustomersListItem>
            </CustomersList>
          </div>
        </CustomersSectionWrap>
      </Container>
    </CustomersSectionStyled>
  );
};

export default CustomersSection;
