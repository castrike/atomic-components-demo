import {
  render,
} from '@testing-library/react';
import { SneakerBox } from '.';
import Sneaker from '../../../public/461782_00_png_2200x.webp'
describe('Testing Sneaker Box', () => {
  test('Renders', () => {
    const { container } = render(<SneakerBox brand="nike" name="testing" image={Sneaker} />)
    expect(container).toMatchSnapshot();
  })
})