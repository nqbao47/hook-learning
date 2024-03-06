import React from "react";
import { useState } from "react";
import { Input, Button } from "@mui/material";
import styles from "./styles.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";

const DEFAULT_STYLES_FORM = { color: "#fff", padding: "20px" };

function LoginV1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(name);

  const handleSubmit = () => {};

  return (
    <div className="container">
      <div className="header">
        <h1>OFFICIAL SIGN UP FORM</h1>
      </div>
      <div className="form">
        <div className="form-left">
          <h2>OFFICIAL</h2>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur Edipiscing Elit</p>
        </div>
        <div className="form-right">
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={DEFAULT_STYLES_FORM}
              className="input"
              type="text"
              placeholder="First Name"
              required
              startAdornment={
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ mr: "5px" }} />
                </InputAdornment>
              }
            ></Input>
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={DEFAULT_STYLES_FORM}
              type="email"
              className="input"
              placeholder="mail@example.com"
              required
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon sx={{ mr: "5px" }} />
                </InputAdornment>
              }
            ></Input>
            <Input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={DEFAULT_STYLES_FORM}
              type="password"
              className="input"
              placeholder="Password"
              required
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon sx={{ mr: "5px" }} />
                </InputAdornment>
              }
            ></Input>
            <Input
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={DEFAULT_STYLES_FORM}
              type="password"
              className="input"
              placeholder="Confirm Password"
              required
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon sx={{ mr: "5px" }} />
                </InputAdornment>
              }
            ></Input>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "40px" }}
            >
              Register
              <SendIcon sx={{ ml: "10px" }} />
            </Button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p>OFFICIAL SIGN UP FORM</p>
      </div>
    </div>
  );
}

export default LoginV1;
