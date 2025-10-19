import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  // Función de búsqueda (placeholder)
  const handleSearch = (term) => {
    console.log("Search clicked:", term);
    // Aquí iría la lógica real de búsqueda
  };

  // Función para guardar playlist (placeholder)
  const handleSave = () => {
    console.log("Save to Spotify clicked");
    // Aquí iría la lógica para guardar la playlist en Spotify
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <Playlist
        tracks={playlistTracks}
        playlistName={playlistName}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
