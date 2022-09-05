import { MutableRefObject, useEffect, useLayoutEffect, useState } from 'react';
import useHasMounted from '@hooks/useHasMounted';

/**
 * Takes a component ref and returns the scroll `start`, `middle` and `end`
 * percentages that are relative to the elements total document progress.
 *
 * @example
 * ```ts
 * const FadingText = ({ children }: { children: React.ReactNode }) => {
 *  const ref = useRef<HTMLDivElement>(null);
 *  const { start, middle, end } = useRefScrollProgress(ref);
 *  const { scrollYProgress } = useViewportScroll();
 *  const opacity = useTransform(
 *    scrollYProgress, [start, middle, end], [0.1, 1, 0.1]
 *  );
 *
 *  return (
 *    <motion.div
 *      ref={ref}
 *      style={{
 *        opacity,
 *      }}
 *    >
 *      {children}
 *    </motion.div>
 *   );
 * }
 * ```
 *
 * @see https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll
 */
const useRefScrollProgress = (inputRef: MutableRefObject<any>) => {
  const hasMounted = useHasMounted();
  const [start, setStart] = useState<number>(0);
  const [middle, setMiddle] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);

  // This is a workaround for a bug in framer-motion, it should be fixed in the next release >6.2.7
  // https://github.com/framer/motion/issues/578
  const useIsomorphicLayoutEffect = useLayoutEffect;

  useIsomorphicLayoutEffect(() => {
    if (!inputRef.current) {
      return;
    }
    const rect = inputRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    const windowHeight = window.innerHeight;
    const derivedHeight = document.body.clientHeight - windowHeight;
    const offsetStartWindow = offsetTop - windowHeight;
    const offsetMiddleWindow = offsetTop - windowHeight / 2;
    const offsetEndWindow = offsetTop;
    setStart(offsetStartWindow / derivedHeight);
    setMiddle(offsetMiddleWindow / derivedHeight);
    setEnd(offsetEndWindow / derivedHeight);
  }, [inputRef]);
  return { start, middle, end };
};

export default useRefScrollProgress;
