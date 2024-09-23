import React, { useRef, useState } from "react";
import data from "../productData/featuredProduct.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedProducts = () => {
  console.log("featuredProducts", data);

  return (
    <>
      <div className="main-container mb-4">
        <h2 className="text-center m-2 p-3">Featured Products</h2>
        <div className="w-100">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              840: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation]}
            className="mySwipper"
          >
            {data.products.map((product) => {
              return (
                <SwiperSlide>
                  <div className=" main-container featured-product-card">
                    <div
                      key={product.id}
                      className="card  border-0 featured-card"
                    >
                      <div className="featured-products-image d-flex justify-content-center">
                        <img
                          src={product.likeIcon}
                          alt=""
                          className="like-icon"
                        />
                        <img src={product.image} alt="" />
                        <p className="mt-2 discount-code fw-medium">
                          {product.discount}
                        </p>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title text-nowrap">
                          {product.title}
                        </h6>
                        <hr />
                        <p className="card-text d-flex gap-4">
                          <div className="d-flex gap-2">
                            <p className="fw-bold">{product.price}</p>
                            <p className="text-decoration-line-through">
                              {product.originalprice}
                            </p>
                          </div>
                          <div className="d-flex  gap-1">
                            <img
                              src={product.ratings}
                              alt=""
                              className=" mb-3"
                            />
                            <p>(4.99)</p>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
