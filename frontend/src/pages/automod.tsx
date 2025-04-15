// frontend/src/pages/automod.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeAutoMod from '../components/AnimeAutoMod';

const AutoModPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeAutoMod />
    </AnimeLayout>
  );
};

export default AutoModPage;