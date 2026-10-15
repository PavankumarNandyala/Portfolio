import { useState } from 'react';
import Reveal from './Reveal';
import { qa } from '../data';
import { wrap, section, heading } from '../ui';

export default function AskMe() {
  const [active, setActive] = useState(null); // index of selected question
  const current = active !== null ? qa[active] : null;

  return (
    <section id="ask" className={section}>
      <div className={wrap}>
        <Reveal as="h2" className={heading}>Ask about my work</Reveal>
        <Reveal className="max-w-[640px] rounded-2xl border border-line bg-surface p-[22px]">
          <p className="m-0 text-muted">
            Pick a question. The answer shows which part of my experience it came from.
          </p>

          <div className="my-3 flex flex-wrap gap-2" role="group" aria-label="Questions">
            {qa.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.q}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer rounded-full border px-[13px] py-1.5 text-[.88rem] transition-transform duration-200 hover:-translate-y-0.5 ${
                    on ? 'border-brand bg-brand text-on' : 'border-line bg-page text-ink'
                  }`}
                >
                  {item.q}
                </button>
              );
            })}
          </div>

          {/* key={active} remounts the box so the pop animation replays on each click */}
          <div
            key={active ?? 'none'}
            aria-live="polite"
            className={`min-h-[120px] border-t border-dashed border-line pt-3 ${current ? 'animate-pop' : ''}`}
          >
            {current ? (
              <>
                <span className="mb-2 inline-block rounded-md bg-[rgba(18,184,134,.16)] px-[9px] py-0.5 text-[.82rem] font-semibold text-accent">
                  Source: {current.s}
                </span>
                <p className="m-0">{current.a}</p>
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
