import React from "react";
import { Container, Base_Url, Button } from "../../App";
import { NotAvailable } from "../SearchResults/SearchResult";
import styled from "styled-components";
import { useContext } from "react";
import { CartItems } from "../../Context/Context";
import { FilterCards, FilterCard } from "../SearchResults/SearchResult";

const Cart = () => {
  const value = useContext(CartItems);
  const Delete = (name) => {
    let newobj = value.mergedItems.filter((item) => {
      return item.name != name;
    });
    value.setMergedItems(newobj);
  };
  console.log(value);
  return (
    <MyCartContainer>
      <Container>
        <FilterCards>
          {value.mergedItems?.map(
            ({ name, image, text, price, quantity }, i) => (
              <FilterCard key={i}>
                <div className="Foodimg">
                  <img src={Base_Url + image} alt="Food image" />
                </div>
                <div className="Foodinfo">
                  <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                  <div className="btn_div">
                    <div className="Delete">
                      <Button
                        onClick={() => {
                          {
                            Delete(name);
                          }
                        }}
                      >
                        Cancel
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
          {value.mergedItems?.length === 0 && (
            <NotAvailable>
              <div className="message">
                <div className="message_img">
                  <img src="Empty Cart.png" alt="Not Available" />
                </div>
                <h1>Add Something !</h1>
              </div>
            </NotAvailable>
          )}
        </FilterCards>
      </Container>
    </MyCartContainer>
  );
};

export default Cart;
const MyCartContainer = styled.div``;
