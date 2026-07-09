import { createContext } from "react";
import ItemList2 from "./ItemList2";


export  const LikesContext  = createContext();

function App3(){
    let arr=["사과" ,"복숭아" ,"수박"];
  

    return(<div>

        <h2>use context</h2>
        <LikesContext.Provider value={arr}>
            <ItemList2 />         
        </LikesContext.Provider>
    </div>);
}

export default App3;