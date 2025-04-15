// frontend/src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'light' | 'dark';
type Background = 'sakura_day' | 'sakura_night' | 'anime_city';

interface ThemeContextType {
  theme: Theme;
  background: Background;
  toggleTheme: () => void;
  setBackground: (bg: Background) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [background, setBackgroundState] = useState<Background>('sakura_day');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setBackground = (bg: Background) => {
    setBackgroundState(bg);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, background, toggleTheme, setBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};