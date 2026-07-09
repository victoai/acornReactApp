
import { useParams } from "react-router-dom";

function Detail(){
    // Url에서 path variable 값 가져오기   /detail/8
    const { id } = useParams();

    return ( 
    <div>
        detail

        <p>  detail  page : {  id} </p>

    </div>);
}

export default Detail;