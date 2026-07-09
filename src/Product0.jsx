import React, { useState, useEffect } from "react";
function Product0(){

    const [products, setProducts] = useState([]);

    //useEffect( ()=>{} ,  [] );
    useEffect(()=>{
        console.log( "처음 한 번 실행"    );

        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("데이터를 가져오는데 실패했습니다.");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                  console.log( err);
            });

    },[]);
    return(<>
    <ul>
         { products.map( (item)=>( <li  key={item.id}>  
              {item.title} 
              <img src={item.image} alt={item.title} />
         </li>))}
    </ul>

    <ul>
    {products.map((item) => (
        <li
        key={item.id}
        style={{             
            border:"1px solid black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        {item.title}
        <img src={item.image} alt={item.title} />
        </li>
    ))}
 </ul> 

    </>);
}

export default  Product0;