import { useState } from "react";

function Sjc() {

    const [message] = useState("안녕하세요!");

    return (
        <>
            <h2>송주창입니다.</h2>
            <p>{message}</p>
        </>
    );
}

export default Sjc;