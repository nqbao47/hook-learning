/**
 * Sử dụng useMemo để khắc phục tính toán lại logic
 * Sử dụng useRef để auto focus vào input sau khi đã submit
 * ! Đối với Material UI thì thẻ Input sử dụng inputRef thay vì ref
 */

import { Input, Button } from "@mui/material";
import { useMemo, useRef, useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // auto focus vào input
  const nameRef = useRef();

  const handleFocus = () => {
    nameRef.current && nameRef.current.focus();
  };

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
    setName("");
    setPrice("");

    handleFocus();
  };

  // Tính tổng sử dụng reduce(), Nhưng sử dụng cách này thì sẽ bị tính toán lại khi input có thay đổi
  //   const total = products.reduce((result, prod) => result + prod.price, 0);

  // Khắc phục bằng cách sử dụng useMemo
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <>
      <h1>Thêm sản phẩm nè</h1>
      <Input
        inputRef={nameRef}
        value={name}
        placeholder="enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        value={price}
        placeholder="enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Add
      </Button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddProduct;
