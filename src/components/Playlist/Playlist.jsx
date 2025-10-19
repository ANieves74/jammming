import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, playlistName, onSave }) {
  return (
    <div>
      <h2>{playlistName}</h2>
      <Tracklist tracks={tracks} />
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
