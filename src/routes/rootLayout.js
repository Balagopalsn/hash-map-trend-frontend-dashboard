import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../components/Login/Login";
import PrivateRoutes from "./privateRoute";

const RootLayout = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <title>React | Login</title>
              <LoginPage />
            </>
          }
        />
        <Route path="/*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default RootLayout;
