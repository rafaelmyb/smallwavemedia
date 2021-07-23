import Image from 'next/image';

import squadImg from '../../public/images/squad.png';

import styles from './styles.module.scss'

export function Product() {
  return(
    <section className={styles.product} id={"products"}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Como a Small Wave pode te servir</h1>
          <div className={styles.containerSquad}>
            <div className={styles.squad}>
              <Image 
                src={squadImg}
                alt="Logo Small Wave"
                width={352}
                height={140}
              />
              <h1>Gestão da identidade do produto</h1>
              <p>Criação de identidade visual, gestão de mídias sociais, consultoria em marketing e publicidade, criação de conteúdos e fotografias de colaboradores, produtos e eventos.</p>
            </div>
            <div className={styles.squad}>
              <Image 
                src={squadImg}
                alt="Logo Small Wave"
                width={352}
                height={140}
              />
              <h1>Produção e edição de vídeos em geral</h1>
              <p>Vídeos institucionais, comerciais e para mostra de produtos, além de produção e transmissão de aulas, cursos, palestras e lives musicais.</p>
            </div>
            <div className={styles.squad}>
              <Image 
                src={squadImg}
                alt="Logo Small Wave"
                width={352}
                height={140}
              />
              <h1>Transmissão da identidade do produto</h1>
              <p>Criação de sites, landing pages e blogs, bem como otimização para mecanismos de busca na internet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}