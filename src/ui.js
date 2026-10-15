// Class strings reused across components, so the same look is defined once.

export const wrap = 'mx-auto max-w-[1000px] px-5';

export const section = 'border-t border-line py-12';

export const heading = 'mb-[26px] text-[clamp(1.8rem,4vw,2.4rem)] font-bold';

// Hero elements slide up on page load; set the delay with enterDelay().
export const enter = 'opacity-0 animate-up motion-reduce:opacity-100';
export const enterDelay = (s) => ({ animationDelay: `${s}s` });

export const pill =
  'rounded-full border border-line bg-surface px-[11px] py-[3px] text-[.86rem] transition duration-200 ' +
  'hover:-translate-y-[3px] hover:border-brand hover:bg-brand hover:text-on';

export const linkButton =
  'rounded-[10px] border border-line bg-surface px-4 py-[9px] font-medium text-ink no-underline ' +
  'transition duration-200 hover:-translate-y-[3px] hover:border-brand';
