// frontend/src/components/AnimeMusicToggle.tsx
import React, { useEffect, useState, useRef } from 'react';

const tracks = [
  {
    name: 'Your Lie in April - Again',
    src: '/tracks/again.mp3',
  },
  {
    name: 'Your Name - Sparkle',
    src: '/tracks/sparkle.mp3',
  },
  {
    name: 'A Silent Voice - Lit',
    src: '/tracks/lit.mp3',
  },
];

const AnimeMusicToggle: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (playing) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <div className="bg-white bg-opacity-60 p-4 rounded shadow-md max-w-sm mx-auto mt-6 text-center">
      <h3 className="text-lg font-semibold mb-2">Now Playing:</h3>
      <p className="mb-2 text-blue-700">{tracks[currentTrack].name}</p>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={togglePlay}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={nextTrack}
          className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
        >
          Next
        </button>
      </div>

      <audio ref={audioRef}>
        <source src={tracks[currentTrack].src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AnimeMusicToggle;