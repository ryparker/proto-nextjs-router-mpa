import { useEffect, useState } from 'react';
import useHasMounted from '@hooks/useHasMounted';

/**
 * This hook makes it super easy to utilize media queries in your
 * component logic. In our example below we render a different number
 * of columns depending on which media query matches the current screen
 * width, and then distribute images amongst the columns in a way that
 * limits column height difference (we don't want one column way longer
 * than the rest).
 *
 * @example
 * ```ts
 * const columnCount = useMedia(
 *   ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
 *   [5, 4, 3],
 *   2
 * );
 * ```
 *
 * @see https://usehooks.com/useMedia/
 */
const useMedia = <T,>(
  /**
   * Array containing a media query list for each query
   */
  queries: string[],
  /**
   * Column counts (relates to above media queries by array index)
   */
  values: T[],
  /**
   * Default column count
   */
  defaultValue: T
) => {
  const hasMounted = useHasMounted();
  const [mediaQueryLists, setMediaQueryLists] = useState<MediaQueryList[]>();

  if (hasMounted) {
    setMediaQueryLists(queries.map((q) => window.matchMedia(q)));
  }

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists?.findIndex((mql) => mql.matches);
    // Return related value or defaultValue if none
    return index ? values?.[index] || defaultValue : defaultValue;
  };

  // State and setter for matched value
  const [value, setValue] = useState<T>(getValue);
  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists?.forEach((mql) =>
        mql.addEventListener('change', handler)
      );
      return () =>
        mediaQueryLists?.forEach((mql) =>
          mql.addEventListener('change', handler)
        );
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return value;
};

export default useMedia;
