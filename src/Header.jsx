import React from "react";


function Header(props){
    return(
        <div className="headerDiv">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;