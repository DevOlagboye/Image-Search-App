import React, { useState, useEffect, useRef } from "react";
import "./Search.css";
import errorIllustration from "../../images/error-illustration.svg";

const Search = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const inputRef = useRef();
  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
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
        ref={inputRef}
        type="text"
        placeholder="Search Anything"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit" onClick={Submit}>
        Search
      </button>

      <div className="image-container">
        {res.length === 0 ? (
          <>
            <p className="error">Kindly Make A Search</p>
            <img
              src={errorIllustration}
              alt="error Illustration"
              className="image-illustration"
            />
          </>
        ) : (
          res.map((val) => {
            return (
              <>
                <img
                  className="images"
                  key={val.id}
                  src={val.urls.small}
                  alt={val.alt_description}
                />
              </>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Search;
