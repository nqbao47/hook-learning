// INPUT

import React, { useState } from "react";
import { Button } from "@mui/material";

// Respones from API
const courses = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "Python",
  },
];

export default function CheckBox() {
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);

      if (isChecked) {
        //Uncheck
        return checked.filter((item) => item !== id);
      } else {
        // Check
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    //call api
    console.log({ id: checked });
  };

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
            type="checkbox"
          />
          {course.name}
        </div>
      ))}

      <Button onClick={handleSubmit}>Register</Button>
    </>
  );
}
