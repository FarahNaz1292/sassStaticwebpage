import FacebookLogo from "../assets/footer/faceBook.svg";
import TwitterLogo from "../assets/footer/twitter.svg";
import YoutubeLogo from "../assets/footer/youtube.svg";
import TsLogo from "../assets/navbar/ts4uLogo.svg";

const Footer = () => {
  return (
    <>
      <div className=" footer">
        <div className=" container d-flex lh-1 align-content-center justify-content-center footer-content">
          <div>
            <img src={TsLogo} alt="" className="mb-3" />
            <p>techserve4u@gmail.com</p>
            <p>+123-589-9763</p>
            <p>
              King Street Melbourne, <br />
              Australia
            </p>
          </div>
          <div>
            <h4>Categories</h4>
            <p>About Us</p>
            <p>Shop</p>
            <p>Contact Us</p>
            <p>Resources</p>
          </div>
          <div>
            <h4>My account</h4>
            <p>Support</p>
            <p>Your Quotes</p>
            <p>Track your Order</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p className="text-nowrap">
              It is a long established fact that <br /> a reader will be
              distracted by <br />
              the readable <br />
              looking at its layout.
            </p>
            <div className="d-flex">
              <img src={FacebookLogo} alt="" />
              <img src={TwitterLogo} alt="" />
              <img src={YoutubeLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-dark text-white py-2">
        <div className="d-flex container justify-content-between">
          <div>2024. All right reserved design by techserve4u</div>
          <div className="d-flex gap-4">
            <p>Setting & Privacy</p>
            <p>Faq's</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
