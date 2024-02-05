/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as idb from 'idb';
// import { Heart } from 'react-feather';
import { UploadCloud } from 'react-feather';
import { MainLayout } from '../../layouts';
// import { SideBar } from '../../components';
import Player from '../../components/core/Audio/Player/Player';
import PlayList from '../../components/core/Audio/PlayList/PlayList';
import RightSectionLayout from '../../layouts/RightSectionLayout/RightSectionLayout';
import LeftSectionLayout from '../../layouts/LeftSectionLayout/LeftSection';

function Home() {
  const [audioFile, setAudioFile] = useState('');
  const [currentDuration, setCurrentDuration] = useState(0);

  //   function arrayBufferToBlob(buffer: any, type: any) {
  //     return new Blob([buffer], { type });
  //   }

  //   function blobToArrayBuffer(blob: any) {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.addEventListener('loadend', () => {
  //         resolve(reader.result);
  //       });
  //       reader.addEventListener('error', reject);
  //       reader.readAsArrayBuffer(blob);
  //     });
  //   }

  const handleAudioFile = async (e: any) => {
    console.log('e', e.target.files[0]);
    const file = e.target.files[0];
    const fileArrayBuffer = await file.arrayBuffer();
    // Open a connection to the 'audioDB' database
    const db = await idb.openDB('audioDB', 1);

    // Put the audio file into the 'audioStore' object store
    await db.put('audioStore', fileArrayBuffer, 1);
    setAudioFile(URL.createObjectURL(file));
  };

  const handleAddPlaylist = () => {
    localStorage.setItem(
      'currentAudioInfo',
      JSON.stringify({ url: audioFile, previousDuration: 0 }),
    );
  };

  useEffect(() => {
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

    const audioInfo = localStorage.getItem('currentAudioInfo');
    if (audioInfo) {
      console.log('a', JSON.parse(audioInfo));
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
  console.log(audioFile);

  return (
    <MainLayout>
      {/* <SideBar /> */}
      <LeftSectionLayout>
        <section className="container mx-auto bg-gradient-to-r from-indigo-200 to-indigo-800 grid sm:grid-cols-1 md:cols-2 lg:grid-cols-2   ">
          <div className=" text-lg ">
            <div className="p-5 flex my-9 mx-8  w-auto h-fit bg-gray-100 rounded-md border border-gray-200 ">
              <label
                className=" flex  text-md font-semibold text-gray-700 cursor-pointer "
                htmlFor="contained-button-file"
              >
                Upload your favourite audio files
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
              <button
                type="button"
                className="px-2 py-2 text-white rounded-md bg-gradient-to-t from-indigo-600 to-indigo-400 "
              >
                Upload on Playlist
              </button>
            </div>

            <PlayList />
          </div>

          <RightSectionLayout>
            <section className="">
              {audioFile ? (
                <Player
                  audioSrc={audioFile}
                  currentPlayingTime={currentDuration}
                />
              ) : null}
            </section>
          </RightSectionLayout>
        </section>
      </LeftSectionLayout>
    </MainLayout>
  );
}

export default Home;
