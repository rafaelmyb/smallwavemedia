import Image from 'next/image';

import squadImg from '../../public/images/squad.png';

import { Section, Container, Content, ContainerSquad, Squad } from './styles';

export function Product() {
  return(
    <Section id={"products"}>
      <Container>
        <Content>
          <h1>Como a Small Wave pode te servir</h1>
          <ContainerSquad>
            <Squad>
              <Image 
                src={squadImg}
                alt="Logo Small Wave"
                width={352}
                height={140}
              />
              <h3>Gestão da identidade do produto</h3>
              <p>Criação de identidade visual, gestão de mídias sociais, consultoria em marketing e publicidade, criação de conteúdos e fotografias de colaboradores, produtos e eventos.</p>
            </Squad>
            <Squad>
              <Image 
                src={squadImg}
                alt="Logo Small Wave"
                width={352}
                height={140}
              />
              <h3>Produção e edição de vídeos em geral</h3>
              <p>Vídeos institucionais, comerciais e para mostra de produtos, além de produção e transmissão de aulas, cursos, palestras e lives musicais.</p>
            </Squad>
            <Squad>
              <Image 
                src={squadImg}
                alt="Logo Small Wave"
                width={352}
                height={140}
              />
              <h3>Transmissão da identidade do produto</h3>
              <p>Criação de sites, landing pages e blogs, bem como otimização para mecanismos de busca na internet.</p>
            </Squad>
          </ContainerSquad>
        </Content>
      </Container>
    </Section>
  )
}