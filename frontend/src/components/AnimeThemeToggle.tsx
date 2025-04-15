// frontend/src/components/AnimeThemeToggle.tsx
import { useEffect, useState } from 'react';

const AnimeThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-pink-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded shadow transition"
    >
      {dark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default AnimeThemeToggle;