import styled from "styled-components";

export const CustomersSectionStyled = styled.div`
  padding-bottom: 36px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    padding-bottom: 100px;
  }
`;

export const CustomersSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    gap: 40px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 93px;
  }
`;

export const CustomersSectionTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    font-size: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 400px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const CustomersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media screen and (min-width: calc(768px - 0.02px)) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    gap: 48px;
  }
`;

export const CustomersListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc((100 / 2) - 16px);
  height: 116px;
  flex-grow: 1;
  padding: 16px;
  background-color: #eaedf1;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    background-color: #173d33;
    & > p {
      color: #fff;
    }
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    width: 274px;
    gap: 25px;
    padding: 16px 16px 32px;
  }
`;

export const CustomersListItemText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: all 0.2s ease-in;
  @media screen and (min-width: calc(1280px - 0.02px)) {
    font-size: 20px;
  }
`;

export const CustomersListItemImg = styled.img`
  margin: auto;
  width: 150px;
  height: 100%;
  max-height: 50px;
`;
