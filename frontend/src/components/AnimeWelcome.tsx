import React from 'react';

const AnimeWelcome: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-4">Welcome System</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Customize how new members are greeted when they join your server.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Set welcome channel and message</li>
        <li>Send image or embed greetings</li>
        <li>Goodbye messages on leave</li>
        <li>Auto-role assignment for newcomers</li>
      </ul>
    </div>
  );
};

export default AnimeWelcome;