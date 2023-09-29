import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Compnent";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        {/* <h2>Hi i am from MovielayoutHOC </h2> */}
        <MovieNavbar></MovieNavbar>
        <Component {...props} />
        {/* <div> 
          Footer
        </div> */}
        <hr />
        <div align="center"> ********* Footer  *********** </div>
      </div>
    );
  };

export default MovieLayoutHoc;
