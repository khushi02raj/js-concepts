// Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, applyCoupon } from './cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const coupon = useSelector(state => state.cart.coupon);
  const dispatch = useDispatch();
  const [item, setItem] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const handleAddItem = () => {
    dispatch(addItem({ id: Date.now(), name: item }));
    setItem('');
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode));
    setCouponCode('');
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Apply coupon"
      />
      <button onClick={handleApplyCoupon}>Apply Coupon</button>
      {coupon && <p>Coupon applied: {coupon}</p>}
    </div>
  );
};

export default Cart;
