/**
 * Kiểm tra giá trị hiện tại và giá trị trước đó của State trong useEffect
 * Bằng cách kết hợp với useEffect
 *
 */

import React, { useEffect } from "react";
import { useState, useRef } from "react";

import { Button } from "@mui/material";

function CheckPrevAndCurrentValue() {
  const [countdown, setCountdown] = useState(100);

  const timerId = useRef();

  // Lưu giá trị giá trị trc đó của state (countdown)
  const prevCount = useRef();

  // Lấy ra thẻ tag sử dụng useRef (tương tự với getElementById)
  const h1Ref = useRef();

  useEffect(() => {
    // In ra element
    // console.log(h1Ref.current);

    // Lấy ra toạ độ element
    const rect = h1Ref.current.getBoundingClientRect();

    console.log(rect);
  });

  useEffect(() => {
    prevCount.current = countdown;
  }, [countdown]);

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

  console.log("Current: ", countdown, "Previous: ", prevCount.current);

  return (
    <>
      <h1 ref={h1Ref}>{countdown}</h1>
      <h1 ref={h1Ref}>ĐẾM NGƯỢC</h1>
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

export default CheckPrevAndCurrentValue;
