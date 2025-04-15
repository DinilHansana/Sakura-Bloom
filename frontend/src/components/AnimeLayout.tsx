// frontend/src/components/AnimeLayout.tsx
import React from 'react';
import AnimeNavbar from './AnimeNavbar';
import AnimeSidebar from './AnimeSidebar';

type Props = {
  children: React.ReactNode;
};

const AnimeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-50 to-blue-50 overflow-hidden">
      <AnimeSidebar />
      <div className="flex-1 overflow-auto">
        <AnimeNavbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AnimeLayout;
