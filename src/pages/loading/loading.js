// import {
//   withGoogleMap,
//   GoogleMap,
//   withScriptjs,
//   Marker,
//   DirectionsRenderer,
// } from 'react-google-maps';

// const [distance, setDistance] = useState(0);
// const [duration, setDuration] = useState(0);

// useEffect(() => {
//   if (distance && duration) 
//      {
//          console.log('Distance & Duration have updated', distance, duration);
//      }
//     }, 
//     [distance, duration]);

// const getTravelTime = (origin, destination) => {
//   const directionsService = new google.maps.DirectionsService();
//   directionsService.route(
//     {
//       origin: origin,
//       destination: destination,
//       travelMode: google.maps.TravelMode.DRIVING,
//       key: 'AIzaSyDYNU9mpalnAUDdGMlml3E7ZUwNCxQPrjM',
//     },
//     (result, status) => {
//       console.log(result);
//       if (status === google.maps.DirectionsStatus.OK) {
//         {
//           setDistance(result.routes[0].legs[0].distance.value);
//           setDuration(result.routes[0].legs[0].duration.value);
//         }
//       } else {
//         console.error('error fetching directions', result, status);
//       }
//     },
//   );
// };

// const getDirectionLegs = (origin, destination) => {
//   const directionRoute = new google.maps.DirectionsRoute();
//   directionRoute.route({});
// };
