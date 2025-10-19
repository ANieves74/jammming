import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  // Estado de búsqueda
  const [searchResults, setSearchResults] = useState([]);

  // Estado de playlist
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  // Datos simulados para búsqueda
const exampleTracks = [
  { id: 1, name: "Track 1", artist: "Artist A", album: "Album X", uri: "spotify:track:111" },
  { id: 2, name: "Track 2", artist: "Artist B", album: "Album Y", uri: "spotify:track:222" },
  { id: 3, name: "Track 3", artist: "Artist C", album: "Album Z", uri: "spotify:track:333" },
];

  // Función de búsqueda (simulada)
  const handleSearch = (term) => {
    console.log("Search clicked:", term);
    setSearchResults(exampleTracks);
  };

  // Función para agregar track a playlist
  const addTrack = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((t) => t.id !== track.id)
    );
  };

    // Función para guardar playlist
  const handleSave = () => {
    if (playlistTracks.length === 0) {
      alert("Your playlist is empty!")
      return;
    } 

    const trackUris = playlistTracks.map((track) => track.uri);
    console.log("Saving playlist:", playlistName);
    console.log("Track URIs:", trackUris);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
    alert("Playlist saved successfully!");
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
