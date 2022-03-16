import React, { useState, useRef, useEffect } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaStepForward,
  FaRedo,
  FaStepBackward,
  FaPause,
  FaPlay,
  FaRandom,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

import "./MusicPlayer.css";

function MusicPlayer({ song, imgSrc }) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  // const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0)
  // Lấy DOM element của audio player và progressBar
  const audioPlayer = useRef()
  const progressBar = useRef()
  // Lấy DOM element của progress khi chạy animation
  // const animationRef = useRef()

  //Thay đổi trạng thái của duration
  // useEffect(() => {
  //   const seconds = Math.floor(audioPlayer.current.duration)

  //   setDuration(seconds)
  //   console.log(seconds)
  // }, [
  // //   audioPlayer?.current?.loadedmetadata, 
  //   audioPlayer?.current?.readystate,
  // ])

  // Play / Pause / Seek song
  const changePlayPause = () => {
    const prevPlay = isPlaying

    if (prevPlay) {
      audioPlayer.current.pause()
      //cancelAnimationFrame(animationRef.current)
    } else {
      audioPlayer.current.play()
      //animationRef.current = requestAnimationFrame(handleProgressPlaying)
    }

    setPlaying(!prevPlay)

    // Tiến độ song
    audioPlayer.current.ontimeupdate = function () {
      if (audioPlayer.current.duration) {
        const progressPercent = audioPlayer.current.currentTime
        progressBar.current.value = progressPercent
      }
    }

  };

  //Xử lý khi tua Song
  const changeProgress = (progressBar) => {
    const seekTime = progressBar.target.value
    audioPlayer.current.currentTime = seekTime

    progressBar.target.style.setProperty(
      '--played-progress',
      `${seekTime}%`
    )
  }

  //Xử lý tính Time
  //const calculateTime = (sec) => {
  //Lấy value của minutes
  // const minutes = Math.floor(sec / 60) 
  //const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`
  // Lấy value của seconds
  //const seconds = Math.floor(sec % 60)
  // const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`

  //  return `${returnMin}:${returnSec}`
  // }

  //Thay đổi icon yêu thích
  const changeLoved = () => {
    setLoved(!isLove);
  };

  //Thay đổi progressBar
  //const changeProgress = () => {
  // audioPlayer.current.currentTime = progressBar.current.value;
  // changeCurrentTime()
  // audioPlayer.current.ontimeupdate = function() {
  // if (audioPlayer.duration) {
  //   const progressPercent = Math.floor(audioPlayer.current.currentTime / audioPlayer.duration)
  //  console.log(audioPlayer.current.currentTime)
  // }
  // }
  //console.log(audioPlayer.duration)
  //}

  // Xử lý progressBar khi animation đang playing
  // const handleProgressPlaying = () => {
  //   progressBar.current.value = audioPlayer.current.currentTime
  //   changeCurrentTime()
  //   animationRef.current = requestAnimationFrame(handleProgressPlaying)
  // }

  // Thay đổi thời gian hiện tại 
  //const changeCurrentTime = () => {
  // progressBar.current.style.setProperty(
  //   '--played-progress',
  //   `${progressBar.current.value / duration * 100}`
  // )
  // console.log(audioPlayer.current.currentTime)
  //}

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
            <div
              className="loved"
              onClick={changeLoved}
            >
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
                <FaRedo />
              </i>
              <i>
                <FaStepBackward />
              </i>
            </div>

            <div
              className="playPause"
              onClick={changePlayPause}
            >
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
                <FaStepForward />
              </i>
              <i>
                <FaRandom />
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
          <div className="currentTime">
            {/* {calculateTime(currentTime)} */}
          </div>
          <input
            className="progressBar"
            type="range"
            value="0"
            step="1"
            min="0"
            max="100"
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {/* {
              duration && !isNaN(duration) && calculateTime(duration) 
              ? calculateTime(duration) : "00:00"
            } */}
            {/* {
              `${duration}` ? !isNaN(duration)
              `${duration}` : "00:00"
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
