import React from "react";

function Track({ track }) {
  return (
    <div>
      <p>{track ? `${track.name} - ${track.artist}` : "No track"}</p>
    </div>
  );
}

export default Track;
