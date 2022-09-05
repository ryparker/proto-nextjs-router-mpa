import { MutableRefObject, useEffect, useRef, useState } from 'react';

/**
 * Detect whether the mouse is hovering an element. The hook returns a ref and a boolean value
 * indicating whether the element with that ref is currently being hovered. Just add the
 * returned ref to any element whose hover state you want to monitor. One potential bug with
 * this method: If you have logic that changes the element that hoverRef is added to then your
 * event listeners will not necessarily get applied to the new element.
 *
 * T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.
 * hook returns tuple(array) with type [any, boolean]
 *
 * @example
 * ```tsx
 * const [hoverRef, isHovered] = useOnHover<HTMLDivElement>();
 * return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
 * ```
 *
 * @see https://usehooks.com/useHover/
 */
const useOnHover = <T,>(): [MutableRefObject<T>, boolean] => {
  const [value, setValue] = useState<boolean>(false);
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(
    () => {
      const node: any = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [] // Recall only if ref changes
  );
  return [ref, value];
};

export default useOnHover;
