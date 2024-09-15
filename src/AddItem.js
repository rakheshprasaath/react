import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem =({newItem, setNewItem, handleSubmit}) =>{

    const inputFocus =useRef();

    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="additem">Add Item</label>

            <input 
            ref={inputFocus}
            autoFocus
            id="additem"
            type="text"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e) =>setNewItem(e.target.value)}></input>

            <button
            type="=submit"
            aria-label="Add Item"
            onClick={() => inputFocus.current.focus()}><FaPlus /></button>
        </form>
    )
}

export default AddItem