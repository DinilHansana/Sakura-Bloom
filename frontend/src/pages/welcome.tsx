// frontend/src/pages/welcome.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeWelcome from '../components/AnimeWelcome';

const WelcomePage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeWelcome />
    </AnimeLayout>
  );
};

export default WelcomePage;