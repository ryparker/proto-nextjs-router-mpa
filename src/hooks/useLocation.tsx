import { useState, useEffect } from 'react';

function getCurrentLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
  };
}

const listeners: Array<() => void> = [];

/**
 * Notifies all location listeners. Can be used if the history state has been
 * manipulated in by another module. Effectively, all components using the
 * 'useLocation' hook will update.
 */
export function notify() {
  listeners.forEach((listener) => listener());
}

/**
 * React Hook for accessing the current location in Next.js without
 * triggering a full page re-render
 */
export default function useLocation() {
  const isWindowAvailable = typeof window !== 'undefined';

  const [location, setLocation] = useState<Record<string, any>>(
    isWindowAvailable ? getCurrentLocation() : {}
  );

  useEffect(() => {
    window.addEventListener('popstate', handleChange);
    return () => window.removeEventListener('popstate', handleChange);
  }, []);

  // @ts-expect-error - w/e
  useEffect(() => {
    listeners.push(handleChange);
    return () => listeners.splice(listeners.indexOf(handleChange), 1);
  }, []);

  function handleChange() {
    setLocation(getCurrentLocation());
  }

  function push(url: string) {
    window.history.pushState(null, '', url);
    notify();
  }

  function replace(url: string) {
    window.history.replaceState(null, '', url);
    notify();
  }

  return {
    push,
    replace,
    pathname: location?.pathname || '',
    search: location?.search || '',
  };
}
