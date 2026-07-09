import "./About.css";

function About() {
  return (
    <div className="about">

        <div className="teacher-info">
        <h2>👨‍🏫 강사 소개</h2>
        <p><strong>강사명</strong> : 우주연</p>
        <p><strong>연락처</strong> : 010-3903-1028</p>
        <p><strong>Email</strong> : victoai@naver.com</p>
        <p><strong> 내 도움이 필요하면 언제든 연락해요 ^^</strong></p>
        </div>

      <h1>📖 교육과정 소개</h1>

      <p className="intro">
        프로그래밍의 기초부터 Spring Boot와 React를 활용한
        실무 웹 개발까지 학습하는 과정입니다.
      </p>

      <div className="course-wrap">
         <div className="course">
          <h2>🌱 Front</h2>
          <ul>
            <li>html  -tag</li>
            <li>css  </li>
            <li>javascript</li>          
          </ul>
        </div>

        <div className="course">
          <h2>💻 프로그래밍 기초</h2>
          <ul>
            <li>변수와 자료형</li>
            <li>배열과 객체</li>
            <li>자료구조와 알고리즘 :입력, 처리, 출력</li>
            <li>함수와 클래스</li>
          </ul>
        </div>

        <div className="course">
          <h2>☕ Java</h2>
          <ul>
            <li>객체지향 프로그래밍</li>
            <li>상속 · 다형성</li>
            <li>컬렉션 Framework</li>
            <li>파일 입출력</li>
          </ul>
        </div>

        <div className="course">
          <h2>🌐 Java Web</h2>
          <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>Servlet / JSP</li>
            <li>MVC2 Pattern</li>
            <li>Front Controller</li>
          </ul>
        </div>

        <div className="course">
          <h2>🌱 Spring Boot</h2>
          <ul>
            <li>Spring Framework</li>
            <li>REST API</li>
            <li>MyBatis</li>
            <li>JPA</li>
          </ul>
        </div>

        <div className="course">
          <h2>☁️ Cloud & Frontend</h2>
          <ul>
            <li>AWS</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>React</li>
          </ul>
        </div>

         <div className="course">
          <h2> project</h2>
          <ul>
            <li>Front </li>
            <li>자바  </li>
            <li>MVC2 웹  </li>
            <li>final  project</li>
          </ul>
        </div>
          <div className="course">
          <h2> 주요내용</h2>
          <ul>
            <li>  한 페이지 뽀개기- div, position</li>
            <li>  변수, 배열, 함수 </li>
            <li>  클래스작성, 캡슐화코드이해 (생성자이해) , 매서드로 데이터 사용하기 , 상속(오버라이딩) , 상속으로 다형성 얻기</li>
            <li>  서블릿 이해,  웹에 대한 이해 (웹페이지를 동적으로 만드는 기술)</li>
            <li>  선택한 비지니스에 대한 이해및 스프링부트로 만들고 클라우드에 배포</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default About;