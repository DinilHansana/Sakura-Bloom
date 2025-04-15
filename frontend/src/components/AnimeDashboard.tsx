import React from 'react';

const AnimeDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to SakuraBloom Dashboard</h2>
      <p className="text-gray-600">
        Here you can manage all your server features including music, moderation, levels, automod, welcome system, logging, and more!
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Music', description: 'Manage music playback, playlists, and search.', route: '/music' },
          { title: 'Moderation', description: 'Configure bans, kicks, timeouts, and auto-mod.', route: '/moderation' },
          { title: 'Levels', description: 'Customize your leveling and XP system.', route: '/levels' },
          { title: 'Welcome', description: 'Set welcome messages, channels, and roles.', route: '/welcome' },
          { title: 'Logging', description: 'Enable server logs for moderation, joins, and more.', route: '/logging' },
          { title: 'Settings', description: 'Configure your bot’s core settings and prefix.', route: '/settings' },
        ].map((card) => (
          <a
            key={card.title}
            href={card.route}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnimeDashboard;