import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormContainer, SuccessMessage } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useTranslation } from "react-i18next";

export function ContactMe(){
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

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
            setMessageSent(true);
            setTimeout(() => {
              setMessageSent(false);
            }, 3000); 
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <ContactFormContainer id="contact">
      <h1 data-aos="fade-right">
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        {t("ContactMe.talkToMe")}
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
      {messageSent ? (
        <SuccessMessage>{t("ContactMe.sucessMessage")}</SuccessMessage>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder={t("ContactMe.name")}
            data-aos="fade-right"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            data-aos="fade-right"
            required
          />
          <textarea
            name="message"
            placeholder={t("ContactMe.message")}
            data-aos="fade-right"
            required
          />
          <input
            className="submit-button"
            type="submit"
            value={t("ContactMe.submit")}
            data-aos="fade-right"
          />
        </form>
      )}
    </ContactFormContainer>
  );
}
