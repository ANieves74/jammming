import React from "react";

function Track({ track }) {
  if (!track) return null;

  return (
    <div>
      <p>
        <strong>{track.name}</strong> by {track.artist} | Album: {track.album}
      </p>
    </div>
  );
}

export default Track;
