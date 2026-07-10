

function NHS(){
    const [name, setName] = useState("나해수");

    function handleUpdate(){
        //alert("버튼 클릭");
        setName("나혜수");
    }
    
    //버튼 클릭시 이름 바꾸기
    return (
        <>
        <div>{name}</div>
        <button onClick={handleUpdate}>변경</button>
        </>
    );
}

export default NHS;