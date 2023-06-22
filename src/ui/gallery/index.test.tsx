import {
  render,
} from '@testing-library/react';
import { Gallery } from '.';

describe('Testing Sneaker Box', () => {
  test('Renders', () => {
    const { container } = render(<Gallery>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </Gallery>)
    expect(container).toMatchSnapshot();
  })
})