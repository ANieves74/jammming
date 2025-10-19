import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={results} />
    </div>
  );
}

export default SearchResults;
