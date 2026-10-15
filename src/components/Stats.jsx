import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { stats } from '../data';

// Counts from 0 to `to` with an ease-out curve once visible.
function CountUp({ to, suffix = '', decimals = 0, duration = 1400 }) {
  const [ref, inView] = useInView(0.6);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setValue(to); setDone(true); return; }
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setValue(to * (1 - Math.pow(1 - p, 3))); // easeOutCubic
      if (p < 1) raf = requestAnimationFrame(step);
      else setDone(true);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration]);

  const text = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-GB');
  return <i ref={ref}>{text}{done ? suffix : ''}</i>;
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <Reveal key={s.label} className="stat" delay={i * 0.1}>
          <b><CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} /></b>
          <span>{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
