

import { useNavigate,   Link } from "react-router-dom";

function Contact(){
    const nav= useNavigate();

    const handleClick =()=>{
        //alert("dkfkfkfk");
        nav('/detail2?a=100&b=200');

    };

    return (<div>
         contact
         
         {/* 페이지 이동,  Link로 이동 */}
         <Link to="/about">about 페이지이동</Link>

         {/* 버튼 클릭했을 때 페이지이동  */}
         <button  onClick={ handleClick }> detail2 페이지로 이동</button>
         
         </div>);
}
export default  Contact;