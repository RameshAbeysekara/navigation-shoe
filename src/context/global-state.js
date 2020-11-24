import React from 'react';
import {useState, useEffect} from 'react';
import LocationContext from './global-context';

export default GlobalState = ({children}) => {
  const [locations, setLocations] = useState({
  });
  
  const setOrigin = (originName) => {
    let locationsTemp = {...locations}
    locationsTemp.origin = {
      lat: 23, // this is a placeholder. use google api to retrive matching lats and lngs and set these
      lng: 233,
      name: originName,
    }
    setLocations(locationsTemp);
  };

  const setOriginByCoordinates = (position) => {
    let locationsTemp = {...locations}
    locationsTemp.origin = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      name: "Dummy Name", // call gmaps and retried a name
    }
    setLocations(locationsTemp);
  }

  const setDestination = (destinationName) => {
    let locationsTemp = {...locations}
    locationsTemp.destination = {
      lat: 23, // this is a placeholder. use google api to retrive matching lats and lngs and set these
      lng: 233,
      name: destinationName,
    }
    setLocations(locationsTemp);
  };

  const getOrigin = () => {
    return (locations.origin);
  }

  const getDestination = () => {
    return (locations.destination);
  }

  return (
    <LocationContext.Provider
      value={{
        locations,
        setOrigin,
        getOrigin,
        setDestination,
        getDestination,
        setOriginByCoordinates,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
