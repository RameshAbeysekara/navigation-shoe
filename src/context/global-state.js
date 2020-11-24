import React from 'react';
import {useState, useEffect} from 'react';
import LocationContext from './global-context';

export default GlobalState = ({children}) => {
  const [locations, setLocations] = useState({
  });

  const setOriginByCoords = (lng, lat, originName) => {
    let locationsTemp = {...locations}
    locationsTemp.origin = {
      lat,
      lng,
      name: originName,
    }
    setLocations(locationsTemp);
  };

  const setDestination = (destinationName) => {
    let locationsTemp = {...locations}
    locationsTemp.destination = {
      lat: 23, // this is a placeholder. use google api to retrive matching lats and lngs and set these
      lng: 233,
      name: destinationName,
    }
    setLocations(locationsTemp);
  };


  const getOriginByCoords = () => {
    return (locations.origin);
  }

  const getDestination = () => {
    return (locations.destination);
  }


  return (
    <LocationContext.Provider
      value={{
        locations,
        setOriginByCoords,
        getOriginByCoords,
        setDestination,
        getDestination,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
