import React from "react";
import { motion } from "framer-motion";

import Product from "./Product";
import banner from "./amazon-home.jpg";
import homeFurnishing from "./desktop_banner_home.jpg";
import alexa from "./alexa.jpg";
import mi from "./Mi.jpg";
import laptop from "./Laptop.jpg";
import sweater from "./sweater.jpeg";
import wirelessEarphones from "./wireless_earphones.jpg";
import prodMob from "./prod-mobile.jpg";
import prodHome from "./prod-home.jpg";
import prodMixi from "./prod-mixi.jpg";
import ledScreen from "./led_screen.jpeg";
import "./Home.css";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ ease: "easeInOut" }}
    >
      <img className="home__image" src={banner} alt="amazon prime" />

      <div className="home__row">
        <Product
          id="1"
          title="Amazon Alexa"
          price={4000}
          rating={4}
          image={alexa}
        />
        <Product
          id="2"
          title="Apple Laptop"
          price={75500}
          rating={5}
          image={laptop}
        />
      </div>

      <div className="home__row">
        <Product id="3" title="Mi Mix 2" price={20000} rating={4} image={mi} />
        <Product
          id="4"
          title="Sony Wireless Earphones"
          price={10000}
          rating={4}
          image={wirelessEarphones}
        />
        <Product
          id="5"
          title="LED Screen"
          price={16000}
          rating={5}
          image={ledScreen}
        />
      </div>

      <div className="home__row">
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="home__row_img"
          src={homeFurnishing}
          alt="Home Furnishing"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Sweater"
          price={2000}
          rating={4}
          image={sweater}
        />
      </div>
    </motion.div>
  );
}

export default Home;
