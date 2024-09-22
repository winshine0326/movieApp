import React,{ useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Detail(){
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    useEffect(() => {
        if (location.key === "default") {
            navigate("/"); 
        }
    }, [location, navigate]);

    return <span>hello</span>;
}

export default Detail;