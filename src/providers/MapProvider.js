
import React from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import axios from 'axios';

const { createContext, useContext } = React;

const MapContext = createContext(null);

export const MapProvider = ({children, apiKey}) => {

  const initMap = () => {
    const map = tt.map({
      key: apiKey,
      container: 'bwm-map',
      style: 'tomtom://vector/1/basic-main'
    });
      
    map.addControl(new tt.NavigationControl());
  }

  const requestGeoLocation = location => {
    return axios
      .get(`https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`)
      .then(res => res.data)
  }

  const mapApi = {
    initMap,
    requestGeoLocation
  }

  return (
    <MapContext.Provider value={mapApi}>
      {children}
    </MapContext.Provider>
  )
}

export const useMap = () => {
  return useContext(MapContext);
}

