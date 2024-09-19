import React from "react";
import data from "../productData/latestProducts.json";
const LatestProducts = () => {
  console.log(data);

  return (
    <>
      <div>
        <div className="container">
          <h3 className="fw-bold">Latest Products</h3>
          <div className="latest-products-card gap-5">
            {data.latestProduct.map((latestProducts) => {
              return (
                <div key={latestProducts.id} className="card">
                  <div className="card-image">
                    <img
                      src={latestProducts.image}
                      alt=""
                      className="w-100 h-100"
                    />
                    <div className="card-text">
                      <p>{latestProducts.main_title}</p>
                      <p>{latestProducts.sub_title}</p>
                      <p>{latestProducts.sale_text}</p>
                      <button className="btn btn-light">Shop Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
