import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import Spotify from "./util/Spotify";

function App() {
  // Estado para resultados de búsqueda
  const [searchResults, setSearchResults] = useState([]);
  // Estado para playlist
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  // 🔍 Buscar canciones en Spotify
  const handleSearch = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  // ➕ Añadir canción a playlist
  const addTrack = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  // ➖ Quitar canción de playlist
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((t) => t.id !== track.id));
  };

  // 💾 Guardar playlist en Spotify
  const handleSave = () => {
    const trackUris = playlistTracks.map((track) => track.uri);

    Spotify.savePlaylist(playlistName, trackUris).then((success) => {
      if (success) {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
        alert("✅ Playlist saved to Spotify!");
      } else {
        alert("⚠️ Error saving playlist. Try again!");
      }
    });
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} onAdd={addTrack} />
      <Playlist
        tracks={playlistTracks}
        playlistName={playlistName}
        onSave={handleSave}
        onRemove={removeTrack}
        onNameChange={setPlaylistName}
      />
    </div>
  );
}

export default App;
