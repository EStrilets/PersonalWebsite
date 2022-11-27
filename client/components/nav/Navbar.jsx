import React, { useState, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import styles from './navbar.module.css'
import ContactBtn from '../contactInfo/ContactBtn'
import Logo from '../logo/Logo'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Tooltip from '../tooltip/Tooltip'

const Menu = ({setToggleMenu}) => (
  <div className={styles['link-list']}>
    <motion.p whileHover={{ scale: 1.5 }}>
      <Link href='/'>
        <a onClick={() => setToggleMenu(false)}>Home</a>
      </Link>
    </motion.p>
    <motion.p whileHover={{ scale: 1.5 }}>
      <Link href='/project'>
        <a onClick={() => setToggleMenu(false)}>Projects</a>
      </Link>
    </motion.p>
    <motion.p whileHover={{ scale: 1.5 }}>
    <Link href='/resume?year=2022'>
      <a onClick={() => setToggleMenu(false)}>Personal Info</a>
    </Link>
    </motion.p>
    <motion.p whileHover={{ scale: 1.5 }}>
    <Link href='/contact'>
      <a onClick={() => setToggleMenu(false)}>Contact</a>
    </Link>
    </motion.p>
    <motion.p whileHover={{ scale: 1.5 }}>
      <a target='blank' href='https://www.linkedin.com/in/eugene-strilets/'>LinkedIn</a>
    </motion.p>
    <motion.p whileHover={{ scale: 1.5 }}>
      <a target='blank' href='https://github.com/EStrilets'>Github</a>
    </motion.p>
  </div>
);

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = toggleMenu ? "hidden" : "auto";
    }
  }, [toggleMenu]);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
            <motion.div
              initial='pageInitial'
              animate='pageAnimate'
              exit='pageExit'
              transition={{ duration: 0.05 }}
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  opacity: 0,
                },
              }}
              className={styles['menu']}
            >
              <div className={styles['menu-wrapper']}>
                <div className={styles['menu-navbar']}>
                  <IoClose
                    size={27}
                    onClick={() => setToggleMenu(false)}
                    className={styles['icon-close']}
                  />
                </div>
                <Menu setToggleMenu={setToggleMenu} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className={styles['gpt3__navbar']}>
        <div className={styles['gpt3__navbar-links']}>
          <div className={styles['gpt3__navbar-links_logo']}>
            <Logo />
          </div>
        </div>
        <div className={styles['gpt3__navbar-sign']}>
          <>
            <ContactBtn />
            <Tooltip content='Menu' direction='bottom'>
              <HiMenu
                className={styles['icons']}
                size={30}
                onClick={() => setToggleMenu(true)}
              />
            </Tooltip>
          </>
        </div>
      </div>
    </>
  );
}
