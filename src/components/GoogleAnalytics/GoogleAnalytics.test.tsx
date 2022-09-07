import { render, cleanup, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import * as stories from './GoogleAnalytics.stories';

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
