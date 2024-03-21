import React, {useState} from "react";
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";


const showResult = "Showing 01 - 12 of 36 Results";

const Shop = () => {

  const [GridList, setGridList] = useState(false);
  const [products, setProducts] = useState(Data);
  //console.log(products)

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products per page

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
    <PageHeader title={"Our Shop Pages"} curPage={"Shop"} />
      <div className="shop-page padding-tb">
        <div className="container">
           <div className="row justify-content-center">
           <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                  <a className="grid" onClick={() => setGridList(!GridList)}>
                        <i className="icofont-ghost"></i>
                  </a>
                  <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                  </a>    
                  </div>
                  <div>
                    <ProductCards products={currentProducts} GridList={GridList} />
                  </div>
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
              </aside>
            </div>

           </div>
        </div>
      </div>
    </div>
  )
}

export default Shop