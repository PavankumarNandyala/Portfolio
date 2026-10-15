import Reveal from './Reveal';
import { profile } from '../data';

export default function Contact() {
  return (
    <footer id="contact">
      <div className="wrap">
        <Reveal as="h2">Let's talk</Reveal>
        <Reveal className="links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>
          ))}
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </Reveal>
      </div>
    </footer>
  );
}
