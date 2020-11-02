import React from "react";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <motion.div
      className="subtotal"
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      transition={{ type: "tween", delay: 0.2 }}
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items):
              <strong>{`₹ ${getBasketTotal(basket).toFixed(2)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gifts
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket).toFixed(2)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__button"
      >
        Proceed To Checkout
      </button>
    </motion.div>
  );
}

export default Subtotal;
