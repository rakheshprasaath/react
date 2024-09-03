import React from "react";


const Square =({colorValue, hexValue, isTextBlack}) =>{
    return(
        <section className="square" style={{backgroundColor:colorValue, color:isTextBlack}} >
            <p>{colorValue=='' ? "empty" : colorValue}</p>
            <p>{hexValue}</p>
        </section>
    )
}

export default Square;