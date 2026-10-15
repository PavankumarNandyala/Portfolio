import Reveal from './Reveal';
import { skills } from '../data';
import { wrap, section, heading, pill } from '../ui';

export default function Skills() {
  return (
    <section id="skills" className={section}>
      <div className={wrap}>
        <Reveal as="h2" className={heading}>Skills</Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.08}>
              <h3 className="mb-2 text-[1.05rem] font-bold">{s.group}</h3>
              <div className="flex flex-wrap gap-[7px]">
                {s.items.map((item) => <span key={item} className={pill}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
