import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import {PROVIDER_GOOGLE} from 'react-native-maps-directions';


//change api key to yours 
//enable deirection and geocode api's on Google cloude platform
const apiKey = 'AIzaSyAwA-1n-_XMXdaQXVgrqtG4GSQeD62ICnU';


// getting lat long for user entered (in words) destination place
exports.getGeoLocation = async (address) => {
    let geoLocation;
    let apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    try {
        let response = await fetch(apiUrl);
        let res = await response.json();
        geoLocation = res.results[0].geometry.location;
        return geoLocation;
    } catch (err) {
        console.log(err)
    }
}

exports.getManeuvers = async (origin = { lat: 0.0, lng: 0.0 }, destination = { lat: 0.0, lng: 0.0 }) => {
    let maneuvers = [];
    let apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&key=${apiKey}`;

    try {
        console.log(apiUrl)
        let response = await fetch(apiUrl);
        let res = await response.json();
        res.routes[0].legs[0].steps.forEach(element => {
            if (element.maneuver) {
                let item = { maneuver: element.maneuver, startLocation: element.start_location }
                maneuvers.push(item);
                console.log(item)
            }

        });
        return maneuvers;

    } catch (err) {
        console.log(err);
    }
}

exports.listenToLocationChange = (callback) => {
    Geolocation.watchPosition((position) => {
        console.log(position)
        callback(position)
    }, (err) => {
        console.log(err)
    }, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 3,
    })
}



const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('android: ' + response);
      if (response === 'granted') {
        locateCurrentPosition();
      }
    } else {
    }
  };

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(JSON.stringify(position));

        //need to get lat , long of my current location for the initialregion (line 93) below
        let currentLongitude =position.coords.longitude;
        let currentLatitude = position.coords.latitude;
      //Setting Longitude state
      setCurrentLongitude(currentLongitude);
        
      //Setting Longitude state
      setCurrentLatitude(currentLatitude);
  
      },
      (error) => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };
