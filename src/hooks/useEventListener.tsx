import { useEffect, useRef } from 'react';
import { isBrowser } from '@constants';

/**
 * If you find yourself adding a lot of event listeners using useEffect you might consider
 * moving that logic to a custom hook. In this hook we create a useEventListener hook that
 * handles checking if addEventListener is supported, adding the event listener, and removal
 * on cleanup.
 *
 * @example
 * ```ts
 * useEventListener("mousemove", handler);
 * ```
 *
 * @see https://usehooks.com/useEventListener/
 */
const useEventListener = <T,>(
  eventName: string,
  handler: (args: T) => void,
  /**
   * @default window
   */
  element?: Element | Window
): void => {
  if (!element) {
    element = isBrowser ? window : ({} as Element);
  }
  // Create a ref that stores handler
  const savedHandler = useRef<typeof handler>();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      if (!element) return;
      // Make sure element supports addEventListener on
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      // @ts-expect-error TS doesn't know anything
      const eventListener = (event: Event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        if (!element) return;
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};

export default useEventListener;
