import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Compnent";


const MovielayoutHOC =(Component) => 
    ({...props}) => {
    return (
        <div>
            <h2>Hi i am from MovielayoutHOC </h2>
            <MovieNavbar></MovieNavbar>
            <Component {...props} />
            <div>Footer</div>
        </div>
        ) 
}


export default MovielayoutHOC;