import React from "react";

const Search = ({ searchHandler }) => {
    const handleSearchInputChange = e => {
        searchHandler(e.target.value);
    };

    return (
        <form className="search">
            <input
                onChange={handleSearchInputChange}
                type="text"
                placeholder="Search Title..."
            />
            <i className="fas fa-search" type="submit" value="SEARCH"></i>
        </form>
    );
};

export default Search;