import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import Register from './components/registration/Register';
import Login from './components/login/Login';
import Order from './components/order/Order';

const socket = io('http://localhost:5000');

const App = () => {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  useEffect(() => {
    socket.on('locationUpdate', (newLocation) => {
      setLocation(newLocation);
    });
  }, []);

  return (
    <div>
      <h1>Petrol Delivery App</h1>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={{ height: '400px', width: '100%' }} center={location} zoom={15}>
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
      <Register />
      <Login />
      <Order />
    </div>
  );
};

export default App;
