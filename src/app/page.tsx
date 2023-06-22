import TravisScott from '../../public/1657409450355_2200x.webp'
import UnionJordan1 from '../../public/466843_00_png_2200x.webp'
import OffWhiteChicago from '../../public/136666_00_png_2200x.webp';
import Yeezy from '../../public/195483_00_png_2200x.webp';
import Jordan4Bred from '../../public/461782_00_png_2200x.webp';
import Jordan1Mochas from '../../public/567948_00_png_2200x.webp';
import { SneakerBox } from '@/ui/sneaker-box';
import { Gallery } from '@/ui/gallery';
import { PreviewBox } from '@/ui/preview-box';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gallery>
        <SneakerBox brand="nike" name="Travis Scott - Reverse Mocha" image={TravisScott} />
        <SneakerBox brand="nike" name="Union LA - Blue Toe Box Jordan 1" image={UnionJordan1} />
        <SneakerBox brand="nike" name="Off-White - Chicago Jordan 1" image={OffWhiteChicago} variant="off-white" />
        <SneakerBox brand="adidas" name="Yeezy " image={Yeezy} />
        <PreviewBox brand="nike" name="Jordan 4 Breds" image={Jordan4Bred} />
        <PreviewBox brand="nike" name="Jordan 1 Mochas" image={Jordan1Mochas} filter="grayscale" />
      </Gallery>
    </main>
  )
}
