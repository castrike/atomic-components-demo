'use client'

import Image, { StaticImageData } from 'next/image';
import cx from 'classnames';

interface SneakerBoxProps {
  name: string;
  brand: string;
  image: StaticImageData;
  variant?: 'off-white' | 'union' | 'travis-scott' | 'yeezy';
}

export const SneakerBox = ({
  image,
  brand,
  name,
  variant,
}: SneakerBoxProps) => {
  return (
    <div
      className={cx(
        'bg-white rounded-xl drop-shadow transition-all hover:drop-shadow-lg p-6 hover:-translate-y-1',
        {
          '!bg-orange-200 !text-orange-800': variant === 'off-white',
        }
      )}
      role="button"
    >
      <p className="text-sm font-bold">{brand}</p>
      <figure className="relative w-full h-40">
        <Image
          src={image}
          alt={`Image of ${name}`}
          fill
          className="object-contain"
        />
      </figure>
      <h3>{name}</h3>
    </div>
  );
};
