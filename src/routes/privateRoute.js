import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import DashBoard from "../components/DashBoard/Dashboard";

const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default PrivateRoute;
