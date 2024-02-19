// INPUT

import React, { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

export default function SubmitForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // CALL API
    console.log({
      name,
      email,
    });
  };
  return (
    <>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <br />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <br />
      <Button onClick={handleSubmit}>Register</Button>
    </>
  );
}
