
import React, { useEffect } from 'react';
import './TomMap.scss';
import { useMap } from 'providers/MapProvider';

const TomMap = () => {

  const { initMap } = useMap();

  useEffect(() => {
    initMap();
  }, [])

  return <div id="bwm-map"></div>
}


export default TomMap;