import { useEffect, useState } from 'react';

export default function useMultiKeyPress() {
  const [keysPressed, setKeyPressed] = useState(new Set<string>([]));

  function downHandler({ key }: { key: string }) {
    setKeyPressed(keysPressed.add(key));
  }

  const upHandler = ({ key }: { key: string }) => {
    keysPressed.delete(key);
    setKeyPressed(keysPressed);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keysPressed;
}
