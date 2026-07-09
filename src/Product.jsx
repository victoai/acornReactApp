import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product() {

  // 상품 목록
  const [products, setProducts] = useState([]);

  // 로딩 상태
  const [loading, setLoading] = useState(true);

  // 에러 상태
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("데이터를 가져오는데 실패했습니다.");
        }

        const data = await response.json();

        setProducts(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  return (

    <div style={{ padding: "20px" }}>

      <h1>상품 목록</h1>

      {loading && <h3>로딩 중...</h3>}

      {error && (
        <h3 style={{ color: "red" }}>
          {error}
        </h3>
      )}

      {!loading && !error && (

        <div className="wrap">

          <ul>

            {products.map((product) => (

              <li key={product.id} className="item">

                <Link
                  to={`/product/${product.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                >

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <h3>{product.title}</h3>

                  <p>
                    <strong>${product.price}</strong>
                  </p>

                </Link>

              </li>

            ))}

          </ul>

        </div>

      )}

    </div>

  );

}

export default Product;