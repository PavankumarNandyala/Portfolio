import Reveal from './Reveal';
import { profile } from '../data';
import { wrap, linkButton } from '../ui';

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line pb-16 pt-12">
      <div className={wrap}>
        <Reveal as="h2" className="mb-3.5 text-[2rem] font-bold">Let's talk</Reveal>
        <Reveal className="flex flex-wrap gap-2.5">
          <a href={`mailto:${profile.email}`} className={linkButton}>{profile.email}</a>
          {profile.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className={linkButton}>{p.label}</a>
          ))}
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={linkButton}>{l.label}</a>
          ))}
        </Reveal>
      </div>
    </footer>
  );
}
