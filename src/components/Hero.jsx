import Typewriter from './Typewriter';
import { profile } from '../data';
import { enter, enterDelay } from '../ui';

const ring = 'absolute -inset-2 rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,var(--a1),var(--a2),var(--a1))]';

export default function Hero() {
  return (
    <div className="relative isolate grid grid-cols-1 items-center gap-10 pb-12 pt-14 md:grid-cols-[1.2fr_1fr]">
      {/* Soft floating background blobs */}
      <span className="absolute -right-[60px] top-0 -z-10 h-[340px] w-[340px] animate-float rounded-full bg-[var(--glow)] opacity-90 blur-[70px]" />
      <span className="absolute -bottom-10 -left-20 -z-10 h-[260px] w-[260px] animate-float rounded-full bg-[rgba(18,184,134,.14)] opacity-90 blur-[70px] [animation-delay:-5s]" />

      <div>
        <p className={`${enter} mb-2.5 mt-0 font-semibold text-brand`} style={enterDelay(0.1)}>
          Hello, I'm <span aria-hidden="true" className="inline-block origin-[70%_70%] animate-wave">👋</span>
        </p>

        <h1
          className={`${enter} bg-gradient-to-r from-ink from-40% to-brand bg-clip-text text-[clamp(2.6rem,7.5vw,4.8rem)] font-extrabold tracking-[-0.035em] text-transparent`}
          style={enterDelay(0.25)}
        >
          {profile.name}
        </h1>

        <p className={`${enter} mb-2.5 mt-4 min-h-[1.9em] text-xl font-semibold`} style={enterDelay(0.4)}>
          <Typewriter words={profile.roles} />
        </p>

        <p className={`${enter} mb-[22px] mt-0 max-w-[50ch] text-muted`} style={enterDelay(0.55)}>
          {profile.intro}
        </p>

        <div className={`${enter} mb-5 flex flex-wrap gap-2.5`} style={enterDelay(0.7)}>
          <a href="#projects" className="rounded-[10px] bg-gradient-to-r from-brand to-accent px-5 py-[11px] font-semibold text-on no-underline transition duration-200 hover:-translate-y-[3px] hover:shadow-glow">
            See my projects
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-[10px] border border-brand px-5 py-[11px] font-semibold no-underline transition duration-200 hover:-translate-y-[3px] hover:shadow-glow">
            Email me
          </a>
        </div>

        <div className={`${enter} flex flex-wrap gap-2.5`} style={enterDelay(0.85)}>
          {profile.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[.92rem] font-medium text-ink no-underline transition-colors hover:border-brand">
              {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* Photo with a spinning gradient ring and a blurred glow behind it */}
      <div className={`${enter} relative order-first mx-auto aspect-square w-[min(320px,78vw)] md:order-none`} style={enterDelay(0.3)}>
        <div className={`${ring} opacity-35 blur-[22px]`} />
        <div className={ring} />
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="520"
          height="520"
          className="relative block h-full w-full rounded-full border-[6px] border-page object-cover"
        />
      </div>
    </div>
  );
}
