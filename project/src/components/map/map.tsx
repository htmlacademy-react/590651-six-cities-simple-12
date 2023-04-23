import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { useMap } from '../../hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  className: string;
  city: City;
  offers: Offer[];
  activeOfferId?: number | undefined;
  height: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

export const Map: FC<MapProps> = ({
  className,
  city,
  offers,
  activeOfferId,
  height,
}) => {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
        { animate: false }
      );
    }
  }, [map, city, offers]);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOfferId !== undefined && offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => marker.removeFrom(map));
      }
    };
  }, [map, offers, activeOfferId]);

  return (
    <section
      className={cn('map', className)}
      style={{ height: `${height}px`}}
      ref={mapRef}
    >
    </section>
  );
};
