import { useEffect } from 'react';
import { replaceUrl } from '@libs/replace-url';

/**
 * React Hook for replacing URL parameter in Next.js without re-rendering
 *
 * @param parameter - Route parameter
 * @param value - New parameter value
 */
export default function useReplaceUrl(parameter: string, value: string) {
  useEffect(() => {
    replaceUrl(parameter, value);
  }, [parameter, value]);
}
