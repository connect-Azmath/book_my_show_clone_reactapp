import React from "react";
import Navbar from "../components/Navbar.Compnent";


const MovielayoutHOC =(Component) => 
    ({...props}) => {
    return (
        <div>
            <h2>Hi i am from MovielayoutHOC </h2>
            <Navbar></Navbar>
            <Component {...props} />
            <div>Footer</div>
        </div>
        ) 
}


export default MovielayoutHOC;