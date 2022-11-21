import React from 'react';
import styles from './logo.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <a data-testid='logo'>
          <Image
            className={styles['logo']}
            src='/LogoPortfolio.svg'
            alt='Logo'
            width={65}
            height={65}
          />
        </a>
      </Link>
    </>
  );
}
