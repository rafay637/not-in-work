import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product_details = () => {

  let { id } = useParams();

  const [singleProducts, setSingleProducts] = useState("");
  console.log(id);

  useEffect(() => {
    let FetchSingleData = axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <img src={singleProducts.image} alt="" width="300px" />
        <h1>{singleProducts.title}</h1>
        <p>{singleProducts.description}</p>
      </div>
    </>
  );
};
