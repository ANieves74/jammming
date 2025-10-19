import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, playlistName, onSave, onRemove, onNameChange }) {
  return (
    <div>
      <input
      type="text"
      value={playlistName}
      onChange={(e) => onNameChange(e.target.value)}
      style={{ fontSize: "1.5rem", marginBottom: "10px "}}
      /> 
      <Tracklist tracks={tracks} onRemove={onRemove} />
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
