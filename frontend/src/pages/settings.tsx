// frontend/src/pages/settings.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeSettings from '../components/AnimeSettings';

const SettingsPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeSettings />
    </AnimeLayout>
  );
};

export default SettingsPage;