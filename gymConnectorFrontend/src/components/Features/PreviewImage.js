import { useState } from "react";

export default function PreviewImage({ file }) {
  const [preview, setPreview] = useState({});
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <img
      className="mt-3 w-80 h-80 rounded-lg"
      src={preview}
      alt="Hình ảnh đăng tải"
    />
  );
}
