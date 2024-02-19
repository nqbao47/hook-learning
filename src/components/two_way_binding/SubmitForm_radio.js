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

export default function Radio() {
  const [checked, setChecked] = useState();

  console.log(checked);

  const handleSubmit = () => {
    //call api
    console.log({ id: checked });
  };

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
            type="radio"
          />
          {/* <Input
            checked={true}
            onChange={() => setChecked(course.id)}
            type="radio"
          ></Input> */}
          {course.name}
        </div>
      ))}

      <Button onClick={handleSubmit}>Register</Button>
    </>
  );
}
