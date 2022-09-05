import { useEffect, useState } from 'react';

/**
 * This hook makes it easy to detect when the user is pressing a specific
 * key on their keyboard.
 *
 * @example
 * ```ts
 * const happyPress: boolean = useKeyPress("h");
 * ```
 *
 * @see https://usehooks.com/useKeyPress/
 */
const useKeyPress = (
  targetKey: string,
  config?: {
    metaKey?: boolean;
    ctrlKey?: boolean;
  }
): boolean => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({
    key,
    metaKey,
    ctrlKey,
  }: {
    key: string;
    metaKey?: boolean;
    ctrlKey?: boolean;
  }): void {
    if (
      key === targetKey &&
      (!Boolean(config?.metaKey) || metaKey) &&
      (!Boolean(config?.ctrlKey) || ctrlKey)
    ) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({
    key,
    metaKey,
    ctrlKey,
  }: {
    key: string;
    metaKey?: boolean;
    ctrlKey?: boolean;
  }): void => {
    if (
      key === targetKey || Boolean(config?.metaKey) ? key === 'Meta' : false
    ) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
};

export default useKeyPress;
