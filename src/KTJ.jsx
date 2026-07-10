import { useState } from 'react';

const characters = [
  {
    name: '마리오',
    job: '배관공',
    skill: '점프',
    desc: '버섯왕국의 영웅. 공주를 구하러 모험을 떠난다.',
  },
  {
    name: '링크',
    job: '기사',
    skill: '검술',
    desc: '히랄 왕국의 용사. 젤다 공주를 지키기 위해 싸운다.',
  },
  {
    name: '스티브',
    job: '탐험가',
    skill: '건축',
    desc: '마인크래프트 세계에서 다양한 건물을 짓고 모험한다.',
  },
];

function KTJ() {
  const [index, setIndex] = useState(0);
  const character = characters[index];

  const handleChange = () => {
    setIndex((prev) => (prev + 1) % characters.length);
  };

  return (
    <>
      <h2>캐릭터 정보</h2>
      <p><strong>이름:</strong> {character.name}</p>
      <p><strong>직업:</strong> {character.job}</p>
      <p><strong>특기:</strong> {character.skill}</p>
      <p><strong>설명:</strong> {character.desc}</p>
      <button onClick={handleChange}>다음 캐릭터</button>
    </>
  );
}

export default KTJ;
