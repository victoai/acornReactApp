import { useState } from "react";
import {useNavigate} from  'react-router-dom';

function Login0(   {  setFlag } ){

    const [user , setUser]  = useState(null);
    const  nav  = useNavigate();

    const handleChange  =(  e )=>{
        const { name, value } = e.target;  // name  , value
        setUser(
          {
            ...user,
            [name] :value
          }         
        );
    };


    const handleClick =()=>{
        //로그인 처리
        if( user.id ==="acorn"  &&  user.pw  ==="1234"){
            alert("성공");
            //flag state변수 변경하기 
            setFlag(true);
            nav('/');

        }
    };
    
    return(
        <div>
            <h2> Login </h2>
             <input type="text" name="id"  value={ user?.id}  onChange={ handleChange }/>
             <input type="text" name="pw"  value={ user?.pw}  onChange={ handleChange }/>
             <button  onClick={ handleClick}> 로그인</button>
        </div>
    );
}
export default Login0;