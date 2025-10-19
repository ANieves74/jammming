import React from "react";

function Track({ track, onAdd, onRemove }) {
  if (!track) return null;

  return (
    <div>
      <p>
        <strong>{track.name}</strong> by {track.artist} | Album: {track.album}
        {onAdd && (
          <button onClick={() => onAdd(track)} style={{ marginLeft: "10px" }}>
            +
          </button>
        )}
        {onRemove && (
          <button onClick={() => onRemove(track)} style={{ marginLeft: "10px"}}>
            -
          </button>
        )}
      </p>
    </div>
  );
}

export default Track;
