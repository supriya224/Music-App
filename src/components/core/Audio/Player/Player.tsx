/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from 'react';
import {
  IoPause,
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from 'react-icons/io5';

function Player({
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

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

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

  function formatDuration(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="container mx-auto p-20 h-fit mt-9 ">
      <div className="bg-white p-12 rounded-lg  bg-gradient-to-t from-indigo-500 to-orange-300 shadow-lg shadow-black ">
        <img
          src="./assets/images/bg.jpeg"
          alt="idk - Highvyn, Taylor Shin"
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-black"
        />
        <h2 className="text-xl font-semibold text-center">song name</h2>
        <p className="text-white text-sm text-center">song</p>
        <audio ref={audioRef} src={audioSrc} />

        <div className="mt-6 flex justify-center items-center">
          <IoPlaySkipBack
            size={36}
            className="p-2.5  bg-gray-200 rounded-full hover:bg-gray-300 "
          />
          {isPlaying ? (
            <IoPause
              size={56}
              className="p-4 mx-2 bg-gray-200 rounded-full hover:bg-gray-300 "
              onClick={handlePlayPause}
            />
          ) : (
            <IoPlay
              size={56}
              className="p-4 mx-2 bg-gray-200 rounded-full hover:bg-gray-300 "
              onClick={handlePlayPause}
            />
          )}
          <IoPlaySkipForward
            size={36}
            className="p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 "
          />
        </div>
        <input
          id="default-range"
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer range pr-6 accent-indigo-800"
        />
        <div className="flex justify-between mt-2 text-sm text-white">
          <span>{formatDuration(currentTime)}</span>
          <span>{formatDuration(duration)}</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
