import { Controller } from "react-hook-form";
import { validationRules } from "../validationRules";
import {
  ErrorMessage,
  FormFieldWrap,
  FormInput,
  FormInputLabel,
} from "./FieldText.styled";

const getRules = (id) => {
  switch (id) {
    case "fullName":
      return validationRules.fullName;
    case "email":
      return validationRules.email;
    case "phone":
      return validationRules.phone;
    case "message":
      return validationRules.message;
    default:
      return {};
  }
};
const FieldText = ({ title, id, control, errors, placeholder }) => {
  const rules = getRules(id);

  return (
    <FormFieldWrap>
      <FormInputLabel>{title}</FormInputLabel>
      <Controller
        control={control}
        name={id}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <FormInput
            errors={errors ? "true" : "false"}
            type="text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </FormFieldWrap>
  );
};

export default FieldText;
