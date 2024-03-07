import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <>
      <p className={context.theme}>
        Tôi là Nguyễn Quốc Bảo, một lập trình viên Front-end vừa tốt nghiệp ra
        trường với niềm đam mê sâu sắc về lập trình web. Trong thời gian còn học
        tại trường thì tôi đã từng gia nhập một công ty chuyên về phần mềm ở vị
        trí Thực tập sinh Front-end.
      </p>
    </>
  );
}

export default Paragraph;
