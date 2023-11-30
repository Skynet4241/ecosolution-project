import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  height: 580px;
  background-color: #eaedf1;
  padding: 36px 12px;
  box-sizing: border-box;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: calc(100% / 2);
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    padding: 48px;
    height: 605px;
  }
`;

export const FormTextAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  border-bottom: 1px solid #97d28b;
  gap: 8px;
`;

export const FormTextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border: none;
  background-color: transparent;
  resize: none;
  &::placeholder {
    color: #828382;
    font-family: FiraSans-Regular;
    font-size: 18px;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  border: 1px solid #97d28b;
  margin-left: auto;
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    color: #ee763d;
    border-color: #ee763d;
    & > svg {
      stroke: #fff;
      background: #ee763d;
    }
  }
`;

export const FormButtonSVG = styled.svg`
  width: 16px;
  height: 16px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #97d28b;
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  transition: all 0.2s ease-in;
`;

export const FormSuccessMessage = styled.p`
  color: #97d28b;
  text-align: justify;
  font-family: Oswald;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;
`;
