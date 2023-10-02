import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormContainer } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { t } from "i18next";

export const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_bharj3q",
          "template_bh1tzsm",
          form.current,
          "QaCdHlqo7_ReUJZ9x"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <ContactFormContainer id="contact">
        <h1>
          <CaretLeft size={28} color="#5A7FFB" weight="fill" />
          {t("ContactMe.TalkToMe")}
          <CaretRight size={28} color="#5A7FFB" weight="fill" />
        </h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder={t("ContactMe.Name")}/>
        <input type="email" name="user_email" placeholder="Email"/>
        <textarea name="message" placeholder={t("ContactMe.Message")} />
        <input className="submit-button" type="submit" value={t("ContactMe.Submit")} />
      </form>
    </ContactFormContainer>
  );
};
