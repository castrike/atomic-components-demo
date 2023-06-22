import { SneakerBox } from '@/ui-done/sneaker-box'
import { SneakerBox as SB2 } from '@/ui-done/sneaker-box-2';
import { SneakerPreview } from '@/ui-done/sneaker-preview';

import TravisScott from '../../public/1657409450355_2200x.webp'
import UnionJordan1 from '../../public/466843_00_png_2200x.webp'
import OffWhiteChicago from '../../public/136666_00_png_2200x.webp';
import Yeezy from '../../public/195483_00_png_2200x.webp';
import Jordan4Bred from '../../public/461782_00_png_2200x.webp';
import Jordan1Mochas from '../../public/567948_00_png_2200x.webp';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="grid grid-cols-3 max-w-xl mx-auto gap-4">
        <li><SneakerBox brand="nike" name="Travis Scott - Reverse Mocha" image={TravisScott} /></li>
        <li><SneakerBox brand="nike" name="Union LA - Blue Toe Box Jordan 1" image={UnionJordan1} /></li>
        <li><SB2 brand="nike" name="Off-White - Chicago Jordan 1" variant="off-white" image={OffWhiteChicago} /></li>
        <li><SneakerBox brand="adidas" name="Yeezy " image={Yeezy} /></li>
        <li><SneakerPreview brand="nike" name="Jordan 4 Breds" image={Jordan4Bred} /></li>
        <li><SneakerBox brand="nike" name="Jordan 1 Mochas" image={Jordan1Mochas} /></li>
      </ul>
    </main>
  )
}
