import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    console.log('android: ' + response);
    if (response === 'granted') {
      return true;
    }
    return false;
  }
};

export const getCurrentPosition = (callback) => {
  Geolocation.getCurrentPosition(
    (position) => {
      callback(position);      
    },
    (error) => {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000,
    },
  );
};
