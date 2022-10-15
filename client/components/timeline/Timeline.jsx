import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { withRouter } from "next/router"
import styles from './timeline.module.css';
import {Achievements2022, Achievements2021, Achievements2020 } from './CardData/Achievements'
import {Goals2022, Goals2021, Goals2020 } from './CardData/Goals'
import {Knowledge2022, Knowledge2021, Knowledge2020 } from './CardData/Knowledge'
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

const info2022 = [
  {
    name: "Achievements",
    description: [<Achievements2022 />],
  },
  {
    name: "Knowledge",
    description: [<Knowledge2022 />],
  },
  {
    name: "Goals",
    description: [<Goals2022 />],
  }
];

const info2021 = [
  {
    name: "Achievements",
    description: [<Achievements2021 />],
  },
  {
    name: "Knowledge",
    description: [<Knowledge2021 />],
  },
  {
    name: "Goals",
    description: [<Goals2021 />],
  }
];

const info2020 = [
  {
    name: "Achievements",
    description: [<Achievements2020 />],
  },
  {
    name: "Knowledge",
    description: [<Knowledge2020 />],
  },
  {
    name: "Goals",
    description: [<Goals2020 />],
  }
];

const TabsContent = ({ children, year, active }) => { 
  return (
    <>
      <div className={styles['course-preview']}>{children}</div>
      <div className={styles['course-info']}>
        {year === '2022' ? (
          <>
            {active === 0 && <List activeTab={0} info={info2022[0]} />}
            {active === 1 && <List activeTab={1} info={info2022[1]} />}
            {active === 2 && <List activeTab={2} info={info2022[2]} />}
          </>
        ) : year === '2021' ? (
          <>
            {active === 0 && <List activeTab={0} info={info2021[0]} />}
            {active === 1 && <List activeTab={1} info={info2021[1]} />}
            {active === 2 && <List activeTab={2} info={info2021[2]} />}
          </>
        ) : year === '2020' ? (
          <>
          {active === 0 && <List activeTab={0} info={info2020[0]} />}
          {active === 1 && <List activeTab={1} info={info2020[1]} />}
          {active === 2 && <List activeTab={2} info={info2020[2]} />}
        </>
        ) : year === '2019' ? (
          <>
          {active === 0 && <List activeTab={0} info={info2021[0]} />}
          {active === 1 && <List activeTab={1} info={info2021[1]} />}
          {active === 2 && <List activeTab={2} info={info2021[2]} />}
        </>
        ) : (<></>)}
      </div>
    </>
  );
}

const List = ({ activeTab, info }) => {
  return (
    <>
      {Number.isInteger(activeTab) ? (
        <>
          <h3>{info.name}</h3>
          {info.description.map((item, key) => (
            <span key={key}>{item}</span>
          ))}
        </>
      ) : (
        <> </>
      )}
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
            <TabsContent year={year} active={active}>
              <Lottie2022 />
            </TabsContent>
          </React.Fragment>
        )}
        {isTabTwo && (
          <React.Fragment>
            <TabsContent year={year} active={active}>
              <Lottie2021 />
            </TabsContent>
          </React.Fragment>
        )}
        {isTabThree && (
          <React.Fragment>
            <TabsContent year={year} active={active}>
              <Lottie2020 />
            </TabsContent>
          </React.Fragment>
        )}
        {isTabFour && (
          <React.Fragment>
            <TabsContent year={year} active={active}>
              <Lottie2019 />
            </TabsContent>
          </React.Fragment>
        )}
      </CardComponent>
      <div className={styles['btns-wrapper']}>
        {data.map((item, key) => (
          <span key={key}>
            <div
              className={active===key ? `${styles['course-info-btn']} ${styles['course-info-btn__active']}` : styles['course-info-btn'] }
              onClick={() => setActive(key)}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
export default withRouter(Tabs)