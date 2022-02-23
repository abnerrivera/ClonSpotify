import React from 'react'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login/Login';
import Frontend from './components/Frontend/Frontend';
import { getTokenURL } from './logic';
import {selectUser, SET_USER} from './features/UserSlice';
import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import {SET_PLAYLIST} from './features/PlaylistSlice';


const spotify = new SpotifyWebApi();


function App() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  

  useEffect(() => {
    const hash =  getTokenURL();
    //window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>dispatch(SET_USER(user)))
      console.log("token =>", token)
      //CAMBIAR PARA QUE SEA OTRA LISTA DE REPRODUCCION
      spotify.getPlaylist("37i9dQZF1DXbvPjXfc8G9S").then(playlist => 
        dispatch(SET_PLAYLIST(playlist)))
    }




  }, [dispatch])

  return (
    <div>
      {
        user ? <Frontend/> : <Login/>
      }
    </div>
  );
}

export default App;
