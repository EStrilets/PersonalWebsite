import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import Fab from '../fab/Fab'
import styles from './layout.module.css'
import { setThemeConfig } from '../../lib/theme'
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  return (
    <div className={styles['content']}>
      <Navbar />
      {children}
      <Footer />
      <Fab />
    </div>
  );
};
 
export default Layout;