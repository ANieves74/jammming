import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ results, onAdd }) {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={results} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
