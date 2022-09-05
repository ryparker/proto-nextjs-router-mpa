import { axe } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render, waitFor } from '@testing-library/react';
import * as stories from './IconButton.stories';

afterEach(() => {
  cleanup();
});

const { Default } = composeStories(stories);

test('Should have no accessibility violations', async () => {
  const { container } = render(<Default />);

  waitFor(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
