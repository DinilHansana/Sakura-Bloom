// frontend/src/pages/custom-commands.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeCustomCommands from '../components/AnimeCustomCommands';

const CustomCommandsPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeCustomCommands />
    </AnimeLayout>
  );
};

export default CustomCommandsPage;