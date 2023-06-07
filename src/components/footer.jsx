import React from "react";

function Footer(){
    const x=new Date();
    var y=x.getFullYear();

    return(
        <footer>
            <p>copyright © {y}</p>
        </footer>
    );

}

export default Footer; 