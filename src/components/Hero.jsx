import Typewriter from './Typewriter';
import { profile } from '../data';

export default function Hero() {
  return (
    <div className="hero">
      <span className="blob b1" />
      <span className="blob b2" />
      <div>
        <p className="kicker ld" style={{ '--d': '.1s' }}>
          Hello, I'm <span className="hi" aria-hidden="true">👋</span>
        </p>
        <h1 className="ld" style={{ '--d': '.25s' }}>{profile.name}</h1>
        <p className="role ld" style={{ '--d': '.4s' }}>
          <Typewriter words={profile.roles} />
        </p>
        <p className="lede ld" style={{ '--d': '.55s' }}>{profile.intro}</p>
        <div className="btns ld" style={{ '--d': '.7s' }}>
          <a className="btn p" href="#projects">See my projects</a>
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
        </div>
        <div className="phones ld" style={{ '--d': '.85s' }}>
          {profile.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>
          ))}
        </div>
      </div>
      <div className="pic ld" style={{ '--d': '.3s' }}>
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="520" height="520" />
      </div>
    </div>
  );
}
