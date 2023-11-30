const validateName = (value) => {
  const allowedSymbols = /^[a-zA-ZА-Яа-я0-9 !@#*+=$%^&_-~?]+$/;

  if (!allowedSymbols.test(value)) {
    return "Contains unauthorized characters";
  }
  return true;
};

const validateEmail = (value) => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Must not have spaces";
  }

  const allowedSymbols = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!allowedSymbols.test(value)) {
    return "Incorrect e-mail format";
  }
};

const validatePhoneNumber = (value) => {
  const phoneNumberWithoutSpaces = value.replace(/\s/g, "");

  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Must not have spaces";
  }
  const allowedSymbols = /^[\d\-\+]+$/;
  if (!allowedSymbols.test(phoneNumberWithoutSpaces)) {
    return "Invalid phone number format";
  }

  const minLength = 5;
  const maxLength = 15;
  if (
    phoneNumberWithoutSpaces.length < minLength ||
    phoneNumberWithoutSpaces.length > maxLength
  ) {
    return `Phone number must be between ${minLength} and ${maxLength} characters`;
  }

  return true;
};

export const validationRules = {
  fullName: {
    required: "Full Name is required",
    minLength: {
      value: 4,
      message: "Minimum length is 4",
    },
    maxLength: {
      value: 20,
      message: "Max length is 20",
    },
    validate: { validateName },
  },
  email: {
    required: "E-mail is required",
    minLength: {
      value: 6,
      message: "Minimum length is 6",
    },
    maxLength: {
      value: 320,
      message: "Max length is 320",
    },
    validate: { validateEmail },
  },
  phone: {
    required: "Phone is required",
    minLength: {
      value: 4,
      message: "Minimum length is 4",
    },
    maxLength: {
      value: 12,
      message: "Max length is 12",
    },
    validate: { validatePhoneNumber },
  },
};
