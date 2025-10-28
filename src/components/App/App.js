import React, { useState } from 'react';
import styles from './App.module.css';

// import components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

Spotify.getAccessToken();

const App = () => {

  const [searchResults, setSearchResults] = useState([
    /*{
      name: 'Summer in the City',
      artist: 'The Lovin Spoonful',
      album: 'Hums Of The Lovin Spoonful',
      id: 1
    },
    {
      name: 'All That She Wants',
      artist: 'Ace of Bace',
      album: 'The Sign',
      id: 2
    },
    {
      name: 'Its Like That',
      artist: 'Run DMC',
      album: 'The Greatest Hits',
      id: 3
    }*/
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([
    /*{
      name: 'Dreaming of You',
      artist: 'The Coral',
      album: 'The Invisible Invasion',
      id: 4
    },
    {
      name: 'Can I Kick It',
      artist: 'A Tribe Called Quest',
      album: 'Peoples Instinctive Travels and the Paths of Rhythm',
      id: 5
    }*/
  ]);

  const addTrack = (track) => {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  const removeTrack = (track) => {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }


  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }

  const search = (term) => {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }

  return (
    <>

      <Header />

      <div className={styles.App}>

        <SearchBar onSearch={search} />

        <div className={styles.lists}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />

          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />

        </div>

      </div>

      <Footer />

    </>
  );

};

export default App;