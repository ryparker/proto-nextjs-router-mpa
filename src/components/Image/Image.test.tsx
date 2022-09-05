import { axe } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render, waitFor } from '@testing-library/react';
import * as stories from './Image.stories';

afterEach(() => {
  cleanup();
});

const { ImageTemplate } = composeStories(stories);

test('Should have no accessibility violations', async () => {
  const { container } = render(<ImageTemplate />);

  await waitFor(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
