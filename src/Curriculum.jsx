import "./Curriculm.css";

function Curriculum() {

    const list = [

        {
            title: "HTML / CSS",
            description: "웹 페이지 구조와 스타일, 반응형 웹 제작" ,
            content: "inline  , block 태그 구분,  div 사용, position :static, absolute, relateive , fixed ,sticky   공간에 내가 원하는 요소 붙일 수 있는가?"
             
        },

        {
            title: "JavaScript",
            description: "ES6 문법, DOM, 이벤트, 비동기 처리",
            content: "변수, 배열, 객체 , 함수 , 콜백함수 작성할 수 있는가  , 배열매서드를 사용할 수 있는가"
            
        },

        {
            title: "Java",
            description: "객체지향, 컬렉션, 예외처리, IO",
            content:"변수, 배열, 함수 완전히 익히기,  캡슐화 -왜 캡슐인가?  매서드를 통해서 데이터 사용하기, 상속 , 다형성(존재하는 모든 객체는  Obejct 타입으로 다룰 수 있다)  , 업캐스팅, 다운캐스팅 "
        },

        {
            title: "Database",
            description: "Oracle, SQL, JOIN, SubQuery, View",
            content:"inner join 정확히 알고 사용할 수 있는가?  left outer join  , right outer join  필요성 아는가?  , 서브쿼리 작성" 

        },

        {
            title: "JSP / Servlet",
            description: "MVC1, JSP, Servlet, Session, Cookie",
            content:"자바로 동적페이지를 만드는 기술: Servlet , HttpServlet, HttpServletRequest, HttpServletResponse 요청과 응답"
        },

        {
            title: "MVC2 Pattern",
            description: "FrontController, Dispatcher, MVC2 설계" ,
            content:"contoller(서블릿) , model (서비스, DAO, DTO)  ,  view(jsp)"
        },

        {
            title: "Spring / Spring Boot",
            description: "DI, AOP, REST API, Validation",
            content:" 의존성과 주입 => 객체관리를 spring   담당  @Component, @Autowired , MVC개발과 데이터응답 Rest API"
            
        },

        {
            title: "MyBatis",
            description: "Mapper, Dynamic SQL, CRUD",
            content:"mapper  작성 - sql만 잘 작성하면 됨"
        },

        {
            title: "JPA",
            description: "Entity, JPQL, Fetch Join, QueryDSL",
            content :" 쿼리결과를 자바객체형태로 변환하는 것이  편리함, JPQL이라는 추상화된 언어 사용 ,  QueryDSL 은  JPQL을 자바코드로 작성하는 라이브러리"
        },

        {
            title: "Cloud",
            description: "AWS EC2, S3, RDS, Docker, CI/CD",
            content :"EC2 생성후 배포  , S3저장소 사용,  이벤트브리지사용, 도커(컨테이너 기술)로   스프링프로젝트 배포, 도커로 mysql 설치"
        },

        {
            title: "React",
            description: "Component, State, Router, Context API",
            content:"컴포넌트( jsx  문법 : html +자바스크립트표현식)  , state변수 (state변수에 리액트 한다) , props (자식컴포넌트에게 데이터 전달) , Context (공용 저장소)"  
        }

    ];

    return (

        <div className="wrap">

            <h1>교육 커리큘럼</h1>

            <div className="course-wrap">

                {
                    list.map((item, index) => (

                        <div className="card" key={index}>

                            <h2>{item.title}</h2>

                            <div className="overlay">
                                {item.content}
                            </div>

                            <div>{item?.description}</div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default Curriculum;