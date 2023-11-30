const validateName = (value) => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Не повинно мати пробілів";
  }
  const allowedSymbols = /^[a-zA-ZА-Яа-я0-9!@#*+=$%^&_-~?]+$/;
  if (!allowedSymbols.test(value)) {
    return "Містить недозволені символи";
  }
  return true;
};

const validateEmail = (value) => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Не повинна мати пробілів";
  }

  const allowedSymbols = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!allowedSymbols.test(value)) {
    return "Невірний формат пошти";
  }
};

const validatePassword = (value) => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return "Не повинен мати пробілів";
  }
  const isContainsSymbol = /[!@#$%^&-*_+=?]+/;
  if (!isContainsSymbol.test(value)) {
    return "Повинен мати хоча б 1 символ";
  }
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    return "Повинен мати хоча б 1 велику літеру";
  }
  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    return "Повинен мати хоча б 1 цифру";
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
    validate: { validateName },
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 4,
      message: "Minimum length is 4",
    },
    maxLength: {
      value: 1000,
      message: "Max length is 1000",
    },
    validate: { validateName },
  },
};
