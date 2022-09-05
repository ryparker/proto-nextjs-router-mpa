import { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import styled, { CSSProperties } from 'styled-components';
import useHasMounted from '@hooks/useHasMounted';

const ICONS = {
  github: dynamic(() => import('../../svgs/Github')),
  twitter: dynamic(() => import('../../svgs/Twitter')),
  search: dynamic(() => import('../../svgs/Search')),
};

export type IconProps = {
  id: keyof typeof ICONS;
  color?: string;
  size?: number | string;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  // React18+ will throw client/server miss match error if we don't return null on server side.
  const isMounted = useHasMounted();
  if (!isMounted) return null;

  const {
    id,
    size,
    strokeWidth = 1,
    color = 'currentColor',
    fill = 'currentColor',
    stroke = 'none',
    style,
    ...delegated
  } = props;
  let Component: any = ICONS[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={
        {
          '--size': size,
          '--stroke-width': strokeWidth,
          ...style,
        } as CSSProperties
      }
      ref={ref}
      {...delegated}
    >
      <Component color={color} fill={fill} stroke={stroke} />
    </Wrapper>
  );
});
Icon.displayName = 'Icon';

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
  & > svg {
    width: 100%;
    height: 100%;
    stroke-width: var(--stroke-width);
    /* Force override for the GitHub icon which defaults to inline-block */
    display: block !important;
  }
`;

export default Icon;
