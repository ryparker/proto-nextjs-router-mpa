import { replaceUrl } from '@libs/replace-url';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useLocation from '@hooks/useLocation';

export type ToggleProps = {};

function Toggle(_props: ToggleProps) {
  const router = useRouter();
  const location = useLocation();

  const [type, setType] = React.useState<string | undefined>('');

  useEffect(() => {
    const { type } = router.query;
    setType(type as string);
  }, [router.query]);

  const handleClick = (newType: string) => {
    if (newType === type) {
      setType(undefined);
      location.replace('/');
      return;
    }
    setType(newType);
    location.replace('/?type=' + newType);

    // replaceUrl('type', newType);
  };

  return (
    <div>
      <h4>{type}</h4>
      <button
        type="button"
        onClick={(e: any) => {
          e.preventDefault();
          handleClick('a');
        }}
      >
        Type A
      </button>
      <button
        type="button"
        onClick={(e: any) => {
          e.preventDefault();
          handleClick('b');
        }}
      >
        Type B
      </button>
    </div>
  );
}

export default Toggle;
