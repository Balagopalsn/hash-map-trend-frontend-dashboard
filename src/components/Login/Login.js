import React, { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import "./Login.css";
import { usePostValidateLogin } from "../../hooks/usePostLoginDetails";
import TrackerIcon from "../../assets/spiral-galaxy.png";

const LoginPage = () => {
  const { mutateAsync } = usePostValidateLogin({
    onSuccess: (data) => {
      console.log("saas", data);
      if (data) {
        navigate("/dashboard");
      }
    },
    onError: (err) => {
      console.log("there was an error:", err);
    },
  });

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleOnclickLogin = () => {
    mutateAsync(userDetails);
  };

  const handleChange = (event, type) => {
    const details = { ...userDetails };
    details[type] = event.target.value;
    setUserDetails(details);
  };
  return (
    <div className="Main-div">
      <div className="Avatar-div">
        <img src={TrackerIcon} alt="" width={100} />
      </div>
      <Typography
        variant="h6"
        align="center"
        component="h1"
        style={{ padding: 16 }}
        data-testid="loginPageHeading"
      >
        Login
      </Typography>
      <Paper style={{ padding: 30 }} variant="outlined">
        <TextInput
          width="100%"
          type={"email"}
          label="Email"
          value={userDetails.email}
          onChange={(event) => handleChange(event, "email")}
        />
        <TextInput
          width="100%"
          type={"password"}
          label="Password"
          value={userDetails.password}
          onChange={(event) => handleChange(event, "password")}
        />
        <Button
          variant="contained"
          onClick={handleOnclickLogin}
          className="Login-button"
          style={{
            width: "100%",
            marginBottom: 20,
            marginTop: 20,
            background: "#2e3b55",
          }}
          data-testid="loginButton"
        >
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
