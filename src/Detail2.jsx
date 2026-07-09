import { useSearchParams } from 'react-router-dom';


//detail2?a=10&b=20
function Detail2(){
   const [searchParams] = useSearchParams();
   const a= searchParams.get("a");
   const b = searchParams.get("b");
   
    return( 
    <div> 

        <h2>detail2</h2>

        a= {a}
        b= {b}
    </div>
);
}

export default Detail2;