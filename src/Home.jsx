import "./Home.css";
import reactImage from "./assets/home.png";
function Home() {
  return (
    <div className="home">

      <div className="hero">
            <img
        //src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
         src={reactImage}  alt="Programming"/>
       
      

        <div className="hero-text">
          <h1>🛒 에이콘몰에 오신 것을 환영합니다.</h1>
          <p>다양한 상품을 쉽고 빠르게 만나보세요.</p>

          <button>쇼핑 시작하기</button>
        </div>
      </div>

    </div>
  );
}

export default Home;