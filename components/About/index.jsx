import Image from 'next/image';

import asideImg from '../../public/images/logo-aside.png';

import styles from './styles.module.scss';

export function About() {
  return(
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>O que é a Small Wave?</h1>
          <p>Somos uma equipe forjada em meio a crise.</p>
          <p>Criamos soluções para empresas e igrejas para se comunicarem da forma mais simples e ágil com o seu público, seja por fotos, banners, frases ou vídeos.</p>
          <p>Nos dedicamos em fazer o seu produto conhecido pelo público. com a criação e gestão da sua identidade e conteúdo, além de lhe inserirmos na web com nossas ferramentas.</p>
        </div>
      </div>
      
      {/*<Image 
        src={asideImg}
        alt="Logo Small Wave"
        width={790}
        height={490}
      />*/}
    </section>
  )
}