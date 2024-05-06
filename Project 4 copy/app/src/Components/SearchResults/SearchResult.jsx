import { styled, css } from "styled-components";
import React from "react";
import { Container, Base_Url, Button } from "../../App";
import { useState, useEffect } from "react";
import { CartItems } from "../../Context/Cart";
import Cart from "../Cart/Cart";

const SearchResult = ({ data, MyCartBtn }) => {
  const [cart, setcart] = useState([]);
  const [mergedCart, setMergedCart] = useState([]);
  const handleCart = (index) => {
    let item = data[index];
    setcart([...cart, item]);
  };
  useEffect(() => {
    let mergedCartObj = cart.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = { ...item, quantity: 1 };
      } else {
        acc[item.name].quantity++;
        acc[item.name].price += item.price;
      }

      return acc;
    }, {});

    let mergedCartArray = Object.values(mergedCartObj);
    setMergedCart(mergedCartArray);
  }, [cart]);

  return (
    <CartItems.Provider value={{ mergedCart, setMergedCart }}>
      <FoodCardsContainer>
        {MyCartBtn ? (
          <Cart />
        ) : (
          <Container>
            <FilterCards>
              {data?.map(({ name, image, text, price }, i) => (
                <FilterCard key={name}>
                  <div className="Foodimg">
                    <img src={Base_Url + image} alt="Food image" />
                  </div>
                  <div className="Foodinfo">
                    <div className="info">
                      <h3>{name}</h3>
                      <p>{text}</p>
                    </div>
                    <div className="btn_div">
                      <div className="Add">
                        <Button
                          onClick={() => {
                            handleCart(i);
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
              ))}
              {data?.length === 0 && (
                <NotAvailable>
                  <div className="message">
                    <div className="message_img">
                      <img src="Not available.png" alt="Not Available" />
                    </div>
                    <h1>Not Available !</h1>
                  </div>
                </NotAvailable>
              )}
            </FilterCards>
          </Container>
        )}
      </FoodCardsContainer>
    </CartItems.Provider>
  );
};

export default SearchResult;
const FoodCardsContainer = styled.section`
  background-image: url("bg.png");
  min-height: calc(100vh - 190px);
  background-size: cover;
`;
export const FilterCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  padding-top: 64px;
`;
export const FilterCard = styled.div`
  border: none; /* Remove the initial border */
  border: 0.66px solid;
  display: flex;
  width: 340px;
  height: 167px;
  padding: 8px;
  border-radius: 20px; /* 20% border radius */
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  background: url(.png),
    ${({ iscart }) =>
        iscart === "true" &&
        css`
          height: 190px;
          width: 380px;
        `}
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
      );
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  .Foodinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .btn_div {
      display: flex;
      gap: 20px;

      .quantity {
        display: flex;
        align-items: center;
        gap: 13px;
      }
    }

    .Delete {
      margin-top: 6px;

      display: flex;
      padding: 4px 10px;
      align-items: center;
      justify-content: center;
      button {
        font-size: 17px;
      }
    }

    .Add {
      Button {
        font-size: 20px;
        padding: 3px 15px;
      }
    }
  }

  .info {
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const NotAvailable = styled.div`
  min-height: calc(100vh - 255px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .message {
    flex-direction: column;
    align-items: center;
    display: flex;
    min-height: 100px;
    flex-wrap: wrap;
  }

  .message_img {
    img {
      width: 15vw;
      @media screen and (0 < width < 768px) {
        width: 80vw;
      }
      @media screen and (768px < width < 1200px) {
        width: 40vw;
      }
    }
  }

  h1 {
    white-space: nowrap;
    font-size: 2rem;
    @media screen and (0 < width < 768px) {
      font-size: 2.5rem;
    }
  }
`;
