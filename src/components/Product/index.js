import { useState } from "react";

import squadImg from "../../../public/images/squad.png";

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

  return (
    <Section>
      <Container>
        <HeaderText>
          <h1>Como a Small Wave pode te servir</h1>
          <p>
            Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
            <span>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </span>
          </p>
        </HeaderText>

        <Content>
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
              Produção e edição de vídeos em geral
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
            <img src={description.link[activeButton].image} alt="Squad Img" />
            <p>
              {description.link[activeButton].description}
            </p>
          </ServicesContainer>
        </Content>
      </Container>
    </Section>
  );
}
