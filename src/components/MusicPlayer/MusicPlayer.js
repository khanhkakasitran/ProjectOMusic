import React, { useState, useRef, useEffect } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaStepForward,
  FaBackward,
  FaStepBackward,
  FaPause,
  FaPlay,
  FaForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

import "./MusicPlayer.css";

function MusicPlayer({ song, imgSrc }) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0)
  // Lấy DOM element của audio player và progressBar
  const audioPlayer = useRef()
  const progressBar = useRef()
  // Lấy DOM element của progress khi chạy animation
  const animationRef = useRef()

  //Thay đổi trạng thái của duration
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)

    setDuration(seconds)
  }, [
    audioPlayer?.current?.loadedmetadata, 
    audioPlayer?.current?.readystate,
  ])

  // Phát, dừng bài hát
  const changePlayPause = () => {
    const prevPlay = isPlaying

    if(prevPlay) {
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    } else {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(handleProgressPlaying)
    }

    setPlaying(!prevPlay)
  };

  //Xử lý tính Time
  const calculateTime = (sec) => {
   //Lấy value của minutes
   const minutes = Math.floor(sec / 60) 
   const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`
   // Lấy value của seconds
   const seconds = Math.floor(sec % 60)
   const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`

   return `${returnMin}:${returnSec}`
  }

  //Thay đổi icon yêu thích
  const changeLoved = () => {
    setLoved(!isLove);
  };

  //Thay đổi progressBar
  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime()
  }

  // Xử lý progressBar khi animation đang playing
  const handleProgressPlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    changeCurrentTime()
    animationRef.current = requestAnimationFrame(handleProgressPlaying)
  }

  // Thay đổi thời gian hiện tại 
  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--played-progress',
      `${progressBar.current.value / duration * 100}%`
    )
  }

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>

      <div className="songAttributes">
        < audio
          src={song}
          preload="metadata"
          ref={audioPlayer}
        />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>

            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>

            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input 
            type="range" 
            className="progressBar" 
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {
              duration && !isNaN(duration) && calculateTime(duration) 
              ? calculateTime(duration) : "00:00"
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
