import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

const Sign_up = () => {
  return (
    <div>
      {" "}
      <h3> Hey, Sorry --- </h3>{" "}
      <h2> I am not yet in, please come back after sometime </h2>{" "}
    </div>
  );
};

export default DefaultLayoutHoc(Sign_up);
