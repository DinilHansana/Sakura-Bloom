// frontend/src/components/AnimeNavbar.tsx
import Link from 'next/link';

const AnimeNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-300 via-blue-200 to-pink-200 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">SakuraBloom</h1>
      <ul className="flex space-x-4 text-gray-800 font-semibold">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/music">Music</Link>
        </li>
        <li>
          <Link href="/moderation">Moderation</Link>
        </li>
        <li>
          <Link href="/automod">AutoMod</Link>
        </li>
        <li>
          <Link href="/welcome">Welcome</Link>
        </li>
        <li>
          <Link href="/levels">Levels</Link>
        </li>
        <li>
          <Link href="/custom-commands">Custom Commands</Link>
        </li>
        <li>
          <Link href="/logging">Logging</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AnimeNavbar;