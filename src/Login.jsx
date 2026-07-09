import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setFlag }) {

    const [user, setUser] = useState({
        id: "",
        pw: ""
    });

    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleClick = () => {

        if (user.id === "acorn" && user.pw === "1234") {
            alert("로그인 성공");
            setFlag(true);
            nav("/");
        } else {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
    };

    return (
        <div className="login-container">

            <div className="login-box">

                <h2>🛒 ACORN MALL</h2>

                <p>로그인 후 다양한 상품을 만나보세요.</p>

                <input
                    type="text"
                    name="id"
                    placeholder="아이디"
                    value={user.id}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="pw"
                    placeholder="비밀번호"
                    value={user.pw}
                    onChange={handleChange}
                />

                <button onClick={handleClick}>
                    로그인
                </button>

            </div>

        </div>
    );
}

export default Login;