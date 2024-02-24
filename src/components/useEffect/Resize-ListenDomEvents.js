import React, { useEffect } from "react";
import { useState } from "react";

function Resize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // remove events để giải quyết memory leak
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
      <h1>{width}</h1>
    </>
  );
}

export default Resize;
