/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import logoImg from "../../public/images/logo.png";

import { MainHeader, HeaderContainer, Content } from "./styles";

export function Header() {
  return (
    <MainHeader>
      <HeaderContainer>
        {/* <Image
          src={logoImg}
          alt="Logo Small Wave"
          width={56}
          height={56}
          priority={true}
        /> */}
        <Content>
          {/* <nav>
            <a href="#about">Sobre nós</a>
            <a href="#products">Produtos</a>
            <a href="#team">Time</a>
            <a href="#contact">Contato</a>
          </nav> */}
        </Content>
      </HeaderContainer>
    </MainHeader>
  );
}
