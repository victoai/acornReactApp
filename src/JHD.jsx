import { useState } from "react";

function Jhd() {
  const [character, setCharacter] = useState({
    name: "프리렌",
    job: "마법사",
    age: "1000살 이상",
  });

  const changeCharacter = () => {
    setCharacter({
      name: "마키마",
      job: "공안 데블 헌터",
      age: "비공개",
    });
  };

  return (
    <div>
      <h2>캐릭터 정보</h2>

      <p>이름: {character.name}</p>
      <p>직업: {character.job}</p>
      <p>나이: {character.age}</p>

      <button onClick={changeCharacter}>캐릭터 변경</button>
    </div>
  );
}

export default Jhd;