/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a href="">Sobre nós</a>
          <a href="">Produtos</a>
          <img src="/images/logo.png" alt="Logo Small Wave" />
          <a href="">Equipe</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </header>
  )
}