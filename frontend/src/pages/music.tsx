// frontend/src/pages/music.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeMusic from '../components/AnimeMusic';

const MusicPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeMusic />
    </AnimeLayout>
  );
};

export default MusicPage;