import { useState } from "react";

export const useEmailField = initialValue => {
  const emailValidationRegex = /^\S+@\S+\.\S+$/;

  const [email, setEmail] = useState(initialValue);
  const [valid, setValid] = useState(emailValidationRegex.test(initialValue));

  const handleChange = newValue => {
    setEmail(newValue);
    setValid(emailValidationRegex.test(newValue));
  };
  return [email, handleChange, valid];
};

export const usePhoneInput = initialValue => {
  const phoneValidationRegex = /^\(\d{2}\) \d{4,5}-\d{4}/;
  const [phone, setPhone] = useState(initialValue);
  const [valid, setValid] = useState(phoneValidationRegex.test(initialValue));

  const handleChange = value => {
    value = value.replace(/\D/g, "");

    const mask =
      value.length > 6 ? "($1) $2-$3" : value.length > 2 ? "($1) $2" : "$1";
    const groupRegex =
      value.length > 10
        ? /^(\d{1,2})(\d{0,5})(\d{0,4}).*/
        : /^(\d{1,2})(\d{0,4})(\d{0,4}).*/;

    value = value.replace(groupRegex, mask);
    setPhone(value);
    setValid(phoneValidationRegex.test(value));
  };
  return [phone, handleChange, valid];
};

export const useTextField = initialValue => {
  const [text, setText] = useState(initialValue);
  const [valid, setValid] = useState(
    initialValue !== "" && typeof initialValue !== "number"
  );

  const handleChange = newValue => {
    setText(newValue);
    setValid(newValue !== "" && typeof initialValue !== "number");
  };
  return [text, handleChange, valid];
};
