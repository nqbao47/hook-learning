import { Button } from "@mui/material";
import { useState } from "react";

export default function Content() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setStatus(!status)}
      >
        Toggle !
      </Button>
      {/* Biểu thức điều kiện để quản lí Unmount/Mount */}
      {status && <h1>Ví dụ về Unmount/Mount</h1>}
    </>
  );
}
