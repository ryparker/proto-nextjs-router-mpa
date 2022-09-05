import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { isEqual as _isEqual } from 'lodash';

/**
 * This hook is used to get and set the URL query parameters using
 * next/router.
 *
 * @example
 * ```ts
 * const [urlQueryParams, setUrlQueryParams] = useShallowRouting('/bills');
 *
 * useEffect(() => {
 *  if (urlQueryParams.chamber)
 *    setChamber((urlQueryParams.chamber as string) || '');
 *  if (urlQueryParams.offset)
 *    setOffset(parseInt(urlQueryParams.offset as string, 10) || 0);
 *  memoFetchData({chamber});
 * }, [urlQueryParams]);
 *
 * useEffect(() => {
 *  setUrlQueryParams({ chamber, offset });
 * }, [chamber, offset]);
 *
 * return(<Component {chamberData} />)
 * ```
 *
 * @see https://github.com/vercel/next.js/discussions/11484
 * @see https://nextjs.org/docs/routing/shallow-routing
 */
const useShallowRouting = <T extends Record<string, string | undefined>>(
  /**
   * The base path of the route. This will be prepended to the route path.
   *
   * @example
   * If URL is "usacounts.com/bills" then "/bills" is the base path.
   */
  basePath: string
) => {
  const router = useRouter();
  const [urlQueryParams, setParams] = useState<Record<string, any>>(
    router.query || {}
  );

  const getUrlQueryParams = useMemo(() => {
    const dummyUrl = new URL(`https://example.com${router.asPath}`);
    if (dummyUrl.search.length <= 0) return {} as T;
    return Object.fromEntries(
      new URLSearchParams(dummyUrl.search).entries()
    ) as T;
  }, [router.asPath]);

  useEffect(() => {
    if (!router.isReady) return;
    setParams(getUrlQueryParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath, router.isReady]);

  const setUrlQueryParams = (queryObj: Record<string, any>) => {
    if (!router.isReady) return;
    if (_isEqual(queryObj, urlQueryParams)) return;
    let queryParamStrings = [];
    for (const key in queryObj) {
      if (queryObj[key]) {
        queryParamStrings.push(`${key}=${queryObj[key]}`);
      }
    }
    const path = `${basePath}?${queryParamStrings.join('&')}`;
    router.push(path, undefined, {
      shallow: true,
    });
  };

  return [urlQueryParams, setUrlQueryParams] as const;
};

export default useShallowRouting;
