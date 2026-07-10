import { useState } from "react";

function Kjy(){

    const [ name, setName] = useState("오늘은");

    function handleUpdate(){

            setName("금요일입니다");
    }
    return(<>

        
        <div style={{backgroundColor:"lightblue", color:"black", border:"1px solid black"}}> {name} </div>
     
        <button onClick={handleUpdate}>변경</button>
        

    </>)
}

export default Kjy;