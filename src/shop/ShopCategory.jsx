import React, { useState } from "react";
import Data from "/src/products.json";

const ShopCategory = ({ filterItem, menuItems, setProducts }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setProducts(Data);
    } else {
      const newProducts = Data.filter((item) => item.category === category);
      setProducts(newProducts);
    }
  };

  const title = activeCategory === "All" ? "All Categories" : activeCategory;

  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">{title}</h5>
      </div>
      <div>
        <button
          onClick={() => handleClick("All")}
          className={`m-2 ${activeCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>

        {menuItems.map((category, id) => (
          <button
            key={id}
            onClick={() => handleClick(category)}
            className={`m-2 ${
              activeCategory === category ? "bg-warning" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
