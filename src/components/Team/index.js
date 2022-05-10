import logoImg from "../../../public/images/logo.svg";
import danielImg from "../../../public/images/daniel.png";
import joaoImg from "../../../public/images/joao.png";
import rafaelImg from "../../../public/images/rafael.png";
import instagramImg from "../../../public/images/instagram.svg";

import {
  Section,
  Container,
  AsideText,
  TextHeader,
  CardTeam,
  CardDescription,
  Card,
} from "./styles";

export default function Team() {
  return (
    <Section>
      <Container>
        <AsideText>
          <TextHeader>
            <img src={logoImg.src} alt="" />
            <small>Small Wave team</small>
          </TextHeader>
          Conheça a equipe que vai promover o seu produto
        </AsideText>

        <CardTeam>
          <Card>
            <img src={danielImg.src} alt="Daniel Gomes" />
            <CardDescription>
              <span>
                <p>Daniel Gomes</p>
                <small>Fundador e CEO</small>
              </span>
              <a href="https://www.instagram.com/danielgomessw/">
                <img src={instagramImg.src} alt="Instagram" />
              </a>
            </CardDescription>
          </Card>
          <Card>
            <img src={joaoImg.src} alt="João Pedro Gomes" />
            <CardDescription>
              <span>
                <p>João Pedro Gomes</p>
                <small>Sócio e CFO</small>
              </span>
              <a href="https://www.instagram.com/joaopedrosg1/">
                <img src={instagramImg.src} alt="Instagram" />
              </a>
            </CardDescription>
          </Card>
          <Card>
            <img src={rafaelImg.src} alt="Rafael Yamada" />
            <CardDescription>
              <span>
                <p>Rafael Yamada</p>
                <small>Sócio e Pogramador</small>
              </span>
              <a href="https://www.instagram.com/_rafael_yamada/">
                <img src={instagramImg.src} alt="Instagram" />
              </a>
            </CardDescription>
          </Card>
        </CardTeam>
      </Container>
    </Section>
  );
}
