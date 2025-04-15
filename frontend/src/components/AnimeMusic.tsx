// frontend/src/components/AnimeMusicToggle.tsx
import { useState } from 'react';

const AnimeMusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio('/music/track1.mp3'));

  const toggleMusic = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggleMusic}
      className="bg-blue-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded shadow ml-4 transition"
    >
      {playing ? 'Pause Music' : 'Play Music'}
    </button>
  );
};

export default AnimeMusicToggle;