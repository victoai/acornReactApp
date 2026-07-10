import { useState } from "react";

function Psi() {
      const [hello, setHello] = useState("안녕하세요");
    return (
        <>
            <h2>{hello}</h2>
            <p>박세인 입니다.</p>

            <button onClick={()=>{  setHell("Hello");}}></button>
        </>
    );
}

export default Psi;