import styled from "styled-components";
import { CartItems } from "../../Context/Cart";
import { useContext, useEffect, useState } from "react";

const Bill = () => {
  const value = useContext(CartItems);
  const [Total, setTotal] = useState(0);
  const TotalFun = () => {
    let p = value.mergedCart.map((item) => {
      return item.price;
    });
    const sum = p.reduce((total, num) => {
      return total + num;
    });
    setTotal(sum);
  };
  useEffect(() => {
    TotalFun();
  }, [value.mergedCart]);

  return (
    <BillConatiner>
      <h1>ORDER SUMMARY</h1>
      <div className="hr"></div>
      <div className="BillTaxes">
        <div className="SubTotal">
          <span>Sub Total</span>
          <span>${Total}</span>
        </div>
        <div className="Delivery">
          <span>Delivery Charges</span>
          <span>TBD</span>
        </div>
        <div className="Sales">
          <span>Sales Tax</span>
          <span>TBD</span>
        </div>
      </div>
      <div className="hr"></div>
      <div className="EstimatedTotal">
        <span>Estimated Total</span>
        <span>${Total}</span>
      </div>
      <div className="hr"></div>
      <div className="Proceedbtn">
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="hr"></div>
      <div className="message">
        <p>
          * Delivery Charges And The Sales Tax Be Calculated In The Checkout
          Page*
        </p>
      </div>
    </BillConatiner>
  );
};

export default Bill;
const BillConatiner = styled.div`
  background-color: #ffffff;
  color: #434343;
  border-radius: 10px;
  padding: 10px 16px;
  width: 480px;
  min-height: 200px;
  align-self: flex-start;

  @media screen and (0 < width < 880px) {
    width: 90vw;
    margin: 20px 0px;
  }
  .message {
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 10px;
    font-weight: 600;
    font-style: italic;
  }

  .hr {
    width: 100%;
    height: 2px;
    background: #a09e9e;
    opacity: 0.4;
    margin: 9px 0px;
  }
  .BillTaxes {
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .EstimatedTotal {
    display: flex;
    justify-content: space-between;
  }
  .Proceedbtn {
    display: flex;
    justify-content: center;
    button {
      all: unset;
      background-color: #21314f;
      color: #ffffff;
      padding: 10px 15px;
      border-radius: 7px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.5s ease-in 0.1s;

      &:hover {
        background-color: #ffffff;
        color: black;
        border: 1px solid #21314f;
        transform: scale(1.1);
        transition: all 0.5s ease-in 0.1s;
      }
    }
  }
`;
