// Random Gift

import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const gifts = ["CPU core i9", "Ram 100Gb", "Miku", "Aizawa"];

export default function RandomGift() {
  const [gift, setGift] = useState();

  const handleGetGifts = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  console.log(gift);
  return (
    <>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <Button
        variant="contained"
        onClick={handleGetGifts}
      >
        Lấy thưởng
      </Button>
    </>
  );
}
