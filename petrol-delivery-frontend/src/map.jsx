// src/Map.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import io from 'socket.io-client';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 0, // Initial center (latitude)
  lng: 0  // Initial center (longitude)
};

const socket = io('http://localhost:4000'); // Backend URL for socket connection

const Map = () => {
  const [location, setLocation] = useState(center);

  useEffect(() => {
    socket.on('locationUpdate', (data) => {
      setLocation(data);
    });

    return () => {
      socket.off('locationUpdate');
    };
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
