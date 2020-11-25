import React from 'react';
export default GlobalContext = React.createContext({
    locations: {
        origin: {
            lat: 0.0,
            lng: 0.0,
            locName: '',
        },
        destination: {
            lat: 0.0,
            lng: 0.0,
            locName: '',
        }
    },
    setOrigin: () => {},
    getOrigin: () => {},
    setOriginByCoordinates: () => {},
    setDestination: () => {},
    getDestination: () => {},
});