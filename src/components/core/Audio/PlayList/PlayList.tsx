/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import { IoPause, IoPlay } from 'react-icons/io5';
import { PlaylistData } from '../../../../data/List';

interface PlaylistProps {
  handlePlayPause: (audioSrc: string, index: number) => void;
  isPlaying?: boolean;
  playListInfo: PlaylistData[];
  currentSongsIndex?: number;
}

function PlayList({
  handlePlayPause,
  isPlaying,
  currentSongsIndex,
  playListInfo,
}: PlaylistProps) {
  // console.log('PlayList', playListInfo);

  return (
    <main className="w-auto grid grid-cols-1 p-3 my-9 mx-9 rounded-md bg-gradient-to-t from-indigo-700 to-indigo-200 shadow-inner shadow-black  ">
      <div className="">
        <h1 className="font-bold  text-3xl text-white">
          Your favourite playlist
        </h1>
        {playListInfo &&
          playListInfo?.length &&
          playListInfo?.map((item, index) => {
            return (
              <div
                key={item.audioSrc}
                className="flex m-4 p-2 justify-between border rounded-md items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] transform transition duration-500 hover:scale-105"
              >
                <img
                  src={item.img}
                  alt="pic"
                  width={28}
                  className="rounded-full "
                />
                <h1 className="overflow-hidden truncate w-40">{item.name}</h1>
                <h1>{item.size}</h1>
                {isPlaying && currentSongsIndex === index ? (
                  <IoPause
                    size={32}
                    id="1"
                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 "
                    onClick={() => {
                      handlePlayPause(item?.audioSrc, index);
                    }}
                  />
                ) : (
                  <IoPlay
                    size={32}
                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 "
                    onClick={() => {
                      handlePlayPause(item?.audioSrc, index);
                    }}
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
