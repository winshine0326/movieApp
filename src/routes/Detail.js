import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    useEffect(() => { // 컴포넌트가 렌더링 된 이후 페이지 이동
        if (location.key === "default") {
            navigate("/");
        }
    }, [location, navigate]); // navigate가 변경될 때만 실행

    if (location.key != "default") {
        return (
            <div>
                <span>{location.state.props.title}</span>
            </div>
        );
    }
}

export default Detail;