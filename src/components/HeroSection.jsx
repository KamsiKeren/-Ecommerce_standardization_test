import { useSelector } from "react-redux";
import styles from "./HeroSection.module.css";
import React from "react";

const HeroSection = () => {
  // const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div className={styles.container}>
      <div className={styles.home_image1}>
        <img src="./images/col-md-4.png" alt="home.pic2" />
      </div>
      <div className={styles.home_image2}>
        <img src="./images/media bg-cover.png" alt="home.pic3" />
      </div>
      <div className={styles.home_image3}>
        <img src="./images/card-item.png" alt="home.pic" />
      </div>
      <div className={styles.home_image4}>
        <img src="./images/card-item2.png" alt="home.pic4" />
      </div>
    </div>
  );
};

export default HeroSection;
