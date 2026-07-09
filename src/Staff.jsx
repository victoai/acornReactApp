import "./Staff.css";
import { useState } from "react";

function Staff() {
const [students] = useState([
    {
        id: 1,
        name: "김태준",
        major: "웹개발",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=김태준"
    },
    {
        id: 2,
        name: "고지연",
        major: "웹개발",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=고지연"
    },
    {
        id: 3,
        name: "황스일",
        major: "웹개발",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=황스일"
    },
    {
        id: 4,
        name: "김민정",
        major: "웹개발",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=김민정"
    },
    {
        id: 5,
        name: "이현겸",
        major: "웹개발",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=이현겸"
    },
    {
        id: 6,
        name: "박세인",
        major: "웹개발",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=박세인"
    },
    {
        id: 7,
        name: "여도현",
        major: "Spring Boot",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=여도현"
    },
    {
        id: 8,
        name: "장해든",
        major: "Spring Boot",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=장해든"
    },
    {
        id: 9,
        name: "나해수",
        major: "Spring Boot",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=나해수"
    },
    {
        id: 10,
        name: "손영석",
        major: "Spring Boot",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=손영석"
    },
    {
        id: 11,
        name: "송주창",
        major: "React",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=송주창"
    },
    {
        id: 12,
        name: "김민경",
        major: "React",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=김민경"
    },
    
    {
        id: 13,
        name: "김재민",
        major: "React",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=김재민"
    },
    {
        id: 14,
        name: "정철진",
        major: "React",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=정철진"
    },
    {
        id: 15,
        name: "조아진",
        major: "React",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=조아진"
    },
    {
        id: 16,
        name: "이정하",
        major: "AI",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=이정하"
    },
    {
        id: 17,
        name: "엄진희",
        major: "AI",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=엄진희"
    },
    {
        id: 18,
        name: "장윤성",
        major: "AI",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=장윤성"
    },
    {
        id: 19,
        name: "이용찬",
        major: "AI",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=이용찬"
    },
    {
        id: 20,
        name: "김건희",
        major: "React",
        image: "https://api.dicebear.com/9.x/personas/svg?seed=김건희"
    },
]);
  return (
    <div className="staff-container">

      <h1>직원 소개</h1>
      <p className="sub-title">
        에이콘몰을 위해 노력하는 직원들입니다.
      </p>

  <div className="staff-list">

                {students.map((student) => (
                    <div className="card" key={student.id}>

                        <img
                            src={student.image}
                            alt={student.name}
                        />

                        <h3>{student.name}</h3>

                        <p>{student.major}</p>

                    </div>
                ))}

            </div>

    </div>
  );
}

export default Staff;