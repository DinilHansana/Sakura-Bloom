import React from 'react';

const AnimeLevels: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4">Levels & XP</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Reward activity and engagement with XP and a customizable leveling system.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Track user activity and assign XP</li>
        <li>Showcase ranks and levels on leaderboard</li>
        <li>Customize level-up messages and rewards</li>
        <li>Prevent XP farming with cooldowns</li>
      </ul>
    </div>
  );
};

export default AnimeLevels;