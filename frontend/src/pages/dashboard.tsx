// frontend/src/pages/index.tsx
import React from 'react';
import AnimeLayout from '../components/AnimeLayout';
import AnimeDashboard from '../components/AnimeDashboard';

const DashboardPage: React.FC = () => {
  return (
    <AnimeLayout>
      <AnimeDashboard />
    </AnimeLayout>
  );
};

export default DashboardPage;