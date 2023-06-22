import { StaticImageData } from "next/image";
import { SneakerBox } from "../sneaker-box-2";

interface SneakerBoxProps {
  name: string;
  brand: string;
  image: StaticImageData;
  variant?: 'off-white' | 'union' | 'travis-scott' | 'yeezy';
}

export const SneakerPreview = (props: SneakerBoxProps) => {
  return <div className="blur-sm hover:blur-0 transition-all"><SneakerBox {...props} /></div>
}