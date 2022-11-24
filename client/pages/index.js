import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Introduction from '../components/intro/Intoduction'
import Links from '../components/links/Links'
import BirdsAnimation from '../components/birdsAnimation/BirdsAnimation';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yevgeny Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/TabIcon.svg" />
      </Head>
      <div className={styles['main']}>
        <Introduction />
        <Links />
      </div>
      {/* <div className={styles.container}>
        <BirdsAnimation />
      </div> */}
      {/* <Footer /> */}
    </div>
  )
}