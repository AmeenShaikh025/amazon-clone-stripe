import React from "react";
import { motion } from "framer-motion";

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    
    let count = 1;

    basket.map(item => {
      if(item.id === id) {
        count++;
      }
      return count;
    })

    //Add item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        count: count
      },
    });
  };

  return (
    <motion.div
      initial={{ y: "-90" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 0.2 }}
      className="product"
    >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <motion.img
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        src={image}
        alt={title}
      />
      <button onClick={addToBasket}>Add To Basket</button>
    </motion.div>
  );
}

export default Product;
