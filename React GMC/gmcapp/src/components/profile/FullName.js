import React from "react";

function FullName(props) {
  
    return <div>
        <h2>My Name is {props.firstName} {props.lastName}</h2>
  </div>;
}

export default FullName;
