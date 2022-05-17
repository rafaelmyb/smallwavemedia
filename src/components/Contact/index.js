import { useState } from "react";

import { motion } from "framer-motion";

import Button from "../Button";
import Input from "../Input";
import formatPhone from "../../utils/formatPhone";
import { sendContactMail } from "../../services/sendEmail";

import instagramImg from "../../../public/images/instagram.svg";
import facebookImg from "../../../public/images/fb.svg";
import whatsappImg from "../../../public/images/wpp.svg";

import {
  Section,
  Container,
  FormContainer,
  AddressContainer,
  CardContainer,
  Card,
  ButtonContainer,
  SubmitMessage,
} from "./styles";
import { revealFromBottom, revealFromLeft, revealFromRight } from "../Animation";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageSent, setMessageSent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const content = `
    Nome: ${name},
    E-mail: ${email},
    Telefone: ${phone}
  `;

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await sendContactMail(name, email, content);

      setMessageSent("success");
      setName("");
      setEmail("");
      setPhone("");
      setTimeout(() => {
        setMessageSent("");
      }, 5000);
    } catch {
      setMessageSent("fail");

      setName("");
      setEmail("");
      setPhone("");
      setTimeout(() => {
        setMessageSent("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Section>
      <Container>
        <motion.h1
          variants={revealFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Quer falar conosco? <br /> Nós entramos em contato.
        </motion.h1>

        <FormContainer
          onSubmit={handleSubmit}
          variants={revealFromBottom}
          >
          <Input
            type="text"
            placeholder="Nome completo"
            width="320px"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            width="320px"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Telefone"
            width="170px"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="15"
            required
          />
          <ButtonContainer>
            <Button type="submit" disabled={isLoading}>
              Enviar
            </Button>
            {messageSent === "success" && (
              <SubmitMessage success>
                Contato recebido! Deixe conosco agora.
              </SubmitMessage>
            )}
            {messageSent === "fail" && (
              <SubmitMessage fail>
                Algo de errado aconteceu! Tente novamente.
              </SubmitMessage>
            )}
          </ButtonContainer>
        </FormContainer>

        <AddressContainer>
          <motion.h1
            variants={revealFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >Ou nos encontre por aqui</motion.h1>

          <CardContainer variants={revealFromBottom}>
            <Card>
              <a href="http://maps.google.com/?q=Tv. Petrônio Barcelos, nº 3532, Bairro Liberdade, CEP 76.803-863">
                Tv. Petrônio Barcelos, nº 3532, B. Liberdade – CEP 76.803-863
              </a>
            </Card>
            <Card>
              <a href="mailto:danielgomes@smallwave.com.br">
                danielgomes
                <wbr />
                @smallwave
                <wbr />
                .com.br
              </a>
              <hr />
              <a href="tel:+5569981011201">(69) 9 8101-1201</a>
            </Card>
            <Card>
              <a href="https://www.instagram.com/smallwave.ro/">
                <img src={instagramImg.src} alt="Instagram" loading="lazy" />
              </a>
              <a href="https://www.facebook.com/Small-Wave-M%C3%ADdia-103819535104102">
                <img src={facebookImg.src} alt="Facebook" loading="lazy" />
              </a>
              <a href="https://wa.me/5569981011201">
                <img src={whatsappImg.src} alt="Whatsapp" loading="lazy" />
              </a>
            </Card>
          </CardContainer>
        </AddressContainer>
      </Container>
    </Section>
  );
}
