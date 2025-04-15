// frontend/src/pages/levels.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeLevels from '../components/AnimeLevels';

const LevelsPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeLevels />
    </AnimeLayout>
  );
};

export default LevelsPage;