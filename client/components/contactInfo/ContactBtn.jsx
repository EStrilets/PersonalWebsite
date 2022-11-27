import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import Tooltip from '../tooltip/Tooltip'

export default function ContactBtn() {
    return (
      <>
        <Link href='/contact'>
          <div className={styles['spinner']} data-testid='contact-btn'>
            <Tooltip content='Contact' direction='bottom'>
              <FiMail className={styles['icon-mail']} size={30} />
            </Tooltip>
          </div>
        </Link>
      </>
    );
    
}
