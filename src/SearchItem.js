import React from "react";

const SearchItem =({Search, setSearch}) =>{
    return(
        <form className="searchForm">
            <input type="text"
            required
            placeholder="Search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
             />

        </form>
    )
}
export default SearchItem;