import { useEffect, useState } from 'react';

/**
 * Get the mouse coordinates relative to the window.
 *
 * @see https://bobbyhadz.com/blog/react-get-mouse-position
 *
 * @example
 * ```
 * const globalCoords = useMouseCoords();
 * console.log(globalCoords.x, globalCoords.y);
 * ```
 */
const useMouseCoords = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  return globalCoords;
};

export default useMouseCoords;
