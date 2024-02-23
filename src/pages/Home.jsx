import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  let getdata = () => {
    let data = axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(products);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
        {products.map((e, i) => {
          return (
            <Cards
              key={i}
              image={e.image}
              title={e.title}
              desc={e.description}
              id={e.id}
            />
          );
        })}
      </div>
    </>
  );
};
