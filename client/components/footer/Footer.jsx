import styles from './footer.module.css'
import { SiNextdotjs } from 'react-icons/si';
import { BsSuitHeartFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className={styles['footer_container']}>
      <div>
        <p className={styles['first_header']}>
          Powered by
          <a>
            <SiNextdotjs
              className={`${styles['icons']} ${styles['next-icon']}`}
            />
          </a>
          | Source on
          <a className={styles['github-text']} target='_blank' href='https://github.com/EStrilets/personalwebsite'>Github</a>
        </p>
        <p className={styles['second_header']}>
          Made with
          <BsSuitHeartFill
            className={`${styles['icons']} ${styles['heart-icon']}`}
          />
          | Yev Strilets
        </p>
      </div>
    </div>
  );
}
