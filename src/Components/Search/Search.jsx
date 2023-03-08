import React from "react";
import "./Search.css";

const Submit = () => {};
const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search Anything..." />
      <button type="submit" onClick={Submit}>
        Search
      </button>
    </div>
  );
};
export default Search;
