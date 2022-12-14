import React from 'react';
import styles from './logo.module.css'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <a data-testid='logo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='65'
            height='65'
            viewBox='0 0 90 125'
            className={styles['logo']}
          >
            <g
              id='Сгруппировать_594'
              data-name='Сгруппировать 594'
              transform='translate(-351 -39)'
            >
              <text
                id='S'
                transform='translate(399 127)'
                fontSize='79'
                fontFamily='Apple-Chancery, Apple Chancery'
              >
                <tspan x='0' y='0'>
                  S
                </tspan>
              </text>
              <text
                id='Y'
                transform='translate(351 127)'
                fontSize='79'
                fontFamily='Apple-Chancery, Apple Chancery'
              >
                <tspan x='0' y='0'>
                  Y
                </tspan>
              </text>
            </g>
          </svg>
        </a>
      </Link>
    </>
  );
}
