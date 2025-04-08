import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOrder = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to place an order.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:4000/order', { token, orderDetails });
      alert('Order placed successfully');
    } catch (error) {
      setError('Failed to place order. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <textarea placeholder="Order Details" value={orderDetails} onChange={(e) => setOrderDetails(e.target.value)} />
      <button onClick={handleOrder} disabled={loading}>
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Order;
