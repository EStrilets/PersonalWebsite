import styles from './links.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from "react-icons/fa";
import Link from 'next/link';
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

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
                      <FaRegLightbulb className={styles['tooltip-styles']} />
                    </a>
                  </Link>
                  <Link href='/resume'>
                    <a className={styles['slider-nav-item']}>
                      {/* <span className={styles['tooltip']}>Projects</span> */}
                      <HiOutlineDocumentDuplicate />
                    </a>
                  </Link>
                  <a
                    href='https://github.com/EStrilets'
                    target='_blank'
                    rel='noreferrer'
                    className={styles['slider-nav-item']}
                  >
                    <BsGithub />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/eugene-strilets/'
                    target='_blank'
                    rel='noreferrer'
                    className={styles['slider-nav-item']}
                  >
                    <BsLinkedin />
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
