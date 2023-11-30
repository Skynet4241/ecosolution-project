import styled from "styled-components";

export const FormFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #97d28b;
`;

export const FormInputLabel = styled.label`
  color: #173d33;
  text-align: justify;
  font-family: FiraSans-Regular;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  height: 31px;
  border: none;
  background-color: transparent;
  &::placeholder {
    color: #828382;
    font-family: FiraSans-Regular;
    font-size: 18px;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: FiraSans-Regular;
  font-size: 12px;
`;
