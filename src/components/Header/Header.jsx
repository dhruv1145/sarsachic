import React, { useState } from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="menu-icon icon">
          <IoMenu />
        </div>
        <div className="search-icon icon">
          <BsSearch />
        </div>
      </div>
      <div className="header-section">
        <div className="logo">SARSACHIC</div>
      </div>

      <div className="header-right">
        <div className="heart-icon icon">
          <FaRegHeart />
        </div>
        <div className="cart-icon icon">
          <FiShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
