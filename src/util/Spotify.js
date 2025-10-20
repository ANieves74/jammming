const clientId = "7c799ed696e34ca4aa4be72ba83a0dff";
const redirectUri = "https://homogeneously-snaglike-selena.ngrok-free.dev"; // ✅ usar ngrok
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    // Extraer token de la URL
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Limpiar token después del tiempo
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // Limpiar URL para que no se vea el token
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      // Redirigir a login de Spotify
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const token = this.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;

    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) return [];

    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) return;

    const token = this.getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const response = await fetch("https://api.spotify.com/v1/me", { headers });
    const { id: userId } = await response.json();

    const createPlaylistResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers,
        method: "POST",
        body: JSON.stringify({ name: playlistName }),
      }
    );

    const { id: playlistId } = await createPlaylistResponse.json();

    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers,
      method: "POST",
      body: JSON.stringify({ uris: trackUris }),
    });
  },
};

export default Spotify;
