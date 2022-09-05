import { EffectCallback, useEffect, useRef } from 'react';

/**
 * Just modified version of useEffect that's executed only one time, at the mounting time.
 *
 * @see https://usehooks-ts.com/react-hook/use-effect-once
 *
 * @example
 * ```ts
 * import React, { useEffect, useState } from 'react'
 * import useEffectOnce from '@hooks/useEffectOnce'
 * export default function Component() {
 *  const [data, setData] = useState<number>(0)
 *  useEffect(() => {
 *    console.log('Normal useEffect', { data })
 *  }, [data])
 *  useEffectOnce(() => {
 *    console.log('Triggered only once, on mount', { data })
 *  })
 *  return (
 *    <div>
 *      <p>Open your console</p>
 *      <button onClick={() => setData(Date.now())}>Update data</button>
 *    </div>
 *  )
 * }
 * ```
 */
function useEffectOnce(effect: EffectCallback) {
  const destroyFunc = useRef<void | any>();
  const calledOnce = useRef(false);
  const renderAfterCalled = useRef(false);

  if (calledOnce.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    calledOnce.current = true;
    destroyFunc.current = effect();

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }

      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
}

export default useEffectOnce;
