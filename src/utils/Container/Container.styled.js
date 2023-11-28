import styled from "styled-components";

export const ContainerWrap = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  height: auto;

  @media screen and (min-width: calc(768px - 0.02px)) {
    padding: 0 30px;
  }

  @media screen and (min-width: calc(1280px - 0.02px)) {
    padding: 0 100px;
  }
`;
