
import React, { useEffect, useCallback, useRef } from 'react';
import './TomMap.scss';
import { useMap } from 'providers/MapProvider';

const TomMap = ({location}) => {
  let map = useRef(null);

  const { initMap, requestGeoLocation, setCenter, addMarker, addPopupMessage } = useMap();

  const getGeoLocation = useCallback((location) => {
    location &&
    requestGeoLocation(location)
      .then(position => {
        setCenter(map.current, position);
        addMarker(map.current, position);
      })
      .catch(error => {
        addPopupMessage(map.current, error);
      })
  }, [requestGeoLocation, map, setCenter, addMarker, addPopupMessage])

  useEffect(() => {
    getGeoLocation(location);
  }, [location, getGeoLocation])

  useEffect(() => {
    map.current = initMap();
  }, [initMap])

  return <div id="bwm-map"></div>
}


export default TomMap;