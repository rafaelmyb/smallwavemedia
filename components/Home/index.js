import Image from "next/image";

import logoImg from "../../public/images/logo.png";
import smallwaveImg from '../../public/images/Small Wave.svg';

import { Section, Container, Header, TextContent } from "./styles";

export function Home() {
  return (
    <Section>
      <video src="/videos/hero.mp4" autoPlay loop muted></video>

      <Container>
        <Header>
          <span><Image src={logoImg} alt="Logo Small Wave" /></span>
          <Image src={smallwaveImg} alt="Small Wave" />
        </Header>
        <TextContent>
          <h1>
            O gerenciamento de mídia <span>completo</span> que a sua marca <span>precisa</span> para
            decolar.
          </h1>
          <p>Propagando ondas por onde servimos</p>
        </TextContent>
      </Container>
    </Section>
  );
}
