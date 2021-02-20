import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = forwardRef(
  ({ id, title, image, price, rating, hideButton, count }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      //remove item from basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div ref={ref} className="checkoutProduct">
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="CheckoutProduct__image"
          src={image}
          alt={title}
        />
        <div className="CheckoutProduct__info">
          <p className="CheckoutProduct__title">{title}</p>
          <p className="CheckoutProduct__price">
            <small>₹</small>
            <strong>{price * count}</strong>
            <br/>
            <strong>Qty: {count} * <small>₹</small> {price}</strong>
          </p>
          <div className="CheckoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove From Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
