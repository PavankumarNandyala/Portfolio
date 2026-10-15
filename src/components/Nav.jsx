import { useEffect, useState } from 'react';
import { wrap } from '../ui';

const sections = [
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['ask', 'Ask me'],
  ['contact', 'Contact'],
];

// Gradient underline that grows on hover, built with Tailwind's after: variant.
const navLink =
  'relative font-medium text-ink no-underline ' +
  'after:absolute after:-bottom-[3px] after:left-0 after:h-0.5 after:w-0 ' +
  'after:bg-gradient-to-r after:from-brand after:to-accent after:transition-[width] after:duration-300 ' +
  'hover:after:w-full';

export default function Nav() {
  // null = follow the OS setting; 'light' | 'dark' = user override
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute('data-theme', theme);
    else root.removeAttribute('data-theme');
  }, [theme]);

  const toggle = () => {
    const isDark = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md">
      <div className={wrap}>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-5 py-3">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={navLink}>{label}</a>
          ))}
          <span className="flex-1" />
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch colour theme"
            className="cursor-pointer rounded-lg border border-line bg-surface px-3 py-1.5 text-ink"
          >
            Theme
          </button>
        </nav>
      </div>
    </header>
  );
}
