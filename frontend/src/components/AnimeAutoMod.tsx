import React from 'react';

const AnimeAutoMod: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">AutoMod System</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Automatically filter messages, prevent spam, and maintain server safety.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Custom keyword filters</li>
        <li>Link and mention limits</li>
        <li>Spam protection</li>
        <li>Violation tracking and automatic punishments</li>
      </ul>
    </div>
  );
};

export default AnimeAutoMod;