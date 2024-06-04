import React from "react";
import styles from "./Header.module.css";
import { FaYoutube } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
const Header = () => {
  return (
    <>
      <div className={styles.container_green}>
        <div className={styles.numbers}>
          <a href="#">
            <IoCallOutline /> (225)555-0118
          </a>
          <a href="#">
            <FaRegEnvelope />
            michelle.river@example.com
          </a>

          <span> {"Follow Us and get a chance to wiln 80% off "} </span>

          <div className={styles.social_media}>
            Follow Us:
            <a href="#" style={{ color: "white" }}>
              <FaInstagram />{" "}
            </a>
            <a href="#">
              <FaYoutube />{" "}
            </a>
            <a href="#">
              {" "}
              <FaFacebookF />{" "}
            </a>
            <a href="#">
              {" "}
              <FaRegEnvelope />
            </a>
            <a href="#">
              <IoCallOutline />{" "}
            </a>
            <a href="#">
              <CiTwitter />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container_white}>
        <span>Bandage Home Shop Blog Contact Pages</span>
        <a href="#">Login/Register</a>
        <a href="">
          <CiSearch />
        </a>
        <a href="#">
          <CiShoppingCart />
        </a>
        <a href="#">
          <GiSelfLove />
        </a>
      </div>
    </>
  );
};

export default Header;
