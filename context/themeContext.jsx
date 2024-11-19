import React, { createContext, useState, useEffect } from 'react';

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

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
