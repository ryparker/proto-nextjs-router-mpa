import { useEffect, useState } from 'react';

// TODO: for this to replace lodash/debounce we need a cancel function.

/**
 * This hook allows you to debounce any fast changing value. The debounced value
 * will only reflect the latest value when the useDebounce hook has not been
 * called for the specified time period. When used in conjunction with useEffect,
 * as we do in the recipe below, you can easily ensure that expensive operations
 * like API calls are not executed too frequently.
 *
 * @example
 * ```ts
 * const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
 *
 * useEffect(
 *  () => {
 *    if (debouncedSearchTerm) {
 *      setIsSearching(true);
 *      searchCharacters(debouncedSearchTerm).then((results) => {
 *        setIsSearching(false);
 *        setResults(results);
 *      });
 *    } else {
 *      setResults([]);
 *    }
 *  }, [debouncedSearchTerm]
 * );
 * ```
 *
 * T is a generic type for value parameter, our case this will be string
 *
 * @see https://usehooks.com/useDebounce/
 */
const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};

export default useDebounce;
