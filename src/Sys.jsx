import { useState } from "react";

function Sys() {
    const lunchMenus = ["김치찌개", "돈가스", "제육볶음", "짜장면", "국밥"];

    const [menuIndex, setMenuIndex] = useState(0);

    return (
        <div>
            <h2>오늘의 점심 메뉴</h2>

            <p>{lunchMenus[menuIndex]}</p>

            <button
                onClick={() =>
                    setMenuIndex((currentIndex) =>
                        currentIndex === lunchMenus.length - 1
                            ? 0
                            : currentIndex + 1
                    )
                }
            >
                메뉴 변경
            </button>
        </div>
    );
}

export default Sys;