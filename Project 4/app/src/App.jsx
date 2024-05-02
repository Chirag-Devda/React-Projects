import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import SearchResult from "./components/SearchResults/SearchResult";

export let Base_Url = "http://localhost:9000";
// Data template [
{
  //         "name": "Boilded Egg",
  //         "price": 10,
  //         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //         "image": "/images/egg.png",
  //         "type": "breakfast"
}
//]
const App = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const Fetchedata = async () => {
      setloading(true);
      try {
        let response = await fetch(Base_Url);

        let json = await response.json();

        setdata(json);
        setloading(false);
      } catch (error) {
        seterror("There is problem to fetch data", error);
      }
    };
    Fetchedata();
  }, []);
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
            <input type="search" placeholder="Search foods" />
          </div>
        </TopSection>
        <Filtersection>
          <Button>All</Button>
          <Button>Break fast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </Filtersection>
      </Container>
      <SearchResult data={data} />
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
  min-height: 140px;

  .search {
    input {
      height: 40px;
      padding: 0px 4px;
      background-color: transparent;
      border: 1px solid #ff4343;
    }
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
`;
