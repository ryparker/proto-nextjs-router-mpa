import GlobalStyles from '../src/components/GlobalStyles';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

// All non .mdx stories are rendered in this container
export const decorators = [
  (Story) => {
    return (
      <>
        {/* @ts-expect-error */}
        <GlobalStyles />
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  docs: {
    // All .mdx stories are rendered in this container
    container: ({ children, context, ...delegated }) => (
      // @ts-expect-error DocsContainer type seems broken, it throws because it isn't expecting children.
      <DocsContainer context={context} {...delegated}>
        {/* @ts-expect-error */}
        <GlobalStyles />
        {children}
      </DocsContainer>
    ),
    page: DocsPage,
  },
};
