import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './styles'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import { selectPlaylist } from '../../features/PlaylistSlice';
import { useSelector } from 'react-redux';


const Footer = () => {
  const playlist = useSelector(selectPlaylist);
  return (
    <FooterContainer>
          <FooterLeft>
            <img src={playlist?.images[0]?.url} alt="playlist"/>
            <div>
            <h5>{playlist?.name}</h5>
            <p>{playlist?.description}</p>
            </div>
          </FooterLeft>
          <FooterCenter>

            <ShuffleIcon/>
            <SkipPreviousIcon/>
            <PlayCircleOutlineIcon/>
            <SkipNextIcon/>
            <RepeatIcon/>

          </FooterCenter>
          <FooterRight>

            <Grid container spacing={2}>
              <Grid item><PlaylistPlayIcon/></Grid>
              <Grid item><VolumeDownIcon/></Grid>
              <Grid item xs><Slider/></Grid>
            </Grid>

          </FooterRight>
    </FooterContainer>
  )
}

export default Footer