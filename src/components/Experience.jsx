import Reveal from './Reveal';
import { useInView } from '../hooks/useInView';
import { experience } from '../data';
import { wrap, section, heading } from '../ui';

// Timeline dot, drawn with Tailwind's before: variant.
const dot =
  "relative pb-[30px] before:absolute before:-left-[26px] before:top-[7px] before:h-3 before:w-3 " +
  "before:rounded-full before:border-[3px] before:border-brand before:bg-surface before:content-['']";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className={section}>
      <div className={wrap}>
        <Reveal as="h2" className={heading}>Experience</Reveal>

        <div ref={ref} className="relative pl-[26px]">
          {/* Vertical line "draws" downward when the timeline comes into view */}
          <span
            className={`absolute bottom-1.5 left-[5px] top-1.5 w-0.5 origin-top bg-gradient-to-b from-brand to-accent transition-transform duration-[1400ms] ease-out ${
              inView ? 'scale-y-100' : 'scale-y-0 motion-reduce:scale-y-100'
            }`}
          />
          <ol className="m-0 list-none p-0">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.title} delay={i * 0.12} className={dot}>
                <h3 className="text-[1.3rem] font-bold">{job.title}</h3>
                <p className="mb-2 mt-0.5 text-[.92rem] text-muted">{job.meta}</p>
                <ul className="m-0 list-disc pl-[18px]">
                  {job.points.map((pt) => <li key={pt} className="pb-1">{pt}</li>)}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
