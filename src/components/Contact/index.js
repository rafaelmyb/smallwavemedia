import { useState } from 'react';

import Button from "../Button";
import Input from "../Input";
import formatPhone from '../../utils/formatPhone';
import { sendContactMail } from '../../services/sendEmail';

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
} from "./styles";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const content = `
    Nome: ${name},
    E-mail: ${email},
    Telefone: ${phone}
  `;

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await sendContactMail(name, email, content);

      // setMessageSent("success");
      console.log('sucess');
      setName("");
      setEmail("");
      setPhone("");
      // setTimeout(() => {
      //   setMessageSent("");
      // }, 5000);
    } catch {
      // setMessageSent("fail");

      setName("");
      setEmail("");
      setPhone("");
      // setTimeout(() => {
      //   setMessageSent("");
      // }, 5000);
      console.log('error')
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Section>
      <Container>
        <h1>
          Quer falar conosco? <br /> Nós entramos em contato.
        </h1>

        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome Completo"
            width="320px"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            width="320px"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Telefone"
            width="170px"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="15"
          />
          <Button type='submit'>Enviar</Button>
        </FormContainer>

        <AddressContainer>
          <h1>Ou nos encontre por aqui</h1>

          <CardContainer>
            <Card>
              <a href="http://maps.google.com/?q=Tv. Petrônio Barcelos, nº 3532, Bairro Liberdade, CEP 76.803-863">
                Tv. Petrônio Barcelos, nº 3532, B. Liberdade – CEP 76.803-863
              </a>
            </Card>
            <Card>
              <a href="mailto:danielgomes@smallwave.com.br">
                danielgomes@smallwave.com.br
              </a>
              <hr />
              <a href="tel:+5569981011201">(69) 9 8101-1201</a>
            </Card>
            <Card>
              <a href="https://www.instagram.com/smallwave.ro/">
                <img src={instagramImg.src} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/Small-Wave-M%C3%ADdia-103819535104102">
                <img src={facebookImg.src} alt="Facebook" />
              </a>
              <a href="https://wa.me/5569981011201">
                <img src={whatsappImg.src} alt="Whatsapp" />
              </a>
            </Card>
          </CardContainer>
        </AddressContainer>
      </Container>
    </Section>
  );
}
