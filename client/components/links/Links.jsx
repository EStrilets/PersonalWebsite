import styles from './links.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from "react-icons/fa";
import Link from 'next/link';
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import Tooltip from '../tooltip/Tooltip';

export default function Links() {
  return (
    <>
      <div className={styles['tooltip-icon']}></div>
      <div className={styles['container__links']}>
        <div
          className={`${styles['social-overlap']} ${styles['process-scetion']} ${styles['mt100']} `}
        >
          <div className={styles['container']}>
            <div className={styles['justify-content-center']}>
              <div className={styles['social-bar']}>
                <div
                  className={`${styles['social-icons']} ${styles['mb-3']} ${styles['iconpad']}`}
                >
                  <Link href='/project'>
                    <a className={styles['slider-nav-item']}>
                      <Tooltip content='Projects' direction='bottom'>
                        <FaRegLightbulb className={styles['tooltip-styles']} />
                      </Tooltip>
                    </a>
                  </Link>
                  <Link href='/resume?year=2022'>
                    <a className={styles['slider-nav-item']}>
                      <Tooltip content='Personal Info' direction='bottom'>
                        <HiOutlineDocumentDuplicate />
                      </Tooltip>
                    </a>
                  </Link>
                  <a
                    href='https://github.com/EStrilets'
                    target='_blank'
                    rel='noreferrer'
                    className={styles['slider-nav-item']}
                  >
                    <Tooltip content='Github' direction='bottom'>
                      <BsGithub />
                    </Tooltip>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/eugene-strilets/'
                    target='_blank'
                    rel='noreferrer'
                    className={styles['slider-nav-item']}
                  >
                    <Tooltip content='LinkedIn' direction='bottom'>
                      <BsLinkedin />
                    </Tooltip>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
