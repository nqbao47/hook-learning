// Bài toán 1 : Update DOM

import { useEffect, useState } from "react";

function UpdateDOM() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // console.log("Mounted", title);
    document.title = title;
  });

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
    </div>
  );
}

export default UpdateDOM;
