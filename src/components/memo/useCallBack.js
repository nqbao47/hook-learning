import { memo } from "react";
import { Button } from "@mui/material";

function CallbackExample({ onIncrease }) {
  console.log("re-render");
  return (
    <>
      <h1>Cách sử dụng useCallBack kết hợp memo</h1>
      <Button onClick={onIncrease}>Counter</Button>
    </>
  );
}

export default memo(CallbackExample);
