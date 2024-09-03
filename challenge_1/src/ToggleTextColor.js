import React from "react";
import colorNames from "colornames"

const ToggleTextColor=({colorValue, setColorValue, isTextBlack, setIsTextBlack, setHexValue}) => {
    return(
        <form className="addForm" onSubmit={(e) => e.preventDefault()}>
            <input
            required
            placeholder="enter color"
            value={colorValue}
            onChange={(e) => {setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))}
            }
            ></input>
            <br></br>
            <button type='submit' aria-label="Apply Text Color" onClick={() => setIsTextBlack(!isTextBlack)}>Toggle Text Color</button>
        </form>
    )
}

export default ToggleTextColor;