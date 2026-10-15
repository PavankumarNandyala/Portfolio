import Reveal from './Reveal';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal as="h2">Projects</Reveal>
        <div className="proj">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.title} className="card" delay={i * 0.15}>
              <h3>{p.title}</h3>
              <p className="tags">{p.tags}</p>
              <ul>
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
