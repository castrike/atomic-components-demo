import { StaticImageData } from "next/image";
import { SneakerBox } from "../sneaker-box";

interface SneakerBoxProps {
  name: string;
  brand: string;
  image: StaticImageData;
  variant?: 'off-white' | 'union' | 'travis-scott' | 'yeezy';
  filter?: 'blur' | 'grayscale'
}

export const PreviewBox = (props: SneakerBoxProps) => {
  
  return <div className={`${props.filter === 'grayscale' ? 'grayscale hover:grayscale-0' : 'blur-sm hover:blur-0'} transition-all`}><SneakerBox {...props} /></div>
}