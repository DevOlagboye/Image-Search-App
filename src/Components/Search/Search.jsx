import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  const Submit = () => {
    fetchRequest();
    setImg("");
  };
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

      <div className="image-container">
        {res.map((val) => {
          return (
            <img
              className="images"
              src={val.urls.small}
              alt={val.alt_description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Search;
