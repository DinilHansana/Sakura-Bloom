// frontend/src/components/AnimeSidebar.tsx
import Link from 'next/link';

const sidebarItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Music', href: '/music' },
  { label: 'Moderation', href: '/moderation' },
  { label: 'AutoMod', href: '/automod' },
  { label: 'Welcome', href: '/welcome' },
  { label: 'Levels', href: '/levels' },
  { label: 'Custom Commands', href: '/custom-commands' },
  { label: 'Logging', href: '/logging' },
  { label: 'Settings', href: '/settings' },
  { label: 'Support', href: '/support' },
];

const AnimeSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 shadow-md p-4 hidden md:block sticky top-0 overflow-y-auto">
      <nav>
        <ul className="space-y-4">
          {sidebarItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="text-blue-700 dark:text-blue-300 hover:underline block">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AnimeSidebar;