/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'react-feather';

// audio player function
function AudioPlayer({
  audioSrc,
  currentPlayingTime = 0,
}: {
  audioSrc: string;
  currentPlayingTime?: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(currentPlayingTime);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<any>(null);
  // handle play button
  const handlePlay = () => {
    if (currentTime) {
      audioRef.current.currentTime = currentTime;
    }
    audioRef.current?.play();
    setIsPlaying(true);
    localStorage.setItem(
      'currentAudioInfo',
      JSON.stringify({
        url: audioSrc,
        previousDuration: audioRef.current.currentTime,
      }),
    );
  };
  // handle pause button
  const handlePause = () => {
    audioRef.current?.pause();
    localStorage.setItem(
      'currentAudioInfo',
      JSON.stringify({
        url: audioSrc,
        previousDuration: audioRef.current.currentTime,
      }),
    );
    setIsPlaying(false);
  };
  //  handle play and pause
  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };
  // handle time update
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };
  // handle seek funciton
  const handleSeek = (e: any) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
    localStorage.setItem(
      'currentAudioInfo',
      JSON.stringify({
        url: audioSrc,
        previousDuration: Number(e.target.value),
      }),
    );
  };
  // handle formate duration function
  function formatDuration(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }

  // useEffect hooks
  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // console.log(currentTime);

  return (
    <div className=" ">
      <img src="./assets/images/bg.jpeg" width={50} height={70} alt="img" />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
      <audio ref={audioRef} src={audioSrc} />
      <div className="track-duration">
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>
      <button type="button" onClick={handlePlayPause}>
        <span className="material-symbols-rounded">
          {isPlaying ? <Pause /> : <Play />}
        </span>
      </button>
    </div>
  );
}

export default AudioPlayer;
