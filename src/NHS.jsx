function NHS(){
    const [name, setName] = useState("나해수");

    function handleUpdate(){
        setName("나혜수");
    }
    
    return (
        <>
        <div>{name}</div>
        <button onClick={handleUpdate}>변경</button>
        </>
    );
}

export default NHS;