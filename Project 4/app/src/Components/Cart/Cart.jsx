import React from "react";
import styled from "styled-components";
import { Container, Base_Url, Button } from "../../App";
import { NotAvailable } from "../SearchResults/SearchResult";
import { useContext, useEffect, useState } from "react";
import { CartItems } from "../../Context/Cart";
import { dataItems } from "../../Context/data";
import { FilterCards, FilterCard } from "../SearchResults/SearchResult";
import { MdDelete } from "react-icons/md";
import Bill from "../Bill/Bill";

const Cart = () => {
  const value = useContext(CartItems);
  const data = useContext(dataItems);

  const Delete = (name) => {
    let newobj = value.mergedCart.filter((item) => {
      return item.name != name;
    });
    value.setMergedCart(newobj);
  };

  const handleQuantity = (e, quantity, name) => {
    if (e.target.innerHTML === "+") {
      let updatedCart = value.mergedCart.map((item) => {
        if (item.name === name) {
          let filterDefaultObj = data.find(
            (dataItem) => dataItem.name === name
          );
          let filterDefaultPrice = filterDefaultObj
            ? filterDefaultObj.price
            : 0;

          return {
            ...item,
            quantity: item.quantity + 1,
            price: item.price + filterDefaultPrice,
          };
        }
        return { ...item }; // Create a new object for other items
      });

      value.setMergedCart(updatedCart);
    } else {
      let updatedCart = value.mergedCart.map((item) => {
        if (item.name === name && item.quantity > 0) {
          let filterDefaultObj = data.find(
            (dataItem) => dataItem.name === name
          );
          let filterDefaultPrice = filterDefaultObj
            ? filterDefaultObj.price
            : 0;

          return {
            ...item,
            quantity: item.quantity - 1,
            price: item.price - filterDefaultPrice,
          };
        }
        return { ...item }; // Create a new object for other items
      });

      value.setMergedCart(updatedCart);
    }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(value.mergedCart));
  }, [value.mergedCart]);
  return (
    <MyCartContainer>
      <Container>
        <FilterCards>
          <div className="CartFilterCards">
            {value.mergedCart?.map(
              ({ name, image, text, price, quantity }, i) => (
                <FilterCard key={i} iscart={"true"}>
                  <div className="Foodimg">
                    <img src={Base_Url + image} alt="Food image" />
                  </div>
                  <div className="Foodinfo">
                    <div className="info">
                      <h3>{name}</h3>
                      <p>{text}</p>
                    </div>
                    <div className="Delete">
                      <Button
                        onClick={() => {
                          Delete(name);
                        }}
                      >
                        <MdDelete />
                      </Button>
                    </div>
                    <div className="btn_div">
                      <div className="quantity">
                        <Button
                          onClick={async (e) => {
                            handleQuantity(e, quantity, name);
                            if (quantity < 2) {
                              Delete(name);
                            }
                          }}
                        >
                          -
                        </Button>
                        <span>{quantity}</span>
                        <Button
                          onClick={(e) => {
                            handleQuantity(e, quantity, name);
                          }}
                        >
                          +
                        </Button>
                      </div>
                      <div className="price">
                        <Button>${price.toFixed(2)}</Button>
                      </div>
                    </div>
                  </div>
                </FilterCard>
              )
            )}
            {value.mergedCart?.length === 0 && (
              <NotAvailable>
                <div className="message">
                  <div className="message_img">
                    <img src="Empty Cart.png" alt="Not Available" />
                  </div>
                  <h1>Add something to your cart !</h1>
                </div>
              </NotAvailable>
            )}
          </div>
          {value.mergedCart?.length > 0 && <Bill />}
        </FilterCards>
      </Container>
    </MyCartContainer>
  );
};

export default Cart;
const MyCartContainer = styled.div`
  padding-bottom: 50px;
`;
