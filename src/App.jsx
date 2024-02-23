import React from "react";
// import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing } from "./config/Routing";
import { Route } from "react-router-dom";

const App = () => {

  // const mughal = useSelector((state) => state);
  // console.log(mughal);

  return (
    <>
      {/* <h1 className="text-center text-primary fw-bold">Kesa ha ap?</h1> */}

      <Routing />
    </>
  );
};

export default App;
