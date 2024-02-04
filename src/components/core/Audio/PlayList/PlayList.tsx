/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Play } from 'react-feather';

function PlayList() {
  const Lists = [
    {
      name: 'Gana1',
      img: './assets/images/bg.jpeg',
      btn: <Play />,
    },
    {
      name: 'gana1',
      img: './assets/images/bg.jpeg',
      btn: <Play />,
    },
    {
      name: 'gana3',
      img: './assets/images/bg.jpeg',
      btn: <Play />,
    },
    {
      name: 'gana4',
      img: './assets/images/bg.jpeg',
      btn: <Play />,
    },
  ];
  return (
    <main className="flex my-9 mx-9 rounded-md bg-blue-600 ">
      <div className="w-full">
        {Lists?.map((item, id) => {
          return (
            <div key={id} className=" m-9 p-6 flex justify-between border">
              <img
                src={item.img}
                alt="pic"
                width={40}
                className="rounded-full"
              />
              <h1>{item.name}</h1>
              <button type="button">{item.btn}</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default PlayList;
