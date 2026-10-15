import Reveal from './Reveal';
import { projects } from '../data';
import { wrap, section, heading } from '../ui';

export default function Projects() {
  return (
    <section id="projects" className={section}>
      <div className={wrap}>
        <Reveal as="h2" className={heading}>Projects</Reveal>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {projects.map((p, i) => (
            // Reveal handles the scroll-in; the inner card has its own hover transition
            <Reveal key={p.title} delay={i * 0.15}>
              <article className="h-full rounded-2xl border border-line bg-surface p-[22px] transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-glow-lg">
                <h3 className="mb-1.5 text-[1.25rem] font-bold">{p.title}</h3>
                <p className="m-0 text-[.88rem] text-muted">{p.tags}</p>
                <ul className="mb-0 mt-2.5 list-disc pl-[18px]">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
