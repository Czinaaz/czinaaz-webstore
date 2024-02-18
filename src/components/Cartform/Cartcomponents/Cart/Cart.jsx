import React, { useEffect, useState } from 'react';
import css from './Cart.module.css';

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleChange = (id, change) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newAmount = Math.max(item.amount + change, 0); 
        return { ...item, amount: newAmount };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculatePrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.amount;
    });
    setPrice(totalPrice);
  };

  useEffect(() => {
    calculatePrice();
  });

  return (
    <div className={css.cart_div}>
      <article>
        {cart?.map((item) => (
          <div key={item.id} className={css.cart_box}>
            <div className={css.cart_img}>
              <img src={item.img} alt='' />
              <p>{item.title}</p>
            </div>
            <div className={css.button_container}>
              <button onClick={() => handleChange(item.id, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item.id, +1)}>+</button>
            </div>
            <div className={css.button_self}>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className={css.total}>
          <span className={css.total_head} >Total price</span>
          <span className={css.total_price} >${price.toFixed(2)}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
