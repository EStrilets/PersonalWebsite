import styles from './links.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from "react-icons/fa";
import Link from 'next/link';
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

export default function Links() {
  return (
    <div className={styles['container__links']}>
      <div
        className={`${styles['social-overlap']} ${styles['process-scetion']} ${styles['mt100']} `}
      >
        <div className={styles['container']}>
          <div className={styles['justify-content-center']}>
            {/* <div className="col-md-10">   */}
            <div className={styles['social-bar']}>
              <div
                className={`${styles['social-icons']} ${styles['mb-3']} ${styles['iconpad']}`}
              >
                <Link href='/project'>
                  <a className={styles['slider-nav-item']}>
                    <FaRegLightbulb />
                  </a>
                </Link>
                <Link href='/resume'>
                  <a className={styles['slider-nav-item']}>
                    <HiOutlineDocumentDuplicate />
                  </a>
                </Link>
                <a
                  href='https://github.com/EStrilets'
                  target='_blank'
                  className={styles['slider-nav-item']}
                >
                  <BsGithub />
                </a>
                <a
                  href='https://www.linkedin.com/in/eugene-strilets/'
                  target='_blank'
                  className={styles['slider-nav-item']}
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
