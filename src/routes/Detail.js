import React from 'react';
import { useLocation } from "react-router-dom";

function Detail(){
    const location = useLocation();
    console.log(location);
    return <span>hello</span>;
}

export default Detail;