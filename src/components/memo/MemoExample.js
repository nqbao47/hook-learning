/**
 * Sử dụng memo khi nào?
 * Sử dụng trong trường hợp tránh re-render lại `component con` không cần thiết
 * khi chạy app bên `component cha`
 *
 */
import { memo } from "react";

function MemoExample() {
  console.log("re-render ^^");

  return <h1>Hiểu về memo</h1>;
}

export default memo(MemoExample);
