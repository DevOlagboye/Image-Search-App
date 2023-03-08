import React, { useState, useEffect } from "react";
import "./Search.css";

const Submit = () => {};
const Search = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Anything..."
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit" onClick={Submit}>
        Search
      </button>
    </div>
  );
};
export default Search;
