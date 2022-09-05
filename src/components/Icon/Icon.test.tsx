import { axe } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render, waitFor } from '@testing-library/react';
import * as stories from './Icon.stories';

/**
 * We don't really need to test every icon for accessibility.
 */

afterEach(() => {
  cleanup();
});

const { Search } = composeStories(stories);

test('Search Should have no accessibility violations', async () => {
  const { container } = render(<Search />);

  waitFor(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
