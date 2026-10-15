import { useInView } from '../hooks/useInView';

// Fades children up when scrolled into view.
// `as` picks the tag, `delay` staggers siblings (seconds).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  const state = inView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-[26px] motion-reduce:opacity-100 motion-reduce:translate-y-0';

  return (
    <Tag
      ref={ref}
      className={`transition duration-700 ease-out ${state} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
