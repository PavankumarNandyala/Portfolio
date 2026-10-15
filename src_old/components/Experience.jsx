import Reveal from './Reveal';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal as="h2">Experience</Reveal>
        {/* className "tl" + "in" draws the vertical line via CSS */}
        <Reveal as="ol" className="tl">
          {experience.map((job) => (
            <li key={job.title}>
              <h3>{job.title}</h3>
              <p className="meta">{job.meta}</p>
              <ul>
                {job.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
