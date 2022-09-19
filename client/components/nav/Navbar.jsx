import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import styles from './navbar.module.css'
import ContactBtn from '../contact/ContactBtn'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#wgpt3'>WT GPT 3?</a>
    </p>
    <p>
      <a href='#possibility'>Open AI</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
)

// BEM --> Block Element modifier
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles['gpt3__navbar']}>
      <div className={styles['gpt3__navbar-links']}>
        <div className={styles['gpt3__navbar-links_logo']}>
          <img alt='logo' />
        </div>
      </div>
      <div className={styles['gpt3__navbar-sign']}>
        <ContactBtn />
      </div>
      <div className={styles['gpt3__navbar-menu']}>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} /> 
        : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} /> }
        {toggleMenu  && ( 
          <div className={styles['gpt3__navbar-menu_container scale-up-center']}>
            <div className={styles['gpt3__navbar-menu_container-links']}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}