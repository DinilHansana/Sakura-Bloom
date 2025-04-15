import React from 'react';

const AnimeCustomCommands: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-4">Custom Commands</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Create fun or utility commands to enhance your server’s interactivity.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Create commands using trigger words or phrases</li>
        <li>Use variables like {`{user}`} and {`{server}`}</li>
        <li>Send text responses, embeds, or actions</li>
        <li>Organize commands by category or role</li>
      </ul>
    </div>
  );
};

export default AnimeCustomCommands;