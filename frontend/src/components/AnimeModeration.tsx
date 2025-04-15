import React from 'react';

const AnimeModeration: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Moderation Tools</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Manage your server efficiently with automated moderation tools.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Ban, kick, and timeout commands</li>
        <li>Message filtering and spam control</li>
        <li>Role-based permissions</li>
        <li>Auto-warnings and logs</li>
      </ul>
    </div>
  );
};

export default AnimeModeration;