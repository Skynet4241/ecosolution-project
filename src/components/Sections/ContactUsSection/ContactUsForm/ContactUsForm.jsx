import { useForm, Controller } from "react-hook-form";
import FieldText from "./FieldText/FieldText";
import {
  FormButton,
  FormButtonSVG,
  FormStyled,
  FormSuccessMessage,
  FormTextArea,
  FormTextAreaBlock,
} from "./ContactUsForm.styled";
import icons from "../../../../assets/icons/icons.svg";
import { FormInputLabel } from "./FieldText/FieldText.styled";
import { useState } from "react";

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUsForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const {
    formState: { errors, isValid },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const onSubmit = (values) => {
    console.log(values);
    const { fullName, email, phone, message } = values;
    reset();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FieldText
        title="Full name:"
        id="fullName"
        control={control}
        errors={errors.fullName}
        placeholder={"John Rosie"}
      />

      <FieldText
        title="E-mail:"
        id="email"
        control={control}
        errors={errors.email}
        placeholder={"johnrosie@gmail.com"}
      />

      <FieldText
        title="Phone:"
        id="phone"
        control={control}
        errors={errors.phone}
        placeholder={"380961234567"}
      />
      <FormTextAreaBlock>
        <FormInputLabel htmlFor="message">Message:</FormInputLabel>
        <Controller
          control={control}
          id="message"
          name="message"
          render={({ field }) => (
            <FormTextArea
              {...field}
              id="message"
              cols="300"
              rows="5"
              placeholder={"Your message"}
            />
          )}
        />
      </FormTextAreaBlock>
      <FormButton type="submit" disabled={!isValid}>
        Send
        <FormButtonSVG>
          <use href={icons + "#icon-arrow-right"} />
        </FormButtonSVG>
      </FormButton>
      {isFormSubmitted && (
        <FormSuccessMessage>Form successfully submitted!</FormSuccessMessage>
      )}
    </FormStyled>
  );
};
export default ContactUsForm;
