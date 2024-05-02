import styled from "styled-components";
import React from "react";
import { Container, Base_Url, Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardsContainer>
      <Container>
        <FilterCards>
          {data?.map((value) => (
            <FilterCard key={value.name}>
              <div className="Foodimg">
                <img src={Base_Url + value.image} alt="Food image" />
              </div>
              <div className="Foodinfo">
                <div className="info">
                  <h3>{value.name}</h3>
                  <p>{value.text}</p>
                </div>
                <div className="price">
                  <Button>${value.price.toFixed(2)}</Button>
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
  max-height: 100%;
  background-size: cover;
`;
const FilterCards = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding-top: 40px;
`;
const FilterCard = styled.div`
  border: none; /* Remove the initial border */
  padding: 10px;
  display: flex;
  width: 340px;
  height: 167px;
  background: rgba(255, 255, 255, 0.08); /* Background with 8% opacity */
  border-radius: 20px; /* 20% border radius */
  backdrop-filter: blur(10px); /* Background blur effect */

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
