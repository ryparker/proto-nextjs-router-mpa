import { MutableRefObject, useEffect, useState } from 'react';

/**
 * This hook allows you to easily detect when an element is visible on the screen
 * as well as specify how much of the element should be visible before being
 * considered on screen. Perfect for lazy loading images or triggering animations
 * when the user has scrolled down to a particular section.
 *
 * @see https://usehooks.com/useOnScreen/
 * @example
 * ```ts
 *  const ref: any = useRef<HTMLDivElement>();
 *  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-300px');
 *  return (
 *    <div>
 *      <div style={{ height: '100vh' }}>
 *        <h1>Scroll down to next section 👇</h1>
 *      </div>
 *      <div
 *        ref={ref}
 *        style={{
 *          height: '100vh',
 *         backgroundColor: onScreen ? '#23cebd' : '#efefef',
 *        }}
 *      >
 *      {onScreen ? (
 *       <div>
 *         <h1>Hey I'm on the screen</h1>
 *         <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
 *        </div>
 *      ) : (
 *        <h1>Scroll down 300px from the top of this section 👇</h1>
 *      )}
 *      </div>
 *    </div>
 *  );
 * }
 * ```
 */
const useOnScreen = <T extends Element>(
  /**
   * Ref for the element that we want to detect whether on screen.
   */
  ref: MutableRefObject<T>,
  /**
   * The amount of the element that should be visible before we consider it on screen.
   *
   *`"-300px"` would mean that more than 300px of the element must be visible before it is considered on screen.
   * @example "-300px"
   * @default "0px"
   */
  rootMargin: string = '0px'
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      observer.unobserve(refCurrent);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};

export default useOnScreen;
