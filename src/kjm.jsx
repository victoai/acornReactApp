import { useState } from "react";

function Kjm() {
  const [name, setName] = useState("김재민");

  return (
    <>
      <h2>{name}입니다.</h2>
      <p>안녕하세요.</p>

      <button onClick={() => setName("리액트")}>
        이름 변경
      </button>
    </>
  );
}

export default Kjm;