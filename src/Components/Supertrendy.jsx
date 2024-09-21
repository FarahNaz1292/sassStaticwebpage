import React from "react";
import data from "../productData/trendyProducts.json";
const Supertrendy = () => {
  console.log("trendyProducts", data);

  return (
    <>
      <div>
        <h2 className="text-center fw-bold p-5 m-5">Super Trendy Product</h2>
        <div className="card-grid container">
          {data.trendyProducts.map((product) => {
            return (
              <div key={product.id}>
                <div className="card">
                  <div className="trendy-discount-code">{product.discount}</div>
                  <img
                    src={product.image}
                    alt=""
                    className="trendycard-image"
                  />

                  <div className="card-body trendy-card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex gap-3">
                      <p className="fw-bold">{product.discounted_price}</p>
                      <p className="text-decoration-line-through">
                        {product.original_price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex align-align-items-center justify-content-center p-2 mb-5">
          <button className="btn btn-primary text-center text-white fw-bold rounded-2 px-5">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Supertrendy;
