import React from "react";
import Navbar from "./Navbar";
import Star from "../assets/heroSection/stars.svg";
import HeroSectionImage from "../assets/heroSection/heroImage.svg";
import BigSaleImage from "../assets/heroSection/saleImage.svg";
import Footer from "./Footer";
import MiddleSection from "./MiddleSection";
import FeaturedProducts from "./FeaturedProducts";
import LatestProducts from "./LatestProducts";
import Supertrendy from "./Supertrendy";
import ProductGallery from "./ProductGallery";
import CategorySection from "./CategorySection";

const Herosection = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero-section d-flex">
        <div className="d-lg-flex main-container mt-4 hero-section-content">
          <div className="m-5 w-50">
            <div className="d-flex gap-2 mt-5">
              <img src={Star} alt="" className="mb-2" />
              <div className="new-arrival-text">
                <h3>New Arrival</h3>
              </div>
              <img src={Star} alt="" className="mb-2" />
            </div>
            <div>
              <h1 className="text-nowrap fw-bold">
                Shop with Confidence: <br /> Trusted Source for Quality <br />
                Products
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
                <br />
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="hero-section-btn fw-bolder text-white border-0 rounded-2 p-2 w-25">
                Shop Now
              </button>
              <div className="d-flex mt-4 gap-2 text-center text-nowrap">
                <div>
                  <p>200+</p>
                  <p>International Brands</p>
                </div>
                <vr />
                <div>
                  <p>2,000+</p>
                  <p>High-Quality Products</p>
                </div>
                <vr />
                <div>
                  <p>30,000+</p>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex hero-section-images w-50">
            <div>
              <img src={Star} alt="Star" className="hero-section-small-star" />
            </div>
            <div>
              <img
                src={HeroSectionImage}
                alt="Hero section Image"
                className="heroSectionImage"
              />
            </div>
            <div>
              <img
                src={BigSaleImage}
                alt="Big Sale Image "
                className="hero-section-sale"
              />
            </div>
            <div>
              <img src={Star} alt="" className="hero-section-big-star" />
            </div>
          </div>
        </div>
      </div>

      <MiddleSection></MiddleSection>
      <FeaturedProducts></FeaturedProducts>
      <LatestProducts></LatestProducts>
      <Supertrendy></Supertrendy>
      <CategorySection></CategorySection>
      <ProductGallery></ProductGallery>
      <Footer></Footer>
    </>
  );
};

export default Herosection;
