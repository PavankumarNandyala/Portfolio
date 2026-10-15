import Reveal from './Reveal';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal as="h2">Skills</Reveal>
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} className="sk" delay={(i % 3) * 0.08}>
              <h3>{s.group}</h3>
              <div className="pills">
                {s.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
