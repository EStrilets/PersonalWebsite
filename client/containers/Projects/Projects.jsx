import React from 'react'
import styles from './projects.module.css'
import { FaReact, FaDocker, FaHardHat } from "react-icons/fa";
import CardComponent from '../../components/card/CardComponent';
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
  SiCss3,
  SiGithub,
  SiSolidity,
  SiPython,
  SiPandas,
  SiPytorch,
} from 'react-icons/si';
import Link from 'next/link';

const projectData = [
  {
    name: 'Path Finder',
    description:
      'The main goal of this project is to identify the most optimal path finding algorithm' +
      'for different types of labyrinths. Implemented seven path finding algorithms and' +
      'tested them over a set of various labyrinths to identify the most optimal algorithm for a' +
      'particular type of labyrinths.',
    styles: 'item2',
    frontEndIcons: [
      <SiJavascript size='2rem' className={styles['card-icon']} />,
      <SiNextdotjs size='2rem' className={styles['card-icon']} />,
      <SiCss3 size='2rem' className={styles['card-icon']} />,
      <SiRedux size='2rem' className={styles['card-icon']} />,
    ],
    backEndIcons: [],
    devOpsIcons: [],
    frontEndTitle: false,
    gitHub: 'https://github.com/EStrilets',
  },
  {
    name: 'Unifyi',
    description:
      'A full-stack web app with the primary focus on improving university' +
      'experiences for new and existing university students. Implemented' +
      ' within microservices approach and transactional outbox pattern.',
    styles: 'item3',
    frontEndIcons: [
      <SiJavascript size='2rem' className={styles['card-icon']} />,
      <SiTypescript size='2rem' className={styles['card-icon']} />,
      <FaReact size='2rem' className={styles['card-icon']} />,
      <SiRedux size='2rem' className={styles['card-icon']} />,
    ],
    backEndIcons: [
      <SiGoland size='2rem' className={styles['card-icon']} />,
      <SiPostgresql size='2rem' className={styles['card-icon']} />,
      <SiNginx size='2rem' className={styles['card-icon']} />,
      <SiSocketdotio size='2rem' className={styles['card-icon']} />,
      <SiApachekafka size='2rem' className={styles['card-icon']} />,
    ],
    devOpsIcons: [
      <FaDocker size='2rem' className={styles['card-icon']} />,
      <SiKubernetes size='2rem' className={styles['card-icon']} />,
      <SiDigitalocean size='2rem' className={styles['card-icon']} />,
    ],
    frontEndTitle: true,
    gitHub: '',
  },
  {
    name: 'Equity Sentiment',
    description:
      'Social sentiment analysis of trends and volatility in social interest' + 
      ' regarding public companies. Created with unsupervised and supervised learning.' +
      ' Such as K-means (Lexicon-based and Labeled Vectorized), GMM (gaussian mixture model) and BERT model.',
    styles: 'item4',
    frontEndIcons: [
      <SiPython size='2rem' className={styles['card-icon']} />,
      <SiPandas size='2rem' className={styles['card-icon']} />,
      <SiPytorch size='2rem' className={styles['card-icon']} />,
    ],
    backEndIcons: [],
    devOpsIcons: [],
    frontEndTitle: false,
    gitHub: 'https://github.com/EStrilets',
  },
  {
    name: 'Web3 Collection',
    description:
      'Collection that would allow the collector to swap the properties of regular NFT' +
      ' and combine with newly created NFT objects.' + 
      ' The projects aims to increase collaboration between artist and other NFT projects.',
    styles: 'item5',
    frontEndIcons: [
      <SiSolidity size='2rem' className={styles['card-icon']} />,
      <SiJavascript size='2rem' className={styles['card-icon']} />,
      <SiNextdotjs size='2rem' className={styles['card-icon']} />,
      <FaHardHat size='2rem' className={styles['card-icon']} />,
      <FaDocker size='2rem' className={styles['card-icon']} />,
    ],
    backEndIcons: [],
    devOpsIcons: [],
    frontEndTitle: false,
    gitHub: 'https://github.com/EStrilets',
  },
];

export default function Projects() {
  return (
    <main className={styles['grid']}>
      <CardComponent newStyles={`${styles['card']} ${styles['item1']}`}>
        <h1>Personal Projects</h1>
        <h3>Done with passion, dedication and entrepreneurial spirit</h3>
      </CardComponent>
      {projectData.map((item, idx) => (
        <CardComponent
          key={idx}
          newStyles={`${styles['card']} ${styles[item.styles]}`}
        >
          <div className={styles['card__header-container']}>
            <h1>{item.name}</h1>
            <div />
            {item.gitHub.length > 0 ? (
              <Link href={item.gitHub}>
                <a target='_blank' rel='noopener noreferrer'>
                  <SiGithub
                    size='2rem'
                    className={styles['card__github-log']}
                  />
                </a>
              </Link>
            ) : (
              <Link href='https://youtu.be/bdS4Fwc96Xs'>
                <a target='_blank' rel='noopener noreferrer'>
                  <SiYoutube
                    size='2rem'
                    className={styles['card__youtube-log']}
                  />
                </a>
              </Link>
            )}
          </div>
          <p className={styles['card__text-p']}>{item.description}</p>
          <div className={styles['container__tech-stack']}>
            {item.frontEndTitle ? <h3>Frontend stack</h3> : <h3>Tech stack</h3>}
            <div className={styles['tech-stack']}>
              {item.frontEndIcons.map((icons) => icons)}
            </div>
            {item.backEndIcons.length > 0 && (
              <div className={styles['container__tech-stack']}>
                <h3>Backend stack</h3>
                <div className={styles['tech-stack']}>
                  {item.backEndIcons.map((icons) => icons)}
                </div>
              </div>
            )}
            {item.devOpsIcons.length > 0 && (
              <div className={styles['container__tech-stack']}>
                <h3>DevOps stack</h3>
                <div className={styles['tech-stack']}>
                  {item.devOpsIcons.map((icons) => icons)}
                </div>
              </div>
            )}
          </div>
        </CardComponent>
      ))}
    </main>
  );
}
