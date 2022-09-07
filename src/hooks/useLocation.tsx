import { useState, useEffect } from 'react';

function getCurrentLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
  };
}

const listeners: Array<() => void> = [];

/**
 * Notifies all location listeners. Can be used if the history state has been manipulated
 * in by another module. Effectively, all components using the 'useLocation' hook will
 * update.
 */
export function notify() {
  listeners.forEach((listener) => listener());
}

export default function useLocation() {
  const [{ pathname, search }, setLocation] = useState(getCurrentLocation());

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
    pathname,
    search,
  };
}
