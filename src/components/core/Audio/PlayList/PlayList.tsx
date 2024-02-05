/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
// import { List } from 'react-feather';
import { IoPause, IoPlay } from 'react-icons/io5';
import { Lists } from '../../../../data/List';

function PlayList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [data, setData]=useState()
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(false);

  const handlePlay = () => {
    if (currentTime) {
      audioRef.current.currentTime = currentTime;
    }
    audioRef.current?.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };
  const audioRef = useRef<any>(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <main className="w-auto grid grid-cols-1 p-1 my-9 mx-9 rounded-md bg-gradient-to-t from-indigo-700 to-indigo-300 shadow-inner shadow-black  ">
      <div className="">
        {Lists?.map((item, id) => {
          return (
            <div
              key={id}
              className="flex m-9 p-6 justify-between border rounded-md items-center"
            >
              <img
                src={item.img}
                alt="pic"
                width={40}
                className="rounded-full "
              />
              <h1>{item.name}</h1>
              {isPlaying ? (
                <IoPause
                  size={56}
                  id="1"
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
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default PlayList;
