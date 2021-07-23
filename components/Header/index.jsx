/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../public/images/logo.png';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <Link href="#about">Sobre nós</Link>
          <Link href="#products">Produtos</Link>
          <Image 
            src={logoImg} 
            alt="Logo Small Wave"
            width={332}
            height={332}
            priority={true}
          />
          <Link href="#team">Equipe</Link>
          <Link href="#contact">Contato</Link>
        </nav>
      </div>
    </header>
  )
}