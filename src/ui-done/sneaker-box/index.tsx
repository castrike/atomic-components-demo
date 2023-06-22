import Image, { StaticImageData } from "next/image"

interface SneakerBoxProps {
  name: string,
  brand: string,
  image: StaticImageData
}

export const SneakerBox = ({image, brand, name}: SneakerBoxProps) => {
  return <div className="bg-white rounded-xl drop-shadow transition-all hover:drop-shadow-lg p-6 hover:-translate-y-1" role="button">
    <p className="text-sm font-bold">{brand}</p>
    <figure className="relative w-full h-40">
      <Image src={image} alt={`Image of ${name}`} fill className="object-contain" />
    </figure>
    <h3>{name}</h3>
  </div>
}