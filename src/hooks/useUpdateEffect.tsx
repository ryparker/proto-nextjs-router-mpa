import { DependencyList, EffectCallback, useEffect } from 'react';
import useIsFirstRender from '@hooks/useIsFirstRender';

/**
 * Just modified version of useEffect that is skipping the first render.
 *
 * @see https://usehooks-ts.com/react-hook/use-update-effect
 *
 * @example
 * ```ts
 * import React, { useEffect, useState } from 'react'
 * import useUpdateEffect from '@hooks/useUpdateEffect'
 * export default function Component() {
 *  const [data, setData] = useState<number>(0)
 *  useEffect(() => {
 *    console.log('Normal useEffect', { data })
 *  }, [data])
 * useUpdateEffect(() => {
 *  console.log('Update useEffect only', { data })
 * }, [data])
 * return (
 *  <div>
 *   <p>Open your console</p>
 *    <button onClick={() => setData(Date.now())}>Update data</button>
 *   </div>
 *  )
 * }
 * ```
 */
function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
