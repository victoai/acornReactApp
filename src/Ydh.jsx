import { useState } from "react";

function Ydh({ name = "여도현" }) {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{name}입니다.</h2>
      <p>버튼 클릭 횟수: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        버튼 클릭
      </button>
    </>
  );
}

export default Ydh;
