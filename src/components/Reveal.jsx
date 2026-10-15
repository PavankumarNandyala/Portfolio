import { useInView } from '../hooks/useInView';

// Wraps any element so it fades up when scrolled into view.
// `as` picks the tag, `delay` staggers siblings (seconds).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`rv ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
