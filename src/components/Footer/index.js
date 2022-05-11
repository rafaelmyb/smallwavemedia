import Button from "../Button";

import buttonImg from "../../../public/images/buttonTop.svg";

import { Container, Content } from "./styles";

export default function Footer() {
  function scroll() {
    document.getElementById("hero").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Content>
        <small>Small Wave 2021 - Todos os direitos reservados</small>
        <button onClick={scroll}>
          <img src={buttonImg.src} alt="Botão pro topo" />
        </button>
      </Content>
    </Container>
  );
}
