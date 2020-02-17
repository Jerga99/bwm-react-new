
import React, { useEffect } from 'react';
import './TomMap.scss';
import { useMap } from 'providers/MapProvider';

const TomMap = ({location}) => {

  const { initMap, requestGeoLocation } = useMap();

  const getGeoLocation = (location) => {
    location &&
    requestGeoLocation(location)
      .then(results => {
        debugger
        console.log(results);
      })
  }

  useEffect(() => {
    getGeoLocation(location);
  }, [location, getGeoLocation])

  useEffect(() => {
    initMap();
  }, [initMap])

  return <div id="bwm-map"></div>
}


export default TomMap;