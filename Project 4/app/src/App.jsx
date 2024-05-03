import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import SearchResult from "./Components/SearchResults/SearchResult";

export let Base_Url = "http://localhost:9000";

const filterbtnArray = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];

const App = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [filter, setfilter] = useState(null);
  const [Searchbtn, setSearchbtn] = useState(null);

  useEffect(() => {
    const Fetchedata = async () => {
      setloading(true);
      try {
        let response = await fetch(Base_Url);

        let json = await response.json();

        setdata(json);
        setfilter(json);
        setloading(false);
      } catch (error) {
        seterror("There is problem to fetch data", error);
      }
    };
    Fetchedata();
  }, []);

  const handlesearch = (e) => {
    const SearchValue = e.target.value;
    console.log(SearchValue);

    if (SearchValue == "") {
      setfilter(null);
    }

    const filter = data?.filter((food) => {
      return food.name.toLowerCase().includes(SearchValue.toLowerCase());
    });

    setfilter(filter);
  };

  const filterbtn = (type) => {
    if (type == "all") {
      setSearchbtn(type);
      setfilter(data);
      return;
    }

    const filter = data?.filter((food) => {
      return food.type.toLowerCase().includes(type.toLowerCase());
    });
    setSearchbtn(type);
    setfilter(filter);
  };
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading........</div>;

  return (
    <>
      <Container>
        <TopSection>
          <div className="logo">
            <img src="logo.svg" alt="Logo" />
          </div>
          <div className="search">
            <input
              onChange={handlesearch}
              type="search"
              placeholder="Search foods"
            />
          </div>
        </TopSection>
        <Filtersection>
          {filterbtnArray.map((value) => (
            <Button
              isselected={(Searchbtn === value.type).toString()}
              key={value.type}
              onClick={() => {
                filterbtn(value.type);
              }}
            >
              {value.name}
            </Button>
          ))}
        </Filtersection>
      </Container>
      <SearchResult data={filter} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;

  .search {
    input {
      height: 40px;
      padding: 0px 10px;
      background-color: transparent;
      border: 1px solid #ff4343;
      color: white;
      font-size: 18px;

      &::placeholder {
        color: white;
      }
      &::-webkit-search-cancel-button {
        cursor: pointer;
      }
    }
  }
  @media screen and (768px < width < 1200px) {
    padding: 0px 13px;
  }
  @media screen and (0px < width < 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;
const Filtersection = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-bottom: 19.6px;
`;
export const Button = styled.button`
  background: #ff4343;
  color: white;
  border: none;
  padding: 6px 12px;
  font-weight: normal;
  cursor: pointer;
  border-radius: 5px;

  ${({ isselected }) =>
    isselected === "true" &&
    css`
      background-color: #ff2323;
    `}
`;
