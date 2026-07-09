import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (product === null) {
    return <p>로딩 중...</p>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "250px" }}
      />
      <p>가격: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;