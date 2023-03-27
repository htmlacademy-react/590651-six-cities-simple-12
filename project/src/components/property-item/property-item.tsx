import { FC } from 'react';

type PropertyItemProps = {
  item: string;
};

export const PropertyItem: FC<PropertyItemProps> = ({ item }) => <li className="property__inside-item">{item}</li>;
