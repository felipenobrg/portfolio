import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CaretLeft, CaretRight, Envelope } from "phosphor-react";
import { useTranslation } from "react-i18next";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormContainer, ErrorMessage, SuccessMessage } from "./styles";

const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(3),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function ContactMe() {
  const [messageSent, setMessageSent] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const sendEmail = async (values: ContactFormInputs) => {
    try {
      const result = await emailjs.send(
        "service_bharj3q",
        "template_bh1tzsm",
        values,
        "QaCdHlqo7_ReUJZ9x"
      );

      console.log(result.text);
      setMessageSent(true);
      reset();

      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ContactFormContainer id="contact">
      <h1 data-aos="fade-right">
        <CaretLeft size={28} color="#5A7FFB" weight="fill" />
        {t("ContactMe.talkToMe")}
        <CaretRight size={28} color="#5A7FFB" weight="fill" />
      </h1>
      <div className="contact">
        <h2>
          {t("ContactMe.contact")} <Envelope size={22} weight="fill" />
        </h2>
      </div>
      <form onSubmit={handleSubmit(sendEmail)} noValidate>
        <input
          type="text"
          className="user_name"
          placeholder={t("ContactMe.name")}
          data-aos="fade-right"
          required
          {...register("name")}
        />
        {errors.name && <ErrorMessage>Nome inválido</ErrorMessage>}
        <input
          type="email"
          className="user_email"
          placeholder="Email"
          data-aos="fade-right"
          required
          {...register("email")}
        />
        {errors.email && <ErrorMessage>Email inválido</ErrorMessage>}
        <textarea
          className="message"
          placeholder={t("ContactMe.message")}
          data-aos="fade-right"
          required
          {...register("message")}
        />
        {errors.name && <ErrorMessage>Mensagem inválido</ErrorMessage>}
        <input
          className="submit-button"
          type="submit"
          value={t("ContactMe.submit")}
          data-aos="fade-right"
          disabled={isSubmitting}
        />
        {messageSent && (
          <SuccessMessage>{t("ContactMe.sucessMessage")}</SuccessMessage>
        )}
      </form>
    </ContactFormContainer>
  );
}
