import Timeline from "../../components/timeline/Timeline"
import styles from './resumepages.module.css';
import Link from 'next/link';
import { withRouter } from "next/router"

export default function ResumePages() {
  return (
    <div className={styles['container']}>
      <div className={styles['mainContainer']}>
        <div className={styles['output']}>
          <Link href={{ pathname: '/', query: { tab: '1' } }}>
            <a>Tab 1</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
