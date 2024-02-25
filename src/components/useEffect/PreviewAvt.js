import React, { useEffect, useState } from "react";

function PreviewAvt() {
  const [avatar, setAvatar] = useState();

  // Hàm dọn dẹp
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvt = (e) => {
    const file = e.target.files[0];

    // Thêm attribute `preview` vào cho Object `file`
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };
  return (
    <>
      <input
        type="file"
        onChange={handlePreviewAvt}
      />
      <br />
      {avatar && (
        <img
          src={avatar.preview}
          alt="temp"
          width="80%"
        />
      )}
    </>
  );
}

export default PreviewAvt;
