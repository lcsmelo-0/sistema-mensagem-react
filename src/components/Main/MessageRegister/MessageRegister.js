import React, { useState, useEffect } from "react";
import {
  useEmailField,
  usePhoneInput,
  useTextField
} from "../../../hooks/FormHooks";
import Input from "../../common/form/Input/Input";
import Button from "@material-ui/core/Button";
import SelectComponent from "../../common/form/SelectComponent/SelectComponent";
import { subjects } from "./subjects-db";
import TextAreaComponent from "../../common/form/TextAreaComponent/TextAreaComponent";
import { useDispatch } from "react-redux";
import { createMessage } from "../../../actions/message";
import { requestRouting } from "../../../actions/routing";

const MessageRegister = () => {
  const dispatch = useDispatch();
  const [name, setName, validName] = useTextField("");
  const [email, setEmail, validEmail] = useEmailField("");
  const [telephone, setTelephone, validTelephone] = usePhoneInput("");
  const [subject, setSubject, validSubject] = useTextField("");
  const [message, setMessage, validMessage] = useTextField("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const generateSubjectOptions = () =>
    subjects.map((data, i) => (
      <option key={i} value={i}>
        {data}
      </option>
    ));

  const handleSubmit = () => {
    if (
      !validName ||
      !validEmail ||
      !validSubject ||
      !validMessage ||
      message >= 500
    ) {
    } else {
      const payload = {
        name: name,
        email: email,
        telephone: telephone,
        subject: subject,
        message: message
      };

      dispatch(createMessage(payload));
      dispatch(requestRouting("/dashboard"));
    }
  };

  useEffect(() => {
    if (validName && validEmail && validMessage && validSubject) {
      setButtonDisabled(false);
    }
  }, [validName, validSubject, validEmail, validMessage]);

  return (
    <section className="MessageRegister">
      <form onSubmit={handleSubmit}>
        <Input label="Nome" value={name} updateState={setName} required />
        <Input
          label="Email"
          value={email}
          updateState={setEmail}
          type="email"
          required
        />
        <Input
          label="Telefone"
          value={telephone}
          updateState={setTelephone}
          required
        />
        <SelectComponent value={subject} updateState={setSubject}>
          <option value="" disabled>
            Assunto
          </option>
          {generateSubjectOptions()}
        </SelectComponent>
        <TextAreaComponent value={message} updateState={setMessage} />
        <Button
          variant="contained"
          color="primary"
          disabled={buttonDisabled}
          onClick={() => handleSubmit()}
        >
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default MessageRegister;
