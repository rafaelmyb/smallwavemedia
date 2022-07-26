import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { revealFromLeft, revealFromRight, revealFromBottom } from "../Animation";

import {
  Section,
  Container,
  HeaderText,
  Content,
  HeaderContainer,
  ServicesContainer,
} from "./styles";

export default function Product({ description }) {
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    if (activeButton === 0) {
      setTimeout(() => {
        setActiveButton(1)
      }, 10000)
    }
    if (activeButton === 1) {
      setTimeout(() => {
        setActiveButton(2)
      }, 10000)
    }
    if (activeButton === 2) {
      setTimeout(() => {
        setActiveButton(0)
      }, 10000)
    }    
  }, [activeButton])

  return (
    <Section>
      <Container>
        <HeaderText>
          <motion.h1
            variants={revealFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >Como a Small Wave pode te servir</motion.h1>
          <motion.p
            variants={revealFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
            <span>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </span>
          </motion.p>
        </HeaderText>

        <Content variants={revealFromBottom}>
          <HeaderContainer>
            <button
              style={
                activeButton === 0
                  ? {
                      border: "1px solid #e1e1e6",
                      borderBottom: "1px solid #0f0f10",
                      background: "#0f0f10",
                    }
                  : { border: "none" }
              }
              onClick={() => setActiveButton(0)}
            >
              Gestão da identidade do produto
            </button>
            <button
              style={
                activeButton === 1
                  ? {
                      border: "1px solid #e1e1e6",
                      borderBottom: "1px solid #0f0f10",
                      background: "#0f0f10",
                    }
                  : { border: "none" }
              }
              onClick={() => setActiveButton(1)}
            >
              Produção e edição de vídeos
            </button>
            <button
              style={
                activeButton === 2
                  ? {
                      border: "1px solid #e1e1e6",
                      borderBottom: "1px solid #0f0f10",
                      background: "#0f0f10",
                    }
                  : { border: "none" }
              }
              onClick={() => setActiveButton(2)}
            >
              Transmissão da identidade do produto
            </button>
          </HeaderContainer>

          <ServicesContainer>
            <img src={description.link[activeButton].image} loading="lazy" alt="Squad Img" />
            <p>
              {description.link[activeButton].description}
            </p>
          </ServicesContainer>
        </Content>
      </Container>
    </Section>
  );
}
