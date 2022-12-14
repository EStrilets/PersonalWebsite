import { useState, useEffect, useContext } from 'react'
import styles from './theme.module.css'
import { setThemeConfig } from '../../lib/theme'
import ThemeToggleBtn from '../contactInfo/ThemeToggleBtn';


export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
      setTheme(() => {
        try {
          const theme = localStorage.getItem('theme');
          return theme || 'light';
        } catch (err) {}

        return 'light';
      });
    }, []);

    const toggleTheme = () => {
      setTheme((prev) => {
        const theme = prev === 'light' ? 'dark' : 'light';
        setThemeConfig(theme);
        return theme;
      });
    };
  return (
    <div>
      <button onClick={toggleTheme}>{theme}</button>
      {/* <ThemeToggleBtn /> */}
    </div>
  );
}
