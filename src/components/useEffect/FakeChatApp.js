import { colors } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const lessons = [
  {
    id: 1,
    name: "Java",
  },
  {
    id: 2,
    name: "python",
  },
  {
    id: 3,
    name: "React",
  },
];

function FakeChatApp() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
      <h1>Đây là app chat nhưng Fake!</h1>
    </>
  );
}

export default FakeChatApp;
