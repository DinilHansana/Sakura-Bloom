import Link from "next/link";

const AnimeSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-blue-100 via-pink-100 to-white shadow-lg sticky top-0 p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-pink-600 tracking-wide">SakuraBloom</h2>
        <p className="text-gray-500 text-sm mt-1">Anime Bot Dashboard</p>
      </div>

      <nav className="flex flex-col space-y-4 text-base font-medium">
        <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors">Dashboard</Link>
        <Link href="/music" className="text-gray-700 hover:text-pink-500 transition-colors">Music</Link>
        <Link href="/moderation" className="text-gray-700 hover:text-pink-500 transition-colors">Moderation</Link>
        <Link href="/automod" className="text-gray-700 hover:text-pink-500 transition-colors">AutoMod</Link>
        <Link href="/welcome" className="text-gray-700 hover:text-pink-500 transition-colors">Welcome</Link>
        <Link href="/levels" className="text-gray-700 hover:text-pink-500 transition-colors">Levels</Link>
        <Link href="/custom-commands" className="text-gray-700 hover:text-pink-500 transition-colors">Custom Commands</Link>
        <Link href="/logging" className="text-gray-700 hover:text-pink-500 transition-colors">Logging</Link>
        <Link href="/settings" className="text-gray-700 hover:text-pink-500 transition-colors">Settings</Link>
        <Link href="/support" className="text-gray-700 hover:text-pink-500 transition-colors">Support</Link>
      </nav>

      <div className="mt-12 text-sm text-center text-gray-400">
        <p>© 2025 SakuraBloom</p>
      </div>
    </aside>
  );
};

export default AnimeSidebar;