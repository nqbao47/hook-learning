import { useMemo, useRef, useState } from "react";

function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // Tự động focus vô ô input sau khi đã submit
  const nameRef = useRef();

  const handleSubmit = () => {
    //Lấy products cũ và giãy products cũ vào
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);

    setName("");
    setPrice("");

    nameRef.current.focus(); // Tự động focus vô ô input sau khi đã submit
  };

  // Tính tổng
  // Nhưng nếu để logic này ở đây thì sẽ bị vô nghĩa, vì chúng ta
  // chỉ cần tính toán 1 lần thôi
  //   const total = products.reduce((result, pro) => result + pro.price, 0);

  const total = useMemo(() => {
    const result = products.reduce((result, pro) => {
      console.log("^^");
      return result + pro.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <>
      <h1>Add products Here</h1>
      <input
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name..."
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="enter price..."
      />
      <button onClick={() => handleSubmit()}>Add</button>
      <p>TOTAL: {total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} -- {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddProducts;
