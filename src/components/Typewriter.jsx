import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Types each word, pauses, deletes it, then moves to the next.
export default function Typewriter({ words, typeMs = 70, deleteMs = 35, holdMs = 1600, startDelay = 2200 }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);              // which word
  const [chars, setChars] = useState(words[0].length); // how many letters shown
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  // Show the first word in full for a moment before animating.
  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => { setStarted(true); setDeleting(true); }, startDelay);
    return () => clearTimeout(t);
  }, [reduced, startDelay]);

  useEffect(() => {
    if (reduced || !started) return;
    const word = words[index];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && chars === word.length) delay = holdMs;
    else if (deleting && chars === 0) delay = 350;

    const t = setTimeout(() => {
      if (!deleting && chars === word.length) setDeleting(true);
      else if (deleting && chars === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setChars((c) => c + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [chars, deleting, index, started, reduced, words, typeMs, deleteMs, holdMs]);

  return (
    <>
      <span>{words[index].slice(0, chars)}</span>
      <span aria-hidden="true" className="ml-[3px] inline-block h-[1.1em] w-0.5 animate-blink bg-accent align-[-3px]" />
    </>
  );
}
