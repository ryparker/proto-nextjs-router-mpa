import { useEffect, useState } from 'react';

export type Status = 'idle' | 'loading' | 'ready' | 'error';
export type ScriptElt = HTMLScriptElement | null;

/**
 * Dynamically load an external script in one line with this React hook.
 *
 * This can be useful to integrate a third party library like Google Analytics
 * or Stripe.
 *
 * This avoids loading this script in the <head> </head> on all your pages if it
 * is not necessary.
 *
 * @see https://usehooks-ts.com/react-hook/use-script
 *
 * @example
 * ```ts
 * import React, { useEffect } from 'react'
 * import useScript from '@hooks/useScript'
 * // it's an example, use your types instead
 * // eslint-disable-next-line @typescript-eslint/no-explicit-any
 * declare const jQuery: any
 * export default function Component() {
 *  // Load the script asynchronously
 *  const status = useScript(`https://code.jquery.com/jquery-3.5.1.min.js`)
 *  useEffect(() => {
 *    if (typeof jQuery !== 'undefined') {
 *      // jQuery is loaded => print the version
 *      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
 *      alert(jQuery.fn.jquery)
 *    }
 *  }, [status])
 *  return (
 *    <div>
 *      <p>{`Current status: ${status}`}</p>
 *      {status === 'ready' && <p>You can use the script here.</p>}
 *    </div>
 *  )
 * }
 * ```
 */
function useScript(src: string): Status {
  const [status, setStatus] = useState<Status>(src ? 'loading' : 'idle');

  useEffect(
    () => {
      if (!src) {
        setStatus('idle');
        return;
      }

      // Fetch existing script element by src
      // It may have been added by another instance of this hook
      let script: ScriptElt = document.querySelector(`script[src="${src}"]`);

      if (!script) {
        // Create script
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.setAttribute('data-status', 'loading');
        // Add script to document body
        document.body.appendChild(script);

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event: Event) => {
          script?.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          );
        };

        script.addEventListener('load', setAttributeFromEvent);
        script.addEventListener('error', setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status') as Status);
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: Event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };

      // Add event listeners
      script.addEventListener('load', setStateFromEvent);
      script.addEventListener('error', setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent);
          script.removeEventListener('error', setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );

  return status;
}

export default useScript;
