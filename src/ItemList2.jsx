import { useContext } from "react";
import { LikesContext } from "./App3";

const ItemList2 =(  )=>{


    const likes = useContext(LikesContext);
    return(<div>
        
        <ul>
        {
            likes.map(  (item, index) =>( <li key={index}>{item}</li>))
        }
        </ul>
      

    </div>)
}


export default ItemList2;