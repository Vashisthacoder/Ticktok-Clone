import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Ticker from 'react-ticker';

function VideoFooter({channel,description,song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <MusicNoteIcon className="videoFooter_icon"/>

        <Ticker mode="smooth">
          
          {({index}) => (
          
          <div>

          <p>{song} </p>

          </div>
          

          )}



        </Ticker>
            </div>
            
        <img className="videoFooter_record" src="" alt=""/>

        </div>
    )
}

export default VideoFooter

