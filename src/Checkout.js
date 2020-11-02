import React from "react";
import FlipMove from "react-flip-move";
import { motion } from "framer-motion";

import { useStateValue } from "./StateProvider";
import amazonad from "./amazon-adlaptop.jpg";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="checkout"
    >
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "tween", delay: 0.2 }}
        className="checkout__left"
      >
        <motion.img
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="checkout__ad"
          src={amazonad}
          alt="image"
        />
        {basket?.length === 0 ? (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2>Your shopping bassket is empty</h2>
            <p>You have no items in your basket.</p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping basket</h2>

            {/* All checkout products */}
            <FlipMove>
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </motion.div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>subtotal</h1>
          <Subtotal />
        </div>
      )}
    </motion.div>
  );
};

export default Checkout;
