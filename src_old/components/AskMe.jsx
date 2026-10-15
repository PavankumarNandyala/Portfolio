import { useState } from 'react';
import Reveal from './Reveal';
import { qa } from '../data';

export default function AskMe() {
  const [active, setActive] = useState(null); // index of selected question
  const current = active !== null ? qa[active] : null;

  return (
    <section id="ask">
      <div className="wrap">
        <Reveal as="h2">Ask about my work</Reveal>
        <Reveal className="ask">
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            Pick a question. The answer shows which part of my experience it came from.
          </p>
          <div className="chips" role="group" aria-label="Questions">
            {qa.map((item, i) => (
              <button
                key={item.q}
                type="button"
                className="chip"
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {item.q}
              </button>
            ))}
          </div>
          {/* key={active} remounts the box so the "pop" animation replays */}
          <div key={active ?? 'none'} className={`out ${current ? 'pop' : ''}`} aria-live="polite">
            {current ? (
              <>
                <span className="src">Source: {current.s}</span>
                <p style={{ margin: 0 }}>{current.a}</p>
              </>
            ) : (
              'Choose a question above.'
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
