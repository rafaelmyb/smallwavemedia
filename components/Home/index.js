import Image from "next/image";

import smallWaveImg from "../../public/images/Small Wave Image.png";

import { Section, Container, Header, TextContent } from "./styles";

export function Home() {
  return (
    <Section>
      <video src="/videos/hero.mp4" autoPlay loop muted></video>

      <Container>
        <Header>
          <Image src={smallWaveImg} alt="Logo Small Wave" />
        </Header>
        <TextContent>
          <h1>
            O gerenciamento de mídia completo que a sua marca precisa para
            decolar.
          </h1>
          <p>Propagando ondas por onde servimos</p>
{/* 
          <button>CONTRATAR</button> */}
        </TextContent>
      </Container>
    </Section>
  );
}
