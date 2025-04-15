import React from 'react';
import Link from 'next/link';

const AnimeSupport: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4">Need Help?</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        If you're experiencing issues or need assistance with SakuraBloom, we're here for you!
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Check the <Link href="/faq" className="text-blue-500 underline">FAQ page</Link></li>
        <li>Join our <a href="https://discord.gg/support-server" target="_blank" rel="noreferrer" className="text-blue-500 underline">Support Discord</a></li>
        <li>Email us at <a href="mailto:support@sakurabloom.app" className="text-blue-500 underline">support@sakurabloom.app</a></li>
      </ul>
    </div>
  );
};

export default AnimeSupport;