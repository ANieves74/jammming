import React from "react";

function Playlist({ tracks, playlistName, onSave }) {
  return (
    <div>
      <h2>{playlistName}</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name} - {track.artist}</li>
        ))}
      </ul>
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;