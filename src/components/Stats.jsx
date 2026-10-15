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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5 pb-11 pt-2">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.1} className="rounded-[14px] border border-line bg-surface px-[18px] py-4">
          <b className="block font-display text-[2rem] font-extrabold leading-[1.1] text-brand">
            <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
          </b>
          <span className="text-[.9rem] text-muted">{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
