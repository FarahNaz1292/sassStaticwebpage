import React from "react";
import data from "../productData/latestProducts.json";
const LatestProducts = () => {
  console.log(data);

  return (
    <>
      <div>
        <div className="main-container">
          <h3 className="fw-bold p-4">Latest Products</h3>
          <div className="latest-products-card gap-5">
            {data.latestProduct.map((latestProducts) => {
              return (
                <div key={latestProducts.id} className="card">
                  <div
                    className="w-100 h-100"
                    style={{
                      backgroundImage: `url("${latestProducts.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="card-text">
                      <p>{latestProducts.main_title}</p>
                      <p>{latestProducts.sub_title}</p>
                      <p>{latestProducts.sale_text}</p>
                      <p className="fw-bold m-4 text-white fs-2">&#8595;</p>
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
