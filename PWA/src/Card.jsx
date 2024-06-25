import React, { useEffect, useState } from "react";

const Card = () => {
  const [Data, setData] = useState([]);

  const fetchfunc = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await a.json();
    setData(res);
    console.log(res);
  };
  useEffect(() => {
    fetchfunc();
  }, []);
  return (
    <>
      <div className="container flex gap-2 flex-wrap mx-auto">
        {Data.map((item, i) => (
          <div key={i} className="card max-w-100px bg-slate-400 p-6  shadow-lg">
            <h1>Name: {item.name}</h1>
            <p>Company: {item.company.name}</p>
            <p>
              Address: {item.address.street} {item.address.city}
            </p>
            <p>phone: {item.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
