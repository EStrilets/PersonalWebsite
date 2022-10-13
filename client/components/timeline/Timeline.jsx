import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { withRouter } from "next/router"
import styles from './timeline.module.css';
import { motion, AnimatePresence  } from "framer-motion";
import CardComponent from '../card/CardComponent'
import Lottie2022 from "../lotties/Lottie2022";
import Lottie2019 from "../lotties/Lottie2019";
import Lottie2020 from "../lotties/Lottie2020";
import Lottie2021 from "../lotties/Lottie2021";

const data = [
  {
    id: "0"
  },
  {
    id: "1"
  },
  {
    id: "2"
  }
];

const info = [
  {
    name: "Jim"
  },
  {
    name: "Karen"
  },
  {
    name: "Yev"
  }
];

const TabsContent = ({ children, year, active }) => { 
  return (
    <>
      <div className={styles['course-preview']}>{children}</div>
      <div className={styles['course-info']}>
        <h3>Achievements </h3>
        {year === '2022' ? (
          <>
            {active === 0 && <List activeTab={0} info={info[0]} />}
            {active === 1 && <List activeTab={1} />}
            {active === 2 && <List activeTab={2} />}
          </>
        ) : year === '2021' ? (
          <>
            {active === 0 && <List activeTab={0} info={info[1]} />}
            {active === 1 && <List activeTab={1} />}
            {active === 2 && <List activeTab={2} />}
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

const List = ({ activeTab, info }) => {
  return (
    <>
      {/* {activeTab === 1 && (
        <ul className={styles['achievements__text']}>
          <li className={styles['achievements__text']}>
            Participated in{' '}
            <a
              href='https://vanstartupweek.ca/'
              target='_blank'
              rel='noreferrer'
            >
              Vancouver Start-up week
            </a>{' '}
            as volunteer
          </li>
          <li>
            Developed Anomaly Detection in Electricity Consumption Data project
            for Exploratory Analysis in Electricity Consumption data on US power
            grids
          </li>
          <li>
            Participated in{' '}
            <a
              href='https://vanstartupweek.ca/'
              target='_blank'
              rel='noreferrer'
            ></a>
          </li>
        </ul>
      )} */}
       {activeTab === 0 ? (
        <h1>{info.name}</h1>
      ) : activeTab === 1 ? (<h1>Hello world check 2</h1>) : activeTab === 2  ? (<h1>Hello world check 3</h1>) : ''}
    </>
  );
};

const list2020 = () => {
  return (
    <>
      <ul className={styles['achievements__text']}>
        <li className={styles['achievements__text']}>
          Gather a team of 4 developer for developing the production ready application
        </li>
        <li>
          
        </li>
        <li>
          Participated in{' '}
          <a href='https://vanstartupweek.ca/' target='_blank' rel="noreferrer">
            
          </a>
        </li>
      </ul>
    </>
  );
};

const list2021 = () => {
  return (
    <>
      <ul className={styles['achievements__text']}>
        <li className={styles['achievements__text']}>
          Learned JavaScript, React, Redux and understood the microservice
          architecture patterns
        </li>
        <li>
          Developed and maintained microservices in the Unifyi project and
          took responsibility for business and design parts of the project
        </li>
        <li>
         Joined a Teradici company for my co-op as a frontend developer
        </li>
      </ul>
    </>
  );
};

const list2022 = () => {
  return (
    <>
      <ul className={styles['achievements__text']}>
        <li className={styles['achievements__text']}>
          Successfully launched {' '}
          <a href='https://vanstartupweek.ca/' target='_blank' rel="noreferrer">
            Unifyi Project,
          </a>{' '}
          website received 900+ visits in 2 months
        </li>
        <li>
          Graduated from Simon Fraser University with Computing Science degree
        </li>
        <li>
          Started to develop NFT project that allows the collector to swap the
          properties of regular NFT
        </li>
      </ul>
      <button className={styles['card__button']}>Download resume</button>
    </>
  );
};

const Tabs = ({ router }) => {
  const [active, setActive] = useState(0);
    const {
      query: { year },
    } = router;

    useEffect(() => {
      setActive(0)
    },[year])

    const isTabOne = year === '2022' || year == null;
    const isTabTwo = year === '2021';
    const isTabThree = year === '2020';
    const isTabFour = year === '2019';
  return (
    <div className={styles['container']}>
      <div className={styles['step__indicator']}>
        <Link
          scroll={false}
          href={{ pathname: '/resume', query: { year: '2022' } }}
        >
          <a
            className={`${styles['step__indicator-link']} ${
              isTabOne && styles['step__indicator-link-selected']
            }`}
          >
            2022
          </a>
        </Link>
        <Link
          scroll={false}
          href={{ pathname: '/resume', query: { year: '2021' } }}
        >
          <a
            className={`${styles['step__indicator-link']} ${
              isTabTwo && styles['step__indicator-link-selected']
            }`}
          >
            2021
          </a>
        </Link>
        <Link
          scroll={false}
          href={{ pathname: '/resume', query: { year: '2020' } }}
        >
          <a
            className={`${styles['step__indicator-link']} ${
              isTabThree && styles['step__indicator-link-selected']
            }`}
          >
            2020
          </a>
        </Link>
        <Link
          scroll={false}
          href={{ pathname: '/resume', query: { year: '2019' } }}
        >
          <a
            className={`${styles['step__indicator-link']} ${
              isTabFour && styles['step__indicator-link-selected']
            }`}
          >
            2019
          </a>
        </Link>
      </div>
      <CardComponent
        newStyles={`${styles['card__section']} ${
          isTabThree && styles['year__2020']
        } ${isTabTwo && styles['year__2021']} ${
          isTabFour && styles['year__2019']
        }`}
      >
        {isTabOne && (
          <React.Fragment>
            <TabsContent list={info[0]} year={year} active={active}>
              <Lottie2022 />
            </TabsContent>
          </React.Fragment>
        )}
        {isTabTwo && (
          <React.Fragment>
            <TabsContent list={info[1]} year={year} active={active}>
              <Lottie2021 />
            </TabsContent>
          </React.Fragment>
        )}
        {isTabThree && (
          <React.Fragment>
            <TabsContent list={list2020()}>
              <Lottie2020 />
            </TabsContent>
          </React.Fragment>
        )}
        {isTabFour && (
          <React.Fragment>
            <TabsContent>
              <Lottie2019 />
            </TabsContent>
          </React.Fragment>
        )}
      </CardComponent>
      <div className={styles['btns-wrapper']}>
        {data.map((item, i) => (
          <span key={i}>
            <div
              // whileTap={{ scale: 1.2 }}
              className={active===i ? `${styles['course-info-btn']} ${styles['course-info-btn__active']}` : styles['course-info-btn'] }
              // className={`${styles['course-info-btn']}`}
              onClick={() => setActive(i)}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
export default withRouter(Tabs)