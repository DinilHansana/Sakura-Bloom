// frontend/src/pages/logging.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeLogging from '../components/AnimeLogging';

const LoggingPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeLogging />
    </AnimeLayout>
  );
};

export default LoggingPage;