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
    <div className="grid p-20 h-fit mt-9 mx-auto justify-center items-center bg-cyan-300 sm:bg-red-900 md:bg-pink-700 lg:grid-cols-2 lg:bg-orange-400 lg:mx-auto xl:bg-blue-900 ">
      <div className="bg-white p-12 rounded-lg shadow-md w-96">
        <img
          src="./assets/images/bg.jpeg"
          alt="idk - Highvyn, Taylor Shin"
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
        />
        <h2 className="text-xl font-semibold text-center">idk</h2>
        <p className="text-gray-600 text-sm text-center">
          Highvyn, Taylor Shin
        </p>
        <audio ref={audioRef} src={audioSrc} />

        <div className="mt-6 flex justify-center items-center">
          <IoPlaySkipBack
            size={36}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 "
          />
          {isPlaying ? (
            <IoPause
              size={56}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 "
              onClick={handlePlayPause}
            />
          ) : (
            <IoPlay
              size={56}
              className="p-2 mx-4 bg-gray-200 rounded-full hover:bg-gray-300 "
              onClick={handlePlayPause}
            />
          )}
          <IoPlaySkipForward
            size={36}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 "
          />
        </div>
        <input
          id="default-range"
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer range pr-6 accent-indigo-600"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{formatDuration(currentTime)}</span>
          <span>{formatDuration(duration)}</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
