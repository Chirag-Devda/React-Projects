import styled from "styled-components";
import React from "react";
import { Container, Base_Url, Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardsContainer>
      <Container>
        <FilterCards>
          {data?.map(({ name, image, text, price }) => (
            <FilterCard key={name}>
              <div className="Foodimg">
                <img src={Base_Url + image} alt="Food image" />
              </div>
              <div className="Foodinfo">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <div className="price">
                  <Button>${price.toFixed(2)}</Button>
                </div>
              </div>
            </FilterCard>
          ))}
        </FilterCards>
      </Container>
    </FoodCardsContainer>
  );
};

export default SearchResult;
const FoodCardsContainer = styled.section`
  background-image: url("bg.png");
  min-height: calc(100vh - 190px);
  background-size: cover;
`;
const FilterCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  padding-top: 64px;
`;
const FilterCard = styled.div`
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
