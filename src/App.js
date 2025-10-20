import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import Spotify from "./util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  // 🔍 Buscar canciones en Spotify
  const handleSearch = async (term) => {
    try {
      const results = await Spotify.search(term);
      setSearchResults(results);
      if (!results.length) {
        alert("No tracks found. Check your Spotify login and token.");
      }
    } catch (error) {
      console.error("Error searching Spotify:", error);
      alert("Error connecting to Spotify. Make sure you have a valid token.");
    }
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
  const handleSave = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    try {
      await Spotify.savePlaylist(playlistName, trackUris);
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
      alert("✅ Playlist saved to Spotify!");
    } catch (error) {
      console.error("Error saving playlist:", error);
      alert("⚠️ Error saving playlist. Try again!");
    }
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
