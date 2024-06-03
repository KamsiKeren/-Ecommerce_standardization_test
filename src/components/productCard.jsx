import React from "react";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, category, price, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className={styles.container}>
        <img src={image} alt="image" className={styles.image} />
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.category}>{category}</p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
