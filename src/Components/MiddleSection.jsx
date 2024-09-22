import Shipping from "../assets/middlesection/shipping.svg";
import MoneyBack from "../assets/middlesection/moneyBack.svg";
import SecureShopping from "../assets/middlesection/secureShopping.svg";

const MiddleSection = () => {
  return (
    <>
      <div className=" main-container d-flex  gap-4 mt-4 mb-4">
        <div className="d-flex free-shipping w-75 rounded-2">
          <img src={Shipping} alt="Free shipping" />
          <div className="mt-5">
            <p>Free Shipping</p>
            <h4>From $99.00</h4>
          </div>
        </div>
        <div className="d-flex money-back-section w-75 rounded-2">
          <img src={MoneyBack} alt="Money back garuntee" />
          <div className="mt-5">
            <p>Money Gaurantee</p>
            <h4>30 Days Back</h4>
          </div>
        </div>
        <div className="d-flex secure-shopping w-75 rounded-2">
          <img src={SecureShopping} alt="Secure Shopping" />
          <div className="mt-5">
            <p>100% Safe</p>
            <h4>Secure Shopping</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
