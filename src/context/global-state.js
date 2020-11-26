import React from 'react';
import {useState, useEffect} from 'react';
import LocationContext from './global-context';
import { getLocationName, getGeoLocation } from '../../locationService';

export default GlobalState = ({children}) => {
  const [locations, setLocations] = useState({
  });
  
  const setOrigin = (originName) => {
    let locationsTemp = {...locations}
    locationsTemp.origin = {
      lat: 23, // this is a placeholder. use google api to retrive matching lats and lngs and set these
      lng: 233,
      locName: originName,
    }
    setLocations(locationsTemp);
  };

  const setOriginByCoordinates = async (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude; 
    const locName = await getLocationName(lat, lng);
    let locationsTemp = {...locations}
    locationsTemp.origin = {
      lat,
      lng,
      locName,
    }
    setLocations(locationsTemp);
  }

  const setDestination = (destinationName) => {
    return new Promise(async (resolve, reject) => {
      try {
        const coords = await getGeoLocation(destinationName);
        let locationsTemp = {...locations}
        locationsTemp.destination = {
          lat: coords.lat,
          lng: coords.lng,
          locName: destinationName,
        }
        setLocations(locationsTemp);
        resolve();
      } catch (error) {
        reject();
      }
    })
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
