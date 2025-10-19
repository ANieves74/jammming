import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, playlistName, onSave, onRemove }) {
  return (
    <div>
      <h2>{playlistName}</h2>
      <Tracklist tracks={tracks} onRemove={onRemove} />
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
