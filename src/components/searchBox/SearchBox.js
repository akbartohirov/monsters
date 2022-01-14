import React from "react";
import "./SearchBox.style.css";

const SearchBox = ({ placeholder, searchHandler }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={searchHandler}
    />
  );
};

export default SearchBox;
