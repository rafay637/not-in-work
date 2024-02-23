import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Product_details } from "../pages/Product_details";
import { Sign_up } from "../components.jsx/Sign_up";
import { Login } from "../components.jsx/Login";
// import { Sign_up } from "../pages/Sign_up";
// import { Sign_in } from "../pages/Sign_in";

export const Routing = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route path="" element={<Sign_up />} /> */}
        {/* <Route path="signin" element={<Sign_in />} /> */}
        <Route path="" element={<Sign_up />} />
        <Route path="signin" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="productdetails/:id" element={<Product_details />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
