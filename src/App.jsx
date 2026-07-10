 
import './App.css';
import  { Routes,Route , Link} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contack';
import Detail from './Detail';
import Detail2 from './Detail2';
import Login  from './Login';
import Product  from './Product';
import Staff from './Staff';
import Curriculum from "./Curriculum";
import ProgrammingSummary from "./ProgrammingSummary";

import ProductDetail from "./ProductDetail";
import { useState } from 'react';

function App() {

  //true, false 값을 갖는  state 변수 만들기 
  const[ flag , setFlag ]  = useState(false);

  return (
    <div className="App">  
    <nav>
             <Link to="/">Home</Link>  
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link> 
             <Link to="/detail/8">detail</Link> 
             <Link to="/detail2">detail2</Link>
             <Link to="/product">product</Link>
             <Link to="/staff">staff</Link>
             <Link to="/curriculum">Curriculum</Link>
             <Link to="/programming">프로그래밍정리</Link>
    
             
             {/* 로그인성공여부에 따라  */}
             {  flag  ||  <Link to="/login">login</Link> }  
            {flag && (
        <>
            <span>환영합니다^^</span>
            <button onClick={() => setFlag(false)}>
                로그아웃
            </button>
        </>
    )}

    </nav>  

    <Routes>
       <Route  path="/"  element={ <Home/>} />
       <Route  path="/about"  element={ <About/>} />
       <Route  path="/contact"  element={ <Contact/>} />  
       <Route  path="/detail/:id"  element={ <Detail/>} /> 
       <Route  path="/detail2"  element={ <Detail2/>} />      
       <Route  path="/staff"  element={ <Staff/>} />
       <Route  path="/login"  element={ <Login   setFlag={setFlag}/>} />   
       <Route  path="/product"  element={ <Product/>} />
       <Route  path="/product/:id" element={<ProductDetail />} />  
       <Route path="/curriculum" element={<Curriculum />} />  
       <Route path="/programming" element={<ProgrammingSummary />} /> 
    </Routes>
    </div>
  );
}

export default App;
