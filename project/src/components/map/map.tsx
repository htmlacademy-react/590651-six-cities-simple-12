import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useMap } from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Point } from '../../types/point';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

type MapProps = {
  city: City;
  points: Point[];
  selectedOffer: Offer | undefined;
  height: number;
}

export function Map({city, points, selectedOffer, height}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: (selectedOffer !== undefined && point.name === selectedOffer.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedOffer]);

  return (
    <section className="cities__map map" ref={mapRef} style={{height: `${height}px`}}>

    </section>
  );
}
