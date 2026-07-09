import "./ProgrammingSummary.css";

function ProgrammingSummary() {
  return (
    <div className="programming-summary">
      <h1>프로그래밍 핵심 정리</h1>

      <section className="summary-section">
        <h2>1. 프로그래밍이란?</h2> 

        <div className="main-box">
          <strong>데이터 + 절차 = 원하는 결과</strong>
          <p>
            프로그래밍은 프로그래밍 언어를 사용하여 데이터를 정해진 절차로
            가공하고 원하는 결과를 만들어 내는 것이다. 
          </p>

          <p>  <strong>알고리즘 :입력, 처리, 출력</strong></p>
        </div>

        <div className="card-wrap">
          <div className="summary-card">
            <h3>데이터 저장</h3>
            <p>변수, 배열, 객체, 자료구조를 이용하여 데이터를 저장한다.</p>
          </div>

          <div className="summary-card">
            <h3>절차 작성</h3>
            <p>명령어, 연산자, 조건문, 반복문, 알고리즘으로 절차를 만든다.</p>
          </div>

          <div className="summary-card">
            <h3>변수</h3>
            <p>하나의 데이터를 저장할 수 있는 메모리 공간이다.</p>
          </div>

          <div className="summary-card">
            <h3>배열</h3>
            <p>
              여러 개의 데이터를 연속된 공간에 저장하고 index로 접근한다.
              index는 0부터 시작한다.
            </p>
          </div>
        </div>

        <pre className="code-box">{`int[] arr = new int[5];`}</pre>
      </section>

      <section className="summary-section">
        <h2>2. 함수와 클래스</h2>

        <div className="card-wrap">
          <div className="summary-card">
            <h3>함수</h3>
            <p>명령어 묶음이다. 코드 중복을 줄이고 재사용할 수 있다.</p>
          </div>

          <div className="summary-card">
            <h3>클래스</h3>
            <p>
              구조체와 함수를 묶어 놓은 것이다. 구조가 있는 데이터를 처리하기
              위한 자료형이다.
            </p>
          </div>

          <div className="summary-card">
            <h3>캡슐화</h3>
            <p>생성자, 접근제어자, this를 이용하여 객체 내부를 관리한다.</p>
          </div>
        </div>
      </section>

      <section className="summary-section">
        <h2>3. 학생 클래스 예시</h2>

        <div className="student-box">
          <div className="student-title">Student</div>

          <div className="student-content">
            <div>
              <h3>필드</h3>
              <ul>
                <li>이름</li>
                <li>학년</li>
                <li>반</li>
                <li>번호</li>
                <li>국어 / 영어 / 수학</li>
                <li>평균</li>
                <li>학점</li>
              </ul>
            </div>

            <div>
              <h3>메서드</h3>
              <ul>
                <li>평균 구하기</li>
                <li>학점 구하기</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section">
        <h2>4. 상속과 다형성</h2>

        <div className="card-wrap">
          <div className="summary-card">
            <h3>상속</h3>
            <p>
              모든 클래스는 Object 클래스를 상속받는다. 부모의 메서드를
              자식에서 재정의할 수 있다.
            </p>
          </div>

          <div className="summary-card">
            <h3>오버라이딩</h3>
            <p>
              toString(), equals() 같은 메서드를 필요에 맞게 다시 작성할 수 있다.
            </p>
          </div>

          <div className="summary-card">
            <h3>다형성</h3>
            <p>
              다양한 객체를 하나의 부모 타입으로 다룰 수 있다. 예를 들어 고양이,
              말, 개를 모두 동물로 다룰 수 있다.
            </p>
          </div>
        </div>

        <pre className="code-box">{`String str = "hello";

Object obj = str;          // 업캐스팅
String str2 = (String)obj; // 다운캐스팅`}</pre>

        <p className="warning">
          다운캐스팅은 실제 참조하는 객체 타입이 맞을 때만 안전하다.
        </p>
      </section>

      <section className="summary-section">

    <h2>5. 객체지향과 Java Web</h2>

    <div className="main-box">
        <strong>데이터 + 함수</strong>

        <p>
            프로그래밍은 데이터를 저장하는 방법과
            함수를 작성하는 방법을 함께 배우는 과정이다.
        </p>

        <p>
            무엇을 중심으로 개발하느냐에 따라
            절차지향과 객체지향 프로그래밍으로 구분할 수 있다.
        </p>
    </div>

    <div className="card-wrap">

        <div className="summary-card">
            <h3>데이터 저장</h3>

            <ul>
                <li>변수</li>
                <li>객체</li>
                <li>배열</li>
                <li>ArrayList</li>
                <li>LinkedList</li>
                <li>HashSet</li>
                <li>HashMap</li>
            </ul>
        </div>

        <div className="summary-card">
            <h3>메모리 데이터 --- 외부로 보내는 방법</h3>

            <ul>
                <li>파일(File)</li>
                <li>소켓(Socket)</li>
                <li>JDBC(Database)</li>
            </ul>
        </div>

        <div className="summary-card">
            <h3>Java Web</h3>

            <ul>
                <li>Internet</li>
                <li>WWW</li>
                <li>HTTP</li>
                <li>HTML</li>
                <li>Web Server(WAS)</li>
            </ul>
        </div>

    </div>

</section>

<section className="summary-section">

    <h2>6. Java Web 개발 흐름</h2>

    <div className="card-wrap">

        <div className="summary-card">
            <h3>Servlet</h3>

            <p>
                HttpServletRequest<br />
                HttpServletResponse
            </p>
        </div>

        <div className="summary-card">
            <h3>JSP</h3>

            <p>
                View 화면을 담당하며
                사용자에게 결과를 출력한다.
            </p>
        </div>

        <div className="summary-card">
            <h3>MVC Pattern</h3>

            <p>
                Servlet과 JSP의 역할을 분리하여
                유지보수를 쉽게 한다.
            </p>
        </div>

        <div className="summary-card">
            <h3>Front Controller</h3>

            <p>
                하나의 Controller가
                모든 요청을 먼저 처리한다.
            </p>
        </div>

        <div className="summary-card">
            <h3>Spring</h3>

            <p>
                MVC 구조를 더욱 효율적으로
                개발할 수 있는 Framework
            </p>
        </div>

    </div>

</section>

<section className="summary-section">

    <h2>7. 웹 개발 흐름</h2>

    <div className="code-box">

        Internet
        <br />
        ↓
        <br />
        WWW
        <br />
        ↓
        <br />
        HTTP
        <br />
        ↓
        <br />
        HTML
        <br />
        ↓
        <br />
        Web Server (Tomcat)
        <br />
        ↓
        <br />
        Servlet
        <br />
        ↓
        <br />
        JSP
        <br />
        ↓
        <br />
        MVC Pattern
        <br />
        ↓
        <br />
        Front Controller
        <br />
        ↓
        <br />
        Spring

    </div>

</section>

<section className="summary-section">

    <h2>8. 코드 연습 방법</h2>

    <ul>

        <li>✔ main()에서 먼저 실행해 보기</li>

        <li>✔ 메서드로 분리하기</li>

        <li>✔ 라이브러리 형태로 만들기</li>

        <li>✔ 반환 타입과 매개변수를 항상 생각하며 작성하기</li>

    </ul>

</section>
    </div>
  );
}

export default ProgrammingSummary;