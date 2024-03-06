import { useState } from "react";
import { Input, Button } from "@mui/material";
// import "./styles.scss";
import DoneIcon from "@mui/icons-material/Done";

export default function LoginV3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    //
  };

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#E5EBF9",
      }}
    >
      <div
        className="form"
        style={{
          width: "60%",
          display: "flex",
        }}
      >
        <div
          className="form-left"
          style={{
            backgroundColor: "#4EB9FF",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "90px",
          }}
        >
          <p>Nice to see you again</p>
          <p>WELCOME BACK</p>

          <p>
            French is a fascinating and melodic language that is thought to be
            the most romantic language in the world. So, why not learn a few
            basic French phrases and expressions to enhance your general
            knowledge and become happier in the process?
          </p>
        </div>
        <div
          className="form-right"
          style={{
            backgroundColor: "#fff",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "100px",
          }}
        >
          <p style={{ color: "#0A7EF5", fontWeight: "bold", fontSize: "20px" }}>
            Login Account
          </p>
          <p style={{ marginTop: "0px", color: "gray", fontSize: "10px" }}>
            French is a fascinating and melodic language that is thought to be
            the most romantic language in the world. So, why not learn a few
            basic French phrases and expressions to enhance your general
            knowledge and become happier in the process?
          </p>
          <Input
            sx={{
              mt: "10px",
              mb: "10px",
              borderLeft: "4px solid #0A7EF5",
              paddingLeft: "10px",
              backgroundColor: "#F7F7F7",
            }}
            value={email}
            name="email"
            className="email"
            type="email"
            placeholder="Email ID"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            sx={{
              mt: "10px",
              mb: "30px",
              borderLeft: "4px solid #0A7EF5",
              paddingLeft: "10px",
              backgroundColor: "#F7F7F7",
            }}
            value={password}
            name="password"
            className="password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="actions"
            style={{
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#0A7EF5",
              }}
            >
              <DoneIcon sx={{ fontSize: "17px", mr: "5px" }} />
              Keep me signed in
            </p>
            <p style={{ color: "#0A7EF5" }}>Already a member</p>
          </div>
          <Button
            sx={{
              backgroundColor: "#0A7EF5",
              borderRadius: "17px",
              "&:hover": {
                backgroundColor: "#7EDDFD",
              },
            }}
            onClick={handleSubmit()}
            variant="contained"
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </div>
  );
}
