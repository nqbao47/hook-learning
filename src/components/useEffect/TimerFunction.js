import React, { useEffect, useState } from "react";

function TimerFunction() {
  const [countDown, setCountdown] = useState(180);

  // Sử dụng với setInterval
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Sử dụng với setTimeout
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCountdown(countDown - 1);
  //     }, 1000);
  //   }, [countDown]);

  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
}

export default TimerFunction;
