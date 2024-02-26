/**
 * Cách sử dụng useRef()
 * Giúp xử lý vấn đề về khai báo biến bên ngoài function component
 *
 */

import React from "react";
import { useState, useRef } from "react";

import { Button } from "@mui/material";

function CountDown() {
  const [countdown, setCountdown] = useState(100);

  const timerId = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    console.log("Start -> ", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop -> ", timerId.current);
  };

  return (
    <>
      <h1>{countdown}</h1>
      <h1>ĐẾM NGƯỢC</h1>
      <Button
        variant="contained"
        onClick={handleStart}
      >
        Start
      </Button>
      <Button
        variant="contained"
        onClick={handleStop}
      >
        Stop
      </Button>
    </>
  );
}

export default CountDown;
