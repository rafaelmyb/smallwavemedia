import Head from 'next/head';
import { About } from '../components/About'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Small Wave</title>
      </Head>

      <main>
        <section className={styles.hero}>
          <video src="/videos/hero.mp4" autoPlay loop muted></video>

          <div className={styles.container}>
            <div className={styles.content}>
              <h1>SMALL <br></br><span>WAVE</span></h1>
              <p>Propagando ondas por onde servimos</p>

              <button>CONTRATAR</button>
            </div>
          </div>
        </section>

        <About />
      </main>
    </>
  )
}
