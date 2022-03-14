import React, { useState, useEffect }from "react";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";

import "./AudioList.css";
import { Songs } from "../Songs/Songs";
import { MusicPlayer} from "../MusicPlayer/MusicPlayer";
function AudioList() {
  const [songs, setSongs] = useState(Songs)
  const [song, setSong] = useState(Songs[0].song)
  const [img, setImage] = useState(Songs[0].imgSrc)  

  //Thay đổi icon yêu thích
  const changeFavourite = (id) => {
      Songs.forEach(song => {
          if(song.id === id) {
              song.favourite = !song.favourite;
          }
      })

      setSongs([...Songs])
  }

  //Active nhạc
  useEffect(() => {
    const songs = document.querySelectorAll('.songs')
    
    function handleMenuClick() {
        songs.forEach((li) => li.classList.remove('active'))
        this.classList.add('active')
    }
    
    songs.forEach((element) => element.addEventListener('click', handleMenuClick))
  }, [])

  //Thay đổi nhạc
  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  }
  return (
    <div className="audioList">
      <h2 className="title">
        The List
        <span> {`${Songs.length} songs`} </span>
      </h2>

      <div className="songsContainer">
        {Songs &&
          Songs.map((song, index) => (
            <div 
                className="songs" 
                key={song.id}
                onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count"> {`#${index + 1}`} </div>

              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc } alt="" />
                </div>

                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="songArtist"> {song?.artist} </span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03.04
                    </p>

                    <div className="favourite"
                        onClick={() => changeFavourite(song?.id)}
                    >
                    {
                        song?.favourite ? 
                        (
                            <i>
                                <FaHeart />
                            </i> 
                        ) : (
                            <i>
                                <FaRegHeart />
                            </i>
                        )
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

    <MusicPlayer song={song} imgSrc={img}/>  
    </div>
  );
}

export { AudioList };
