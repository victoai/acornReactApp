import { useState } from "react";

function KKH() {
  const [food, setFood] = useState("피자");

  return (
    <div>
      <h2>좋아하는 음식: {food}</h2>

      <button onClick={() => setFood("치킨")}>
        음식 변경
      </button>
    </div>
  );
}

export default KKH;