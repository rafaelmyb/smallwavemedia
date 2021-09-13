import Image from "next/image";

import logoImg from "../../public/images/logo.png";
import danielImg from "../../public/images/daniel.png";
import joaoImg from "../../public/images/joao.png";
import rafaelImg from "../../public/images/rafael.png";
import luharaImg from "../../public/images/luhara.png";
import flaviaImg from "../../public/images/flavia.png";

import {
  Section,
  Container,
  Content,
  Headline,
  Subtitle,
  CardsTop,
  CardsDown,
  Item,
  CardBody,
  Social
} from "./styles";

export function Team() {
  return (
    <Section>
      <Container>
        <Content>
          <Headline>
            <span>
              <Image
                src={logoImg}
                alt="Logo Small Wave"
                width={28}
                height={28}
              />
              Small Wave team
            </span>
            <Subtitle>
              Conheça a equipe que vai promover seu produto
            </Subtitle>
          </Headline>
          <CardsTop>
            <Item>
              <div>
                <div>
                  <Image
                    src={danielImg}
                    alt="Daniel Gomes"
                    width={204}
                    height={312}
                  />
                </div>
              </div>
              <CardBody>
                <strong>Daniel Gomes</strong>
                <span>Fundador e CEO</span>
              </CardBody>
              <Social>
                <a href=""></a>
              </Social>
            </Item>
            <Item>
              <div>
                <div>
                  <Image
                    src={joaoImg}
                    alt="João Pedro"
                    width={204}
                    height={312}
                  />
                </div>
              </div>
              <CardBody>
                <strong>João Pedro</strong>
                <span>Sócio e CFO</span>
              </CardBody>
              <Social>
                <a href=""></a>
              </Social>
            </Item>
            <Item>
              <div>
                <div>
                  <Image
                    src={rafaelImg}
                    alt="Rafael Yamada"
                    width={204}
                    height={312}
                  />
                </div>
              </div>
              <CardBody>
                <strong>Rafael Yamada</strong>
                <span>Sócio e Programador</span>
              </CardBody>
              <Social>
                <a href=""></a>
              </Social>
            </Item>
          </CardsTop>
          <CardsDown>
            <Item>
              <div>
                <div>
                  <Image
                    src={luharaImg}
                    alt="Luhara França"
                    width={204}
                    height={312}
                  />
                </div>
              </div>
              <CardBody>
                <strong>Luhara França</strong>
                <span>Fotógrafa</span>
              </CardBody>
              <Social>
                <a href=""></a>
              </Social>
            </Item>
            <Item>
              <div>
                <div>
                  <Image
                    src={flaviaImg}
                    alt="Flávia França"
                    width={204}
                    height={312}
                  />
                </div>
              </div>
              <CardBody>
                <strong>Flávia França</strong>
                <span>Fotógrafa</span>
              </CardBody>
              <Social>
                <a href=""></a>
              </Social>
            </Item>
          </CardsDown>
        </Content>
      </Container>
    </Section>
  );
}
