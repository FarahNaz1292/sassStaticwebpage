import React from "react";
import TS4ULogo from "../assets/navbar/ts4uLogo.svg";
import SearchIcon from "../assets/navbar/magnifyingGlass.svg";
import HamburgerImage from "../assets/navbar/hamburger.svg";
import ElectronicsDevices from "../assets/dropdownImages/electronicsDevices.svg";
import ElectronicAccessories from "../assets/dropdownImages/electronicAccessories.svg";
import TVHomeAppliances from "../assets/dropdownImages/tvHomeAppliances.svg";
import HealthBeauty from "../assets/dropdownImages/health&Beauty.svg";
import BabiesToys from "../assets/dropdownImages/babies&Toys.svg";
import GroceriesPets from "../assets/dropdownImages/grociers&Pets.svg";
import HomeLifestyle from "../assets/dropdownImages/home&lifeStyles.svg";
import WomensFashion from "../assets/dropdownImages/women'sFashion.svg";
import MensFashion from "../assets/dropdownImages/mensFashion.svg";
import WatchAccessories from "../assets/dropdownImages/watches&Accessories.svg";
import SportsOutdoor from "../assets/dropdownImages/sports&Outdoor.svg";
import SignUp from "../assets/navbar/signUp.svg";
import Carticon from "./Svg's/Carticon";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-a">
          <div className="main-container">
            <div className="container d-flex justify-content-between">
              <div>
                <img src={TS4ULogo} alt="Ts4u Logo" />
              </div>
              <div>
                <div className="navbar-inputTag-icons d-flex">
                  <div className="inputTag">
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Search"
                    />
                    <img
                      src={SearchIcon}
                      alt="Magnifying Glass Icon"
                      className="magnifyingGlass"
                    />
                  </div>
                  <div className="navbar-icons d-flex">
                    <div>
                      <Carticon></Carticon>
                    </div>
                    <div>
                      <img src={SignUp} alt="Sign Up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container navbar-b">
          <div className="d-flex navbar-b-left">
            <div>
              <img src={HamburgerImage} alt="Hamburger Image" />
            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                id="dropdownMenuButton1"
                aria-expanded="false"
              >
                Category
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <img src={ElectronicsDevices} alt="" />
                  <a className="dropdown-item" href="#">
                    Electronic Devices
                  </a>
                </li>
                <li>
                  <img src={ElectronicAccessories} alt="" />
                  <a className="dropdown-item" href="#">
                    Electronic Accessories
                  </a>
                </li>
                <li>
                  <img src={TVHomeAppliances} alt="" />
                  <a className="dropdown-item" href="#">
                    TV & Home Appliances
                  </a>
                </li>
                <li>
                  <img src={HealthBeauty} alt="" />
                  <a className="dropdown-item" href="#">
                    Health & Beauty
                  </a>
                </li>
                <li>
                  <img src={BabiesToys} alt="" />
                  <a className="dropdown-item" href="#">
                    Babies & Toys
                  </a>
                </li>
                <li>
                  <img src={GroceriesPets} alt="" />
                  <a className="dropdown-item" href="#">
                    Groceries & Pets
                  </a>
                </li>
                <li>
                  <img src={HomeLifestyle} alt="" />
                  <a className="dropdown-item" href="#">
                    Home & Lifestyle
                  </a>
                </li>
                <li>
                  <img src={WomensFashion} alt="" />
                  <a className="dropdown-item" href="#">
                    Women's Fashion
                  </a>
                </li>
                <li>
                  <img src={MensFashion} alt="" />
                  <a className="dropdown-item" href="#">
                    Men's Fashion
                  </a>
                </li>
                <li>
                  <img src={WatchAccessories} alt="" />
                  <a className="dropdown-item" href="#">
                    Watch & Accessories
                  </a>
                </li>
                <li>
                  <img src={SportsOutdoor} alt="" />
                  <a className="dropdown-item" href="#">
                    Sports & Outdoor
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex navbar-b-right navbar-b-right-text">
            <div>Campaigns</div>
            <div>Brands</div>
            <div>Categories</div>
            <div>Help</div>
            <div>FAQ</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
