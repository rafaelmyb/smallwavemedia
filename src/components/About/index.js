import { motion } from "framer-motion";

import { revealFromBottom, revealFromLeft } from "../Animation";

import { Section, Container, TextContent } from "./styles";

export default function About() {
  return (
    <Section>
      <Container>
        <TextContent>
          <motion.h1
            variants={revealFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            O que é a Small Wave?
          </motion.h1>
          <motion.div
            variants={revealFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>Somos uma equipe forjada em meio a crise.</p>
            <p>
              Criamos soluções para empresas e igrejas para se comunicarem da
              forma simples, ágil e tecnológica com o seu público, seja por
              fotos, banners, textos, site personalizado ou lives.
            </p>
            <p>
              Nos dedicamos em fazer o seu produto conhecido pelo público, com a
              criação e gestão da sua identidade e conteúdo, além de lhe
              inserirmos na web com nossas ferramentas.
            </p>
          </motion.div>
        </TextContent>
      </Container>
    </Section>
  );
}
