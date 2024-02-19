
import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Text,Platform } from 'react-native';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log(latitude,longitude);
        console.log(position);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log(latitude,longitude);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout:15000, maximumAge:10000}
    );
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }
  }, []);

  return (
    <Text>
      <Text>User Location:</Text>
      {location ? (
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </Text>
  );
};

export default LocationComponent;
