import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Skincare from "../assets/categoryproducts/skincare.png";
import Shoppingcart from "../assets/categoryproducts/grocerycart.png";
import Lipstick from "../assets/categoryproducts/lipstick.png";

const CategorySection = () => {
  return (
    <>
      <div className="category">
        <div className="container swipper-container">
          <div className="swipper-container-left-side">
            <h2>
              50+ Beautiful & Modern <br /> Category Product
            </h2>
            <h4>
              Our designer already made a lot of beautiful <br />
              prototipe of rooms that inspire you
            </h4>
            <button className="btn btn-primary text-white fw-bold">
              Explore More
            </button>
          </div>
          <div>
            <Swiper
              slidesPerView={"auto"}
              effect={"coverflow"}
              spaceBetween={10}
              centeredSlides={true}
              pagination={true}
              navigation={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[Navigation, Pagination, EffectCoverflow]}
              className="mySwiper category-swipper"
            >
              <SwiperSlide>
                <img src={Skincare} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Shoppingcart} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Lipstick} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Skincare} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={Shoppingcart} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Lipstick} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
