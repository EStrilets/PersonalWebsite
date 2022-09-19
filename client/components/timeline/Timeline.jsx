import React from "react"
import Link from 'next/link'
import { withRouter } from "next/router"
import styles from './timeline.module.css';

const Tabs = ({ router }) => {

    const {
      query: { tab },
    } = router;

    const isTabOne = tab === '1' || tab == null;
    const isTabTwo = tab === '2';
    const isTabThree = tab === '3';
    const isTabFour = tab === '4';
  return (
    <>
      <div className={styles['step__indicator']}>
        <Link href={{ pathname: '/resume', query: { tab: '1' } }}>
          <a className={`${styles['step__indicator-link']} ${isTabOne && styles['step__indicator-link-selected']}`}>2018</a>
        </Link>
        <hr />
        <Link href={{ pathname: '/resume', query: { tab: '2' } }}>
          <a className={`${styles['step__indicator-link']} ${isTabTwo && styles['step__indicator-link-selected']}`}>2019</a>
        </Link>
        <hr />
        <Link href={{ pathname: '/resume', query: { tab: '3' } }}>
          <a className={`${styles['step__indicator-link']} ${isTabThree && styles['step__indicator-link-selected']}`}>2021</a>
        </Link>
        <hr />
        <Link href={{ pathname: '/resume', query: { tab: '4' } }}>
          <a className={`${styles['step__indicator-link']} ${isTabFour && styles['step__indicator-link-selected']}`}>2022</a>
        </Link>
        <hr />
      </div>
      {/* <TabBody>
        {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
        {isTabThree && <React.Fragment>This is tab two content</React.Fragment>}
        {isTabFour && <React.Fragment>This is tab two content</React.Fragment>}
      </TabBody> */}
    </>
  );
}
export default withRouter(Tabs)