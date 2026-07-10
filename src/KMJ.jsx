import { useState } from "react";

function KMJ() {
      const [hello, setHello] = useState("안녕하세요");
    return (
        <>
            <h2>{hello}</h2>
            <p>김민정입니다.</p>

            <button onClick={()=>{  setHell("Hello");}}></button>
        </>
    );
}

export default KMJ;