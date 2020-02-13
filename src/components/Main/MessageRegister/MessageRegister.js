import React, { useState } from "react";
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

const MessageRegister = () => {
  const [name, setName, validName] = useTextField("");
  const [email, setEmail, validEmail] = useEmailField("");
  const [telehone, setTelephone, validTelephone] = usePhoneInput("");
  const [subject, setSubject, validSubject] = useTextField("");

  const generateSubjectOptions = () =>
    subjects.map((data, i) => (
      <option key={i} value={i}>
        {data}
      </option>
    ));

  return (
    <section className="MessageRegister">
      <form>
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
          value={telehone}
          updateState={setTelephone}
          required
        />
        <SelectComponent value={subject} updateState={setSubject}>
          <option value="" disabled>
            Assunto
          </option>
          {generateSubjectOptions()}
        </SelectComponent>
        <TextAreaComponent />
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default MessageRegister;
