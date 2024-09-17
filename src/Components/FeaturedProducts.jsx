import React from "react";
import data from "../productData/featuredProduct.json";

const FeaturedProducts = () => {
  console.log("featuredProducts", data);

  return (
    <>
      <div>
        <h2 className="text-center m-2 p-3">Featured Products</h2>
        <div className="featured-product-card">
          {data.products.map((product) => {
            return (
              <div key={product.id} className="card featured-card">
                <div className="featured-products-image d-flex justify-content-center w-100">
                  <img src={product.likeIcon} alt="" className="like-icon" />
                  <img src={product.image} alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <hr />
                  <p className="card-text d-flex gap-4 px-2">
                    <p className="fw-bold">{product.price}</p>
                    <p className="text-decoration-line-through">
                      {product.originalprice}
                    </p>
                    <div>
                      <img src={product.ratings} alt="" className="mx-5" />
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
