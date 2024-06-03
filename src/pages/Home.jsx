import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header/Header";
import { useGetProductsQuery } from "../services/products";
import { useDispatch, useSelector } from "react-redux";
import { saveProducts } from "../redux/productSlice";
import ProductCard from "../components/productCard";
import styles from "../components/productCard.module.css";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery();
  const products = useSelector((state) => state.products?.products);
  console.log(products);

  const [productsLimit, setProductsLimit] = useState(10);

  useEffect(() => {
    data && dispatch(saveProducts(data?.products));
  }, [data]);

  return (
    <div>
      <Header />
      <HeroSection />

      <div className={styles.writeups}>
        <h4>
          feature products <br />
        </h4>
        <h2>
          BESTSELLER PRODUCTS <br />{" "}
        </h2>
        <h5>problems trying to resolve the conflict between</h5>
      </div>
      <div className={styles.productsContainer}>
        {products?.slice(0, productsLimit).map((product, index) => (
          <ProductCard
            id={product?.id}
            key={index}
            category={product?.category}
            image={product?.images[0]}
            price={product?.price}
            title={product?.title}
          />
        ))}
      </div>
      <div className={styles.button}>
        <button
          onClick={() =>
            setProductsLimit(
              productsLimit < products.length ? products.length : 10
            )
          }
        >
          {productsLimit < products.length
            ? " LOAD MORE PRODUCTS"
            : "LOAD LESS PRODUCTS"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Home;
