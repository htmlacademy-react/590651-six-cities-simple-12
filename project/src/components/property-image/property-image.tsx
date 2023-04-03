import { FC } from 'react';

type PropertyImageProps = {
  img: string;
  alt: string;
};

export const PropertyImage: FC<PropertyImageProps> = ({ img, alt }) => (
  <div className="property__image-wrapper">
    <img className="property__image" src={img} alt={alt} />
  </div>
);
