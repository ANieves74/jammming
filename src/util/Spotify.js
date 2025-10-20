// src/util/Spotify.js

const clientId = "7c799ed696e34ca4aa4be72ba83a0dff"; // tu client ID
const redirectUri = "https://ngrok.com/docs/errors/err_ngrok_4018"; // URL de redirección de desarrollo
let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    // Extraer token de la URL si existe
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      expiresIn = Number(expiresInMatch[1]);

      // Expira el token cuando corresponde
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // Limpiar la URL del token
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      // Si no hay token, redirigir al login de Spotify
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public%20user-read-private&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const token = this.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;

    try {
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
    } catch (error) {
      console.error("Error during Spotify search:", error);
      return [];
    }
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) return;

    const token = this.getAccessToken();
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

    try {
      // Obtener ID de usuario actual
      const userResponse = await fetch("https://api.spotify.com/v1/me", { headers });
      const userData = await userResponse.json();
      const userId = userData.id;

      // Crear nueva playlist
      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers,
          method: "POST",
          body: JSON.stringify({ name: playlistName }),
        }
      );

      const playlistData = await playlistResponse.json();
      const playlistId = playlistData.id;

      // Añadir canciones a la playlist
      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris }),
      });

      return true;
    } catch (error) {
      console.error("Error saving playlist:", error);
      return false;
    }
  },
};

export default Spotify;
