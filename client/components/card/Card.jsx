import React from 'react'
import styles from './card.module.css'
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaReact, FaDocker } from "react-icons/fa";
import {
  SiRedux,
  SiKubernetes,
  SiTypescript,
  SiJavascript,
  SiApachekafka,
  SiGoland,
  SiNginx,
  SiPostgresql,
  SiSocketdotio,
  SiDigitalocean,
  SiYoutube,
  SiNextdotjs,
  SiCss3
} from 'react-icons/si';

const Div = ({ children, newStyles }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <motion.div
      className={newStyles}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      {children}
    </motion.div>
  );
};

export default function Card() {
  return (
    <main className={styles['grid']}>
      <Div newStyles={`${styles['card']} ${styles['item1']}`}>
        <h1>Personal Projects</h1>
        <p>Done with love, dedication and</p>
      </Div>
      <Div newStyles={`${styles['card']} ${styles['item2']}`}>
      <div className={styles['card__header-container']}>
          <h1>Path Finder</h1>
          <div />
          <SiYoutube size='2rem' className={styles['card__youtube-log']} />
        </div>
        <p className={styles['card__text-p']}>
          A full-stack web app with the primary focus on improving university
          experiences for new and existing university students. Implemented
          within microservices approach and transactional outbox pattern
        </p>
        <div className={styles['container__tech-stack']}>
          <h3>Tech stack</h3>
          <div className={styles['tech-stack']}>
            <SiTypescript size='2rem' />
            <SiNextdotjs size='2rem' />
            <SiCss3 size='2rem' />
            <SiRedux size='2rem' />
          </div>
        </div>
      </Div>
      <Div newStyles={`${styles['card']} ${styles['item3']}`}>
        <div className={styles['card__header-container']}>
          <h1>Unifyi</h1>
          <div />
          <SiYoutube size='2rem' className={styles['card__youtube-log']} />
        </div>
        <p className={styles['card__text-p']}>
          A full-stack web app with the primary focus on improving university
          experiences for new and existing university students. Implemented
          within microservices approach and transactional outbox pattern
        </p>
        <div className={styles['container__tech-stack']}>
          <h3>Frontend stack</h3>
          <div className={styles['tech-stack']}>
            <SiJavascript size='2rem' />
            <SiTypescript size='2rem' />
            <FaReact size='2rem' />
            <SiRedux size='2rem' />
            <FaReact size='2rem' />
            <SiRedux size='2rem' />
          </div>
        </div>
        <div className={styles['container__tech-stack']}>
          <h3>Backend stack</h3>
          <div className={styles['tech-stack']}>
            <SiGoland size='2rem' />
            <SiPostgresql size='2rem' />
            <SiNginx size='2rem' />
            <SiSocketdotio size='2rem' />
            <SiApachekafka size='2rem' />
          </div>
        </div>
        <div className={styles['container__tech-stack']}>
          <h3>DevOps Stack</h3>
          <div className={styles['tech-stack']}>
            <FaDocker size='2rem' />
            <SiKubernetes size='2rem' />
            <SiDigitalocean size='2rem' />
          </div>
        </div>
      </Div>
      <Div newStyles={`${styles['card']} ${styles['item4']}`}>
        <h2>because interactions make it more fun</h2>
      </Div>
      <Div newStyles={`${styles['card']} ${styles['item5']}`}></Div>
    </main>
  );
}
