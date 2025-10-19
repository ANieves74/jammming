import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a song, album, or artist"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={() => onSearch(term)}>Search</button>
    </div>
  );
}

export default SearchBar;
