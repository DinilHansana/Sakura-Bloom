import React from 'react';

const AnimeSettings: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-4">Settings</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Customize SakuraBloom's behavior and preferences for your server.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Change command prefix</li>
        <li>Enable/Disable specific modules</li>
        <li>Language and timezone selection</li>
        <li>Notification and logging preferences</li>
      </ul>
    </div>
  );
};

export default AnimeSettings;