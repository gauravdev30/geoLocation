
// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import * as Device from 'expo-device' ;
// import * as Location from 'expo-location';

// const staticLocation = {
//   latitude: 18.516726, 
//   longitude: 73.856255,
// };


// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [address, setAddress] = useState(null);
//   const [distance, setDistance] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === 'android' && !Device.isDevice) {
//         setErrorMsg(
//           'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
//         );
//         return;
//       }
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);

//          let addressResponse = await Location.reverseGeocodeAsync({
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//         });
  
//         if (addressResponse.length > 0) {
//           setAddress(addressResponse[0]);
//         }

      
//       const haversine = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; 
//         const dLat = (lat2 - lat1) * (Math.PI / 180);
//         const dLon = (lon2 - lon1) * (Math.PI / 180);
//         const a =
//           Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//           Math.cos(lat1 * (Math.PI / 180)) *
//             Math.cos(lat2 * (Math.PI / 180)) *
//             Math.sin(dLon / 2) *
//             Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; 
//         return distance;
//       };

//       const distanceInKm = haversine(
//         location.coords.latitude,
//         location.coords.longitude,
//         staticLocation.latitude,
//         staticLocation.longitude
//       );
      

//       setDistance(distanceInKm);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   let addresstoshow = '';
//   let disatance='';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//     if (address) {
//       addresstoshow += `Address: ${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.country}`;
//     } else {
//       addresstoshow += 'Getting address...';
//     }

//     if (distance !== null) {
//       disatance += `Distance to static location: ${distance.toFixed(2)} km`;
//     } else {
//       disatance += 'Calculating distance...';
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{addresstoshow}</Text>
//       <Text style={styles.paragraph}>{disatance}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'top',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });
// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, FlatList, StyleSheet } from 'react-native';
// import * as Device from 'expo-device' ;
// import * as Location from 'expo-location';

// const staticLocation = {
//   latitude: 18.516726, 
//   longitude: 73.856255,
// };

// // Sample user data
// const sampleUsers = [
//   { id: 1, name: 'User1', latitude: 19.3284081, longitude:  77.1559655 },
//   { id: 2, name: 'User2', latitude: 37.7748, longitude: -122.4195 },
//   // Add more user data as needed
// ];

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [address, setAddress] = useState(null);
//   const [distance, setDistance] = useState(null);
//   const [nearbyUsers, setNearbyUsers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === 'android' && !Device.isDevice) {
//         setErrorMsg(
//           'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
//         );
//         return;
//       }

//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       console.log(location.coords);
//       setLocation(location);

//       let addressResponse = await Location.reverseGeocodeAsync({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });

//       if (addressResponse.length > 0) {
//         setAddress(addressResponse[0]);
//       }

//       const haversine = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; 
//         const dLat = (lat2 - lat1) * (Math.PI / 180);
//         const dLon = (lon2 - lon1) * (Math.PI / 180);
//         const a =
//           Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//           Math.cos(lat1 * (Math.PI / 180)) *
//             Math.cos(lat2 * (Math.PI / 180)) *
//             Math.sin(dLon / 2) *
//             Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; 
//         return distance;
//       };

//       const distanceInKm = haversine(
//         location.coords.latitude,
//         location.coords.longitude,
//         staticLocation.latitude,
//         staticLocation.longitude
//       );

//       setDistance(distanceInKm);

//       // Find nearby users based on a predefined distance (e.g., 5 km)
//       const nearbyUsers = sampleUsers.filter(user => {
//         const userDistance = haversine(
//           location.coords.latitude,
//           location.coords.longitude,
//           user.latitude,
//           user.longitude
//         );
//         return userDistance <= 5; // You can adjust the distance as needed
//       });

//       setNearbyUsers(nearbyUsers);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   let addresstoshow = '';
//   let distanceText = '';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//     if (address) {
//       addresstoshow += `Address: ${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.country}`;
//     } else {
//       addresstoshow += 'Getting address...';
//     }

//     if (distance !== null) {
//       distanceText += `Distance to static location: ${distance.toFixed(2)} km`;
//     } else {
//       distanceText += 'Calculating distance...';
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{addresstoshow}</Text>
//       <Text style={styles.paragraph}>{distanceText}</Text>
//       <Text style={styles.heading}>Nearby Users:</Text>
//       <FlatList
//         data={nearbyUsers}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text style={styles.paragraph}>{`${item.name} - ${item.id}`}</Text>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });


import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigation from './screens/navigation/StackNavigation';
import SplashScreen from './screens/splashscreen/splashscreen';
import {LogBox, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import RNCallKeep from 'react-native-callkeep';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {callKeepOptions} from '.';
import {NetworkInfo} from 'react-native-network-info';


const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();
  // React.useEffect(() => {
  //   // const unsubscribe = messaging().onMessage(async remoteMessage => {
  //   //   console.log('remoteMessage:', remoteMessage);
  //   //   // let data;
  //   //   // if (remoteMessage.data) {
  //   //   //   data = remoteMessage.data;
  //   //   // }
  //   //   // let payload = JSON.parse(data.customData);
  //   //   // console.log('Message handled', payload);
  //   //   // let uuid = payload.calleeId;
  //   //   // if (payload.notificationType === 'START_CALL') {
  //   //   //   await AsyncStorage.setItem('call_data', JSON.stringify(payload));
  //   //   //   RNCallKeep.backToForeground();
  //   //   //   RNCallKeep.displayIncomingCall(
  //   //   //     uuid,
  //   //   //     payload.name,
  //   //   //     payload.name +
  //   //   //       ` (${payload.callType === 'VIDEO_CALL' ? 'Video' : 'Audio'} Call)`,
  //   //   //     'generic',
  //   //   //     true,
  //   //   //     {},
  //   //   //   );
  //   //   // } else if (payload.notificationType === 'END_CALL') {
  //   //   //   RNCallKeep.endAllCalls();
  //   //   //   await AsyncStorage.removeItem('call_data');
  //   //   // }
  //   // });
  //   // // RNCallKeep.addEventListener('answerCall', ({callUUID}) => {
  //   // return () => {
  //   //   unsubscribe();
  //   // };
  // }, []);

  // React.useEffect(() => {
  //   RNCallKeep.setup(callKeepOptions).then(res => {
  //     AsyncStorage.getItem('call_data').then(data => {
  //       if (data !== null) {
  //         let payload = JSON.parse(data);
  //         let uuid = payload.userId;
  //         RNCallKeep.displayIncomingCall(
  //           uuid,
  //           payload.name,
  //           payload.name +
  //             ` (${
  //               payload.callType === 'VIDEO_CALL' ? 'Video' : 'Audio'
  //             } Call)`,
  //           'generic',
  //           true,
  //           {},
  //         );
  //       }
  //     });
  //     RNCallKeep.setAvailable(true);
  //   });
  // }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'SplashScreen'}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="StackNavigation"
            component={StackNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={{backgroundColor: 'red'}}>
        <Text>HElo</Text>
      </View> */}
    </>
  );
};



export default App;