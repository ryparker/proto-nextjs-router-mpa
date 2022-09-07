import { useState, useCallback, useEffect } from 'react';
import { replaceUrl } from '@libs/replace-url';
import { useRouter } from 'next/router';

const useUrlQuery = (
  param: string,
  defaultValue: string
): [string | undefined, any] => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const handleClick = useCallback((newValue: string) => {
    if (newValue === value) {
      setValue(undefined);
      replaceUrl(param, undefined);
      return;
    }
    setValue(newValue);
    replaceUrl(param, newValue);
  }, []);

  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
    const queryValue = router.query[param];
    setValue(queryValue as string);
  }, [router.query]);

  return [value, handleClick];
};

export default useUrlQuery;
