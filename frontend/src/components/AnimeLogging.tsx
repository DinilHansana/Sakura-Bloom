import React from 'react';

const AnimeLogging: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4">Logging</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Keep track of important server activities and events.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Log message deletions and edits</li>
        <li>Track user bans, kicks, and joins/leaves</li>
        <li>Monitor role and channel changes</li>
        <li>Customizable log channels per category</li>
      </ul>
    </div>
  );
};

export default AnimeLogging;