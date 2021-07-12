import { useEffect } from 'react';
import { getTokenFromUrl } from '../spotify'
import { useDataLayerValue } from '../DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'
import '../css/App.css'
import Login from './Login'
import Player from './Player'

const spotify = new SpotifyWebApi()

function App () {
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists()
        .then(playlists => dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        }))
      spotify.getPlaylist('37i9dQZEVXcQkJgKUpuJiW')
        .then(response => dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        }))
    }
  }, [dispatch])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
