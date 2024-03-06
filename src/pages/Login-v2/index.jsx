import "./style.scss";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function LoginV2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username === "brian" && password === "123") {
      console.log("User logged: ", username, password);
      window.alert("Login successfully");
    } else {
      window.alert("Incorrect Username/Password");
    }
  };

  return (
    <div className="container">
      <div className="main-form">
        <div className="left-form">
          <p className="left-form-header">Welcome to website</p>
          <p className="left-form-content">
            French is a fascinating and melodic language that is thought to be
            the most romantic language in the world. So, why not learn a few
            basic French phrases and expressions to enhance your general
            knowledge and become happier in the process?
          </p>
        </div>
        <div className="right-form">
          <p className="right-form-title">USER LOGIN</p>
          <form
            className="login-form"
            action="submit"
          >
            <input
              value={username}
              name="username"
              className="input"
              type="text"
              placeholder="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              value={password}
              name="password"
              className="input"
              type="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="action-form">
              <div className="remember-pw">
                <p style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon sx={{ mr: "5px" }} />
                  Remember
                </p>
              </div>

              <div className="forgot-pw">
                <p>Forgot password ?</p>
              </div>
            </div>
            <button
              className="btn-submit"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
