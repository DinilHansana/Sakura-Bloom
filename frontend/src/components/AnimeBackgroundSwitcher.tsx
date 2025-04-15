// frontend/src/components/AnimeBackgroundSwitcher.tsx
import React, { useState, useEffect } from 'react';

const AnimeBackgroundSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<'day' | 'night'>('day');

  useEffect(() => {
    const image = theme === 'day' ? 'sakura_day.jpg' : 'sakura_night.jpg';
    document.body.style.backgroundImage = `url('/src/assets/${image}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.transition = 'background-image 0.5s ease-in-out';
  }, [theme]);

  return (
    <div className="flex items-center gap-4 p-2 bg-white rounded shadow w-fit">
      <span className="text-gray-700">Background:</span>
      <button
        onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
        className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-all"
      >
        {theme === 'day' ? 'Switch to Night' : 'Switch to Day'}
      </button>
    </div>
  );
};

export default AnimeBackgroundSwitcher;