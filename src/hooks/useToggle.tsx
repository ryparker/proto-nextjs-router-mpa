import { useCallback, useState } from 'react';

/**
 * This hook takes a parameter with value true or false and toggles that value to
 * opposite. It uses useCallback to memorize input:outputs. It's useful when we
 * want to take some action into it's opposite action, for example: show and hide
 * modal, show more/show less text, open/close side menu.
 *
 * @example
 * ```ts
 * const [isTextChanged, setIsTextChanged] = useToggle();
 * ```
 *
 * @see https://usehooks.com/useToggle/
 */
const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export default useToggle;
