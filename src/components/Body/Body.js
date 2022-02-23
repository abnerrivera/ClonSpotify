import React from 'react'
import Header from './Header'
import { BodyContainer, Icons, Info, InfoText, Songs } from './styles'
import { useSelector } from 'react-redux'
import { selectPlaylist } from '../../features/PlaylistSlice'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from './SongRow'

const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log("play list:", playlist);
  return (
    <BodyContainer>
      <Header/>
      <Info>
      <img src={playlist?.images[0]?.url} alt="playlist"/>
      <InfoText>
        <h4>PLAY LIST</h4>
        <h5>{playlist?.name}</h5>
        <p>{playlist?.description}</p>
      </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilledIcon/>
          <FavoriteIcon fonsize ="large"/>
          <MoreHorizIcon fonsize ="large"/>
        </Icons>
        {
          playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index}/>
          ))
        }
      </Songs>
      
    </BodyContainer>
  )
}

export default Body 