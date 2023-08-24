import React from "react";
import Navbar from "../components/Navbar.Compnent";

const DefaultlayoutHOC =(Component) => 
({...props}) =>  {
    return (
    <div>
        <h2>Hi i am from DefaultlayoutHOC </h2>
        <Navbar></Navbar>
        <Component {...props} />
        <div>Footer</div>
    </div>
    )
}


export default DefaultlayoutHOC;