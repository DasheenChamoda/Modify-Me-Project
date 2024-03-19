import React, { useState } from "react";
import productData from "../products.json"
import { Link } from "react-router-dom";


const title = <h2 style={{ color: 'white' }}>Search Your <span>Favorite</span> Modification Part</h2>;

const desc = "We Have The Largest Collection of products";

const bannerList = [
{
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
},
{
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
},
{
    iconName: "icofont-globe",
    text: "Buy Anything Online",
},
];  


const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

     // Filter products based on the search term
    const filtered = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProducts(filtered);
};
  return (
    <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <input type="text" name="search" id="search" placeholder='Search Part' value={searchInput} onChange={handleSearch} style={{ backgroundColor: 'white' }}/>
                    <button type="submit" style={{ backgroundColor: 'white', color: 'black', width: '50px', height: '70px', borderRadius: '50%', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '-1px' }}>
                    <i className="icofont-search" style={{ fontSize: '20px', border: 'none' }}></i>
                    </button>
                </form>
                <p style={{ color: 'white' }}>{desc}</p>
                <ul className="lab-ul">
                {
                searchInput && filteredProducts.map((product, i) => (
                    <li key={i}>
                    <Link to={`/shop/${product.id}`}> {product.name}</Link>
                    </li>
                    ))
                }
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Banner