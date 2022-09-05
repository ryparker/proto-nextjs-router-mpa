import { useEffect, useState } from 'react';

/**
 * Easily retrieve media dimensions with this Hook React which also works onResize.
 *
 * Note: Before Safari 14, MediaQueryList is based on EventTarget and only supports
 * addListener/removeListener for media queries. If you don't support these versions
 * you may remove these checks. Read more about this on MDN.
 *
 * @see https://usehooks-ts.com/react-hook/use-media-query
 *
 * @example
 * ```ts
 * import useMediaQuery from '@hooks/useMediaQuery'
 * export default function Component() {
 *  const matches = useMediaQuery('(min-width: 768px)')
 *  return (
 *    <div>
 *      {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
 *    </div>
 *  )
 * }
 * ```
 */
function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
