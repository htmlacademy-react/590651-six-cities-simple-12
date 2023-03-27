import { FC } from 'react';

type PropertyImageProps = {
  img: string;
};

export const PropertyImage: FC<PropertyImageProps> = ({ img }) => (
  <div className="property__image-wrapper">
    <img className="property__image" src={img} alt={img} />
  </div>
);
