import React from "react";
import BabyToys from "../assets/productGallery/babyToys.png";
import Tv from "../assets/productGallery/tv.png";
import Makeup from "../assets/productGallery/makeUpbrush.png";
import Veges from "../assets/productGallery/veges.png";
import dinningTable from "../assets/productGallery/dininngTable.png";
import Goggles from "../assets/productGallery/binoculus.png";
import BuildingBlocks from "../assets/productGallery/buildingBlocks.png";
import SweatSuit from "../assets/productGallery/sweatsuit.png";
import Model from "../assets/productGallery/model.png";
import Stylishshoes from "../assets/productGallery/stylishShoes.png";
const ProductGallery = () => {
  return (
    <>
      <h1 className="fw-bold text-center m-5"> Our Product Gallery</h1>
      <div>
        <div className="grid-layout">
          <div className="grid-gallery-1 gap-2">
            <div className="grid-gallery-1-style gap-2">
              <img src={BabyToys} alt="" />
              <img src={Tv} alt="" />
            </div>
            <div className="grid-gallery-1-style gap-2">
              <img src={Makeup} alt="" />
              <img src={Veges} alt="" />
            </div>
          </div>
          <div className="grid-gallery-2">
            <img src={dinningTable} alt="" />
          </div>
          <div className="grid-gallery-1">
            <div className=" grid-gallery-3a">
              <img src={Goggles} alt="" />
              <img src={BuildingBlocks} alt="" />
            </div>
            <div className=" grid-gallery-3b">
              <img src={SweatSuit} alt="" />
              <img src={Model} alt="" />
              <img src={Stylishshoes} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
