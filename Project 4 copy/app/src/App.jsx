import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import SearchResult from "./Components/SearchResults/SearchResult";
export let Base_Url = "http://localhost:9000";
import { dataItems } from "./Context/data";

const ButtonsArray = [
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
  const [filterdata, setfilterdata] = useState(null);
  const [Searchbtn, setSearchbtn] = useState(null);
  const [MyCartBtn, setMyCartBtn] = useState(false);

  useEffect(() => {
    const Fetchedata = async () => {
      setloading(true);
      try {
        let response = await fetch(Base_Url);

        let json = await response.json();

        setdata(json);
        setfilterdata(json);
        setloading(false);
      } catch (error) {
        seterror("There is problem to fetch data", error);
      }
    };
    Fetchedata();
  }, []);

  const handlesearch = (e) => {
    const SearchValue = e.target.value;

    if (SearchValue == "") {
      setfilterdata(null);
    }

    const filter = data?.filter((food) => {
      return food.name.toLowerCase().includes(SearchValue.toLowerCase());
    });

    setfilterdata(filter);
  };

  const handlefilterbtns = (type) => {
    if (type == "all") {
      setSearchbtn(type);
      setfilterdata(data);
      return;
    }

    const filter = data?.filter((food) => {
      return food.type.toLowerCase().includes(type.toLowerCase());
    });
    setSearchbtn(type);
    setfilterdata(filter);
  };
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading........</div>;
  return (
    <>
      <dataItems.Provider value={data}>
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
            {ButtonsArray.map((value) => (
              <Button
                key={value.type}
                isselected={(Searchbtn === value.type).toString()}
                onClick={() => {
                  handlefilterbtns(value.type);
                  setMyCartBtn(false);
                }}
              >
                {value.name}
              </Button>
            ))}
            <Button
              onClick={() => {
                setMyCartBtn(true);
              }}
            >
              My Cart
            </Button>
          </Filtersection>
        </Container>
        <SearchResult data={filterdata} MyCartBtn={MyCartBtn} />
      </dataItems.Provider>
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
  padding-bottom: 19.6px;
  gap: 14px;
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
