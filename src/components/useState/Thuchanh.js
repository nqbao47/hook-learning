import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

/**
 * Tìm bài tập...
 */

const orders = [100, 200, 500];

export default function Logic() {
  const [pay, setPay] = useState(0);

  const handlePay = () => {
    setPay(() => {
      const total = orders.reduce((total, cur) => total + cur);
      return total;
    });
  };
  console.log(pay);
  return (
    <>
      <p>Giá tiền là: {pay}</p>
      <Button
        variant="contained"
        onClick={handlePay}
      >
        Tính tiền
      </Button>
    </>
  );
}
