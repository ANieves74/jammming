import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  // Datos simulados
  const exampleTracks = [
    { id: 1, name: "Track 1", artist: "Artist A", album: "Album X" },
    { id: 2, name: "Track 2", artist: "Artist B", album: "Album Y" },
    { id: 3, name: "Track 3", artist: "Artist C", album: "Album Z" },
  ];

  // Función de búsqueda (simula recibir datos de Spotify)
  const handleSearch = (term) => {
    console.log("Search clicked:", term);
    setSearchResults(exampleTracks); // Asignamos los datos de ejemplo
  };

  const handleSave = () => {
    console.log("Save to Spotify clicked");
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
