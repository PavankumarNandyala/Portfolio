import { useEffect, useState } from 'react';

const sections = [
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['ask', 'Ask me'],
  ['contact', 'Contact'],
];

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
    <header className="bar">
      <div className="wrap">
        <nav aria-label="Main">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
          <span className="sp" />
          <button type="button" onClick={toggle} aria-label="Switch colour theme">Theme</button>
        </nav>
      </div>
    </header>
  );
}
