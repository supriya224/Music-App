/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from 'react';
// import all icons
import {
  IoPause,
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from 'react-icons/io5';

// player function and define its types
function Player({
  audioSrc,
  currentPlayingTime = 0,
  isPlayListPlayed = false,
  isNextSongeExist = false,
  currentSongsIndex = 0,
  playNext,
  playPrevious,
}: {
  audioSrc: string;
  currentPlayingTime?: number;
  isPlayListPlayed?: boolean;
  isNextSongeExist?: boolean;
  currentSongsIndex?: number;
  playNext?: (index: number) => void;
  playPrevious?: (index: number) => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // audio ref
  const audioRef = useRef<any>(null);

  // handle play function
  const handlePlay = () => {
    if (currentPlayingTime && !isPlayListPlayed) {
      audioRef.current.currentTime = currentPlayingTime;
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

  // handle pause function
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
  // handle playpause function
  const handlePauseBtn = () => {
    handlePause();
  };
  // handle playpause function
  const handlePlayPause = () => {
    handlePlay();
  };
  // time update function is here
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);

    if (
      audioRef.current.currentTime === audioRef.current.duration &&
      isNextSongeExist
    ) {
      playNext?.(currentSongsIndex);
    }
    if (audioRef.current.currentTime === audioRef.current.duration) {
      setIsPlaying(false);
    }
  };
  // handleseek for currentaudio info and url
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

  // formate duration with help of math.floor
  function formatDuration(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }

  // use Effect hooks is here
  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isNextSongeExist, currentSongsIndex]);

  // use Effect hooks is here
  useEffect(() => {
    if (isPlayListPlayed) {
      handlePlayPause(); // handle playpause button call here
    }
  }, [isPlayListPlayed, audioSrc]);

  return (
    <div className="container mx-auto p-20 h-fit mt-9 ">
      <div className="bg-white p-12 rounded-lg  bg-gradient-to-t from-indigo-500 to-orange-300 shadow-lg shadow-black ">
        <img
          src="./assets/images/bg.jpeg"
          alt="idk - Highvyn, Taylor Shin"
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-black"
        />
        <h2 className="text-xl font-semibold text-center">song</h2>
        <audio ref={audioRef} src={audioSrc} />

        <div className="mt-6 flex justify-center items-center">
          <IoPlaySkipBack
            size={36}
            className="p-2.5  bg-gray-200 rounded-full hover:bg-gray-300 "
            onClick={() => {
              playPrevious?.(currentSongsIndex);
            }}
          />
          {isPlaying ? (
            <IoPause
              size={56}
              className="p-4 mx-2 bg-gray-200 rounded-full hover:bg-gray-300 "
              onClick={handlePauseBtn}
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
            onClick={() => {
              playNext?.(currentSongsIndex);
            }}
          />
        </div>
        <input
          type="range"
          min="0"
          max={Math.floor(duration)}
          value={Math.floor(currentTime)}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer range  accent-indigo-800"
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
