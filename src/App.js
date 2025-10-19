import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  // Función para buscar canciones
  const handleSearch = (term) => {
    console.log("Buscar:", term);
    // Aquí pondrías la lógica para buscar canciones
  };

  // Función para guardar playlist en Spotify
  const handleSave = () => {
    console.log("Guardar playlist en Spotify");
    // Aquí pondrías la lógica para guardar la playlist
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
