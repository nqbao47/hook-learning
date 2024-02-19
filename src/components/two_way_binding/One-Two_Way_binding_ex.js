import React, { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

export default function ExampleOneTwoBinding() {
  const [name, setName] = useState("");

  return (
    <>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Button onClick={() => setName("Bảo")}>Change</Button>
    </>
  );
}
