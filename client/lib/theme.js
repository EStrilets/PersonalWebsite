const themeConfig = {
    dark: {
        '--color-bg': '#181635',
        '--color-main': '#fbfbf4',
        '--color-card': 'rgb(29, 29, 53)',
        '--text-color': '#fbfbf4',
        '--color-header': '#fff',
        '--color-border': 'rgb(29, 29, 68)',
        '--color-tooltip': '#fbfbf4',
        '--color-links': '#E3E9FF',
        '--color-text': '#81AFDD',
        '--color-subtext': '#FF8A71',
        '--color-main-button': '#FF4820',
    },
    light: {
        '--color-bg': '#fbfbf4',
        '--color-main': '#1b0c02',
        '--color-card': '#ffff',
        '--text-color': '#000',
        '--color-tooltip': '#1b0c02',
        '--color-header': '#000',
        '--color-border': '#fff',
        '--color-links': '#1b0c02',
        '--color-text': '#81AFDD',
        '--color-subtext': '#FF8A71',
        '--color-main-button': '#FF4820',
    },
  };
  
  export const setThemeConfig = (inputTheme) => {
    if (inputTheme === "dark") {
      const theme = themeConfig.dark;
      for (let key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    } 
    else {
      const theme = themeConfig.light;
      for (let key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    }
  };
  
  function setCSSVar(property, color) {
    document.documentElement.style.setProperty(property, color);
  }