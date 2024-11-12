import { createContext, useState } from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    text: '#333333',
    navBackground: '#f5f5f5',
    navText: '#333333',
    buttonBackground: '#ff5a5f',
    buttonText: '#ffffff',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
    navBackground: '#222222',
    navText: '#ffffff',
    buttonBackground: '#ff5a5f',
    buttonText: '#ffffff',
  },
};

export const ThemeContext = createContext(themes.light);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
