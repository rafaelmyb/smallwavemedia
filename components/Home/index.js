import { Section, Container, Content } from "./styles";

export function Home() {
  return (
    <Section>
      <video src="/videos/hero.mp4" autoPlay loop muted></video>

      <Container>
        <Content>
          <h1>
            SMALL <br></br>
            <span>WAVE</span>
          </h1>
          <p>Propagando ondas por onde servimos</p>

          <button>CONTRATAR</button>
        </Content>
      </Container>
    </Section>
  );
}
