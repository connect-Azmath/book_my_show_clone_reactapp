import React from "react";
import Navbar from "../components/Navbar/Navbar.Compnent";

const DefaultlayoutHoc =(Component) => 
({...props}) =>  {
    return (
    <div>
        {/* <h2>Hi i am from DefaultlayoutHOC </h2> */}
        <Navbar></Navbar>
        <Component {...props} /> 
        {/* <div> Footer</div> */}
        <hr />
        <div align="center"> ********* Footer  *********** </div>
    </div>
    )
}


export default DefaultlayoutHoc;