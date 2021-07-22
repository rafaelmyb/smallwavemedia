/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import logoImg from '../../public/images/logo.png';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a href="">Sobre nós</a>
          <a href="">Produtos</a>
          <Image 
            src={logoImg} 
            alt="Logo Small Wave"
            width={332}
            height={332}
            priority={true}
          />
          <a href="">Equipe</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </header>
  )
}