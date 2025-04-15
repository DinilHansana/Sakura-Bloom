import React from 'react';
import Link from 'next/link';
import AnimeThemeToggle from './AnimeThemeToggle';
import AnimeMusicToggle from './AnimeMusicToggle';

const features = [
  {
    title: 'Music',
    description: 'Play high quality music in your server with search and playlists.',
    link: '/music',
  },
  {
    title: 'Moderation',
    description: 'Manage roles, bans, kicks, and more using automated moderation tools.',
    link: '/moderation',
  },
  {
    title: 'AutoMod',
    description: 'Protect your server with keyword filters, anti-spam, and more.',
    link: '/automod',
  },
  {
    title: 'Welcome',
    description: 'Set up custom welcome messages and member join/leave logs.',
    link: '/welcome',
  },
  {
    title: 'Levels',
    description: 'Gamify your community with XP, levels, and leaderboard.',
    link: '/levels',
  },
  {
    title: 'Custom Commands',
    description: 'Create fun or utility commands for your community.',
    link: '/custom-commands',
  },
  {
    title: 'Logging',
    description: 'Track events like message deletes, role changes, and more.',
    link: '/logging',
  },
  {
    title: 'Settings',
    description: 'Manage bot settings, prefix, language, and more.',
    link: '/settings',
  },
];

const AnimeDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <AnimeThemeToggle />
      <AnimeMusicToggle />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {features.map((feature, idx) => (
          <Link key={idx} href={feature.link}>
            <div className="bg-white hover:bg-blue-100 transition-all p-6 rounded-lg shadow-md cursor-pointer border border-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900 dark:text-white">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeDashboard;