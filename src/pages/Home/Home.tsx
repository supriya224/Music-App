/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import * as idb from 'idb';
import { UploadCloud } from 'react-feather';
import { MainLayout } from '../../layouts';
import Player from '../../components/core/Audio/Player/Player';
import PlayList from '../../components/core/Audio/PlayList/PlayList';
import RightSectionLayout from '../../layouts/RightSectionLayout/RightSectionLayout';
import LeftSectionLayout from '../../layouts/LeftSectionLayout/LeftSection';
import { PlaylistData } from '../../data/List';

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    'Bytes',
    'KiB',
    'MiB',
    'GiB',
    'TiB',
    'PiB',
    'EiB',
    'ZiB',
    'YiB',
  ];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

function Home() {
  // all usestate hooks which is store initial value and change value
  const [audioFile, setAudioFile] = useState('');
  const [playViaPlayList, setPlayViaPlayList] = useState(false);
  const [currentSongsIndex, setCurrentSongsIndex] = useState(0);
  const [isNextSongExist, setIsNextSongExist] = useState(false);
  const [playListSongs, setPlayListSongs] = useState<PlaylistData[]>([]);
  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(0);

  // handle audio file here and asynchronus function
  const handleAudioFile = async (e: any) => {
    console.log('e', e.target.files[0]);
    const file = e.target.files[0];
    setAudio(file);
    console.log('handleAudioFile', file);

    const fileArrayBuffer = await file.arrayBuffer();
    // Open a connection to the 'audioDB' database
    const db = await idb.openDB('audioDB', 1);

    // Put the audio file into the 'audioStore' object store
    await db.put('audioStore', fileArrayBuffer, 1);

    setAudioFile(URL.createObjectURL(file));
  };

  // handle play list button here
  const handleAddPlaylist = () => {
    setPlayListSongs([
      ...playListSongs,
      {
        audioSrc: URL.createObjectURL(audio),
        name: audio?.name,
        size: formatBytes(audio.size),
        img: './assets/images/bg.jpeg',
      },
    ]);
  };

  // use effect hooks
  useEffect(() => {
    // I used IndexDb for storing data in browser
    let db: idb.IDBPDatabase<unknown>;
    const initializeDatabase = async () => {
      // Open a connection to the 'audioDB' database with a version of 1
      db = await idb.openDB('audioDB', 1, {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        upgrade(db) {
          // Create an object store named 'audioStore' with an auto-incrementing key
          db.createObjectStore('audioStore', { autoIncrement: true });
        },
      });
      // Check if there's an audio file in the database
      const storedAudio = await db.get('audioStore', 1);

      if (storedAudio) {
        setAudioFile(
          URL.createObjectURL(new Blob([storedAudio], { type: 'audio/mp3' })),
        );
      }
    };

    // audio info store in local storage and get data from it
    const audioInfo = localStorage.getItem('currentAudioInfo');
    if (audioInfo) {
      const actualAudioInfo = JSON.parse(audioInfo);
      setCurrentDuration(actualAudioInfo?.previousDuration);
    }
    initializeDatabase();
    return () => {
      if (audioFile) {
        URL.revokeObjectURL(audioFile);
      }
      if (db) {
        db.close();
      }
    };
  }, []);
  // play next song button function is here
  const PlayNext = (index: number) => {
    const isNextSongsExist = index + 1 === playListSongs.length;
    if (!isNextSongsExist) {
      const nextSongsAudioFile = playListSongs[index + 1];
      setAudioFile(nextSongsAudioFile?.audioSrc || '');
      setCurrentSongsIndex(index + 1 || 0);
    }
  };
  // play previous song button function is here
  const playPrevious = (index: number) => {
    if (index) {
      const nextSongsAudioFile = playListSongs[index - 1];

      setAudioFile(nextSongsAudioFile?.audioSrc || '');
      setCurrentSongsIndex(index - 1 || 0);
    }
  };

  // handle play pause button here function
  const handlePlayPause = (audioSrc: string, index: number) => {
    const isNextSongsExist = index + 1 === playListSongs.length;
    if (!isNextSongsExist) {
      // next song is exists then it will be run
      setIsNextSongExist(true);
    } else {
      // next song is exists then it will be error
      setIsNextSongExist(false);
    }
    // audiosrc
    setAudioFile(audioSrc);
    // play song via playlist where data will be dynamic
    setPlayViaPlayList(true);
    setCurrentSongsIndex(index);
    setIsPlaying(true);
  };

  return (
    <MainLayout>
      {/* left section end */}
      <LeftSectionLayout>
        <section className="container mx-auto bg-gradient-to-r from-indigo-200 to-indigo-800 grid sm:grid-cols-1 md:cols-2 lg:grid-cols-2   ">
          <div className=" text-lg ">
            <div className="p-5 flex my-9 mx-8  w-auto h-fit bg-gray-100 rounded-md border border-gray-200 ">
              {/* Upload your file here code */}
              <label
                className=" flex  text-md font-semibold text-gray-700 cursor-pointer "
                htmlFor="contained-button-file"
              >
                Upload your audio files
                <UploadCloud className="text-gray-900 mx-9 cursor-pointer" />
                <input
                  className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                  type="file"
                  onChange={handleAudioFile}
                  style={{ display: 'none' }}
                  accept=".mp3,audio/*"
                  id="contained-button-file"
                />
              </label>
              {/* add to playlist */}
              {audio ? (
                <button
                  type="button"
                  className="px-2 py-2 text-white rounded-md bg-gradient-to-t from-indigo-600 to-indigo-400 "
                  onClick={handleAddPlaylist}
                >
                  Add to Playlist ❤️
                </button>
              ) : null}
            </div>
            {/* Playlist import */}
            <PlayList
              playListInfo={playListSongs}
              handlePlayPause={handlePlayPause}
              isPlaying={isPlaying}
              currentSongsIndex={currentSongsIndex}
            />
          </div>
          {/* rigth side section wehere song will be play */}
          <RightSectionLayout>
            <section className="">
              {audioFile ? (
                <Player
                  audioSrc={audioFile}
                  currentPlayingTime={currentDuration}
                  isPlayListPlayed={playViaPlayList}
                  isNextSongeExist={isNextSongExist}
                  currentSongsIndex={currentSongsIndex}
                  playNext={PlayNext}
                  playPrevious={playPrevious}
                />
              ) : null}
            </section>
          </RightSectionLayout>
          {/* right section end */}
        </section>
      </LeftSectionLayout>
      {/* left section end */}
    </MainLayout>
  );
}

export default Home;
