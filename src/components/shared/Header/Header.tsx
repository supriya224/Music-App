/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function Header() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
      <div className="bg-white rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-2 lg:pr-16 pr-6">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEX////H7eb9/O/qUWfvUmnI7uc9KSZDIyH///JGKSdDKij///XM9e1vbGjK8eo/GBZpMzamQE262dObrKeeP0p6gHw+Gxrk9vPz+/rTzsNHJSTT8es2KCOmmpJGKyk5EA/g9fHeTmLSS15QLSzv7OCvQ1CTPEW00cs9EQ/r59s9FBLC5d6mvbfaTWGAcnFpVVF6Njy8RlVaLzBZQT51Y16RnplXRkNjMTOIkYzo5eWShH3f2s/a1dW0q6qglI1PODbMxruEOD9lXVoyAAChtrB1dXGMfXfLxMSsoaC9trWwpp1UQ0Hj4OAnAABcT0y3rq42AABxXl2oqfqJAAARc0lEQVR4nO2dC3eaTBPHayICopCYuNGmWbyLaLybmNiKmujTpK3P0+//Zd5d8AIIyAJq8h7+57THaC78nJ2ZnWV3/PIlVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQn0GZzI2mTObUlxK4Mje5WyqiF3Wbu/m/4bwxwekxb059cf6VubWhW+v2c1vyxs56Bkt+XkPmXOBpyp36Uj3pxjXf52TMuBmfhrH6yfxxX3yx0u2pL5pAxAb8bGYk80C9PklU9TJC1/oUI9UP4KeYAHhzwa0+ujN6jDGfCNE/4AdH9OeDa33gcBMM4MdAfPrnx88f35+MT7qfae9T7hRMOj39bAER6YXt/6N7OhMY4KlT/5siiuCh3+/3BFlsfd88H0SUWeuk0eZZFnp3oxLHMaXsggXg39XzQTmhphO64kIGzyWOOUNiGG6ExquG6H0yaq2TjdOfInjX+FQxZ00gqwM1yDGKdapx+p0W77gznZizPuihF3IUzycSCZ4PjDR3GsK+0D8ziqlB8ceXTKLeSCeTyXQjlQiK8SRG/A2ELGNC5MZC78vtUJFklEBkSRnW+WAITxJsfop/z8xiRqzw45cgKs3x3bipiLLSSASDeAoj9sUxt4PItVDOUN5R/kAqvStAuAoGMXdMtKffv3+jOVpLnJgHKSJc0KBVWwVYhiv1gdQIZqAez4jfmz0gAqX5T+9lZEF496d1pk8gfQDrgYSbY+XEzEIWxK8KKwoAijuBBmtS0j/LlFhhGMg4PVKseforg+akVqpNmoBF6d6C0ETNvQMQCcSIxxmmTZl9YzRNWPGZw76GZAG6FS29knoiRaEZg/ltyR0D8E2kJ2scbtKaINDsc78/LjkAcn15SESI6CLVq3kyZUI8yjD9q5ptMxwZptSHz+/vz46EYzHp2hERHZ96TS9ZgZbn5p869DB9+v7vmKVHxjDSW5T2jFKGexeX9YQLK+LJbKoxnEGZplkI6Z335bDR9J8+RPMw0NteOVZ/wViFUx0fM8r2Aa0kG86zcExXrw5nigBoNh6PxYsWhLkD8j01UY5Q+s3WOnoyTC07OhvBkjMgKhnZVr8FRUFI2s5QcVipVwdJlQ7GY7HutJy/jO0SHtARvysALLIl7HnrK++zPaXXWjhHUTRA77CLliZNNEeoWiFqYSX5ixZUum/F6WUhH41GrQipgwE+KUDJ6ocjl6VR+CxNem+OhEz2JavO39TcQrMpfoduHVY0uvY1pjtHsiQ8XKj5C3o1A0qpp5b2zgZEr/e2UwJuBOkHnS9qYSW9VMMKGpnxi8qa7viE/4psVpcjOO7LpLWHTfvOkajHzYrSFb8NKw01rLCYLnZR6eTPt3i2hIcKpg+yrkriRuN+v/e8z3yaavo4xD0DyK+C5mCGPFsNmjis3Bvp7AlzhwH8/gI3V8qcLegFyvCWU24LKxq+KL1IVWNY6U4vLeiOTohK+a3F+v0azvDuAI20zJcWmM+3QbN9qXc8V4QHSheL7UyNG7fMpYNLOo6rTcYKS2t0EAfNcwu66Br5qITNzZIhU4IWNe9ePI4rZcco6wOVziKsbPDOC5flkxCuAw0zefBCd/d3E1YenejK7S56BzoO+fBAu97GYnNN+OYyhq7pzkbvfZVOCytWQVMbmvedaRfG4hDC2LUT4WEY38TefpxdPGb01uzRYDMXc6CrPLIo5UMayPRewkMwPgEwITCdyleaPPfWczEcVuzo8p3riyKmY2lZWA4baXo/4QE2oSwEV1MYPWFL1OjiFzZBUwsrazpBeki/1iN8wh1h4DdqfgNA4n/47gXLQsewEkVhpRhX6YCkzK9SEZ6nqIhbwsBz/48XMN5T6e4Qxsq2dJuwgujY5KBaV+mw3BMGnTjGEuiP0EzGjVaE3yxHJnK8yiMyL6aThdmwUacS1LbgICAMGvGnBOjW+yS7X3hKYEmIDNq51oImdrzlEDueaWmDhDBgxNvGTBJEAezXyxuzS6iGlfYmrPxKX9UjCZ7aWbkhIozkgiSM8BSu5766UNZEaAorcD5YhRULkREGWS7eqFXrnr+3Evo2KgW3hJ2pSofDylcUVizp0C9XxyshYYA1v7a/iXIl/I2pjQ2jlW8orLBaWInwFnf28fp9qjFM4xtUpITBLU0R7o7RE17EIZAecNC0o3tNP7CC/B++y0hKGMkFRUh468hICNK7QRMJ79aovuKKWJYlMBvg54gJAxunZIAmQuFqBw/R8dWruaLS0dg7Kd4bYSApI5MjPg9iJtS/ptElFVpGdFCNPYn1W0BO6D+eZrxsorQjxHRUY5CEmO4/NB2tUsbY44HQZ7DZe5rOPSGmizQGMxRWMV36KkXt5g0PhP480esm2B1CbQV4Sat0uFCyoPNK6MMTve+0NxG+IroHNaios1GrpOiD0LsRfWygNOVDLWTKdinfL6HXWONnm7aJkJaE2aBB7aEjILzN6JTzOEx97UM3EtLzKu+CjoAwZ7jUiCdAf3t8zZHG9RZMl4RU7marW0+O6HOjvVPGD4LQpNw+HAt5RVspYMJba1HrlzwQ+t1oHyyhLcCtJ+th+T4MEiyhbaykVi+R+6HvsxJH9kPiYOr/PM+xCUmN6P+4ywEIb9Tsfqs9uF1/vdLRTXgAQmp9beqDG3+FbwAHeg5gw1s1u1PqA1yR63N+jpAwgDNZH9wPPVLpdXDCTcbXRAYYxMnIQxPmTKONjDCIc3WHJlzFGcr4pVsFcXz3yH74/09IWOQHcbz1yISEofQTEpIB2hGiDOt+/B6XkHR+Y81xS2Te4xKSrrVZE1Jopuuq3Zr23UclJAT8FPnQoBwp4anmNJR6/Pso9y0Mf9bAfrBRiumoeuNqMFyypIQe6qhb2x8/TKTBdKnBXJFkAQDWxd5Eozys6Rsc0bB85xaQgBDv8HhNKxLexgjxFts9O2gt5GE92DWIb0KKpxpzIGuHneLs47RyeakBHvbe041Zq5o6t11O33Pf2x0hxdcHikQj28XgY6VTiGo6JyUMYstJbp3xc9tn/BJSfCotCNh6bLuTj5q3MR6wtviCexibpK1t3ehuazn75H5CzCcDCGPxdsd6kybJKgZxtDn8mjcfGQgAma94fW9zpoSIkNwV/daIewgpvvFLRvbrli33R3sg9JAUM9ps6Mbu7fEzSnlqiOJLrOjAh37uOkbvnHS2F3k8zWiDO2O3Z9xHpOFTSwGlvooTH/q5dhwQtGLwEGwiarbHV2t578757zkR8lUWGbBbcOQ7jxbiEFieqrURMaG/aONAyDckNDNzMmC0UMAmjNFLkl4THiZvGmLORX4nIeQb/yHAspMDdtC8LVqOQYGo1YSXGxm4lFj9HGlstSXkqxIbjzuM0Oj5dQwBFnC/AeuN0nbyQKgGzBsX+d09IVWHaBLjBHh/UUSzt0Ixzirmg9975G1nlNd9X7wNYWIOYKxjnwORAZGHqoA0aWMirzuj3K/NqMKlLJ+gIikILQj56n8wdml7Lva8XHxE9o12YJwFxM2lch4J8ac1uMZDtV69ejVMJ2dL1oowkaTjjzaTtGj+stjt4Al4JQZpmrx7lp97prsfuGGNh0/Ys5IAaLUzyS4hVZfYb1ZjFJ8VascvEB9KFRcI0NgBDS8C7N815ns7tHPAoXCTPUVSj1PiQh2pvUPIv8qQXZd/ugn3fbldLFYKmC9fiaFMv9Snep6qDtLJefqq7swYyIZvO0JkvsGDpFbq8eLF9Lrc6XQK57uEAyHeXoF1yp1CYfU9xUd8AlNzRGRAkI5sASm+msTd+0RZYtOO7fsOSIhLPVYtZYvtstqWRFeq2xBGK4/FIssW1gbF/+Uvu98gKywbun1+FD8AAmgt7sbNHpAVp/iaOxQh5qMBa6jUDf0tjKM0vnE9gz9Gz+8rxRgKocrAYCh+KIFW9mzdvk9LIShgW0wGAjkDZTG14etDGpey3VUpi/7LF8oFS0IqIsBYe7fiRT9SbsdikAUwbeyVyV/JYLHuoMLVWgCmUMipp6qpOmX2ykCOluwQUvzrLwHZ71Er9dCldtDwY7u6gGnIhwMJxi70p57xkcvCZRsfKGUFZWjqBUrVFdDcnl1lSj0hyTfmiiRJMNkw2TEQQvMtDb6eRv63KdXz5QvYrXSM57ajj1tCip/h9+PiunOfx7ovlCvt7jeMB8BysNPrFL0jir5LEzcBbFIQZKhAWZCMXZmCOeNlqqj4Ki5l4XVeAyrAx3JB71+aT0K47QxJRdICjddGY7BYLMLYN+3IJQAP6WpkZyMxFZmZmmsyLZoGfbXjXx8ID/p+brngCSm+AWk86KLr0FIwulj+GgN2YlDa1nlUojGjBTQjYNk4+seiCxaU2bBaT5jcCvdXSqRYYGzDwd290KuOf9wbC2a6AjKgE16U/hKuUASNX6uJrHBR2emgk3/EOT/ajtNJQ3Tkq4PkUoFfUfpUHmbzQSNlMV/hU1fzZHoIlJrxBHlpnN12/KOlbVkW1EFEXbpAiYqNF9WQkq/EK3kz4H23vTahKYvh5l6pKlaqbt1MGb17ioSSPGDNhGe6xjjcM9iuAgR1XnYbTPlXBKgttkSnFzsVH6oPpupILUJ6ZrEerN5Oo+xKXBRhQG9xt+gJrJlQ75QjVqquf0NAgNtgylfhGhBh7C66VFZF0kUcCiTrSSo930BZEPcqLD3fOfY1eJDXwzSwI8/rUIOiHB0v2tfq+bb2WhuN0QERIJ9A+XwG+lrjAueuodxfeaAF4ABP5q8ckb8SbGv1zbwtmkeFkJwmAUTz7PQvQaJ3m2hbAaLc8Sudwn4cYB+Q1ZnuyJKOTa0bltxXOquHhUcEOCdZTqIiQyCItAJbTs1CV0P07O7hqygKXwdUoF3ctGHKVwUICxZ854Vp/KKgPSyjyYCcJlnypCJzNM9+q9Vqe9pNqvrbmtRG7y0gpXMBAq6GKT8Em0Jva73zwvVjcao5YPQeuSArDIn66uNCYnzGMW66qHDPffyd3NkYiD8DJVSjaWK+3hNyvqoFUT0x7RZx/aQ+mb+GMQiUVzLAqgAsOqBbj9ESq812GG4MhKf9100gykAYLben0+kFKmdxi7JVdYhKWWRAOUm44Mmn3bcyYrLK5nFLHgdKmIsYRmnhulK5LncKm+I3WkClLBqgv3YP4TsLlUqyc69QvUqTzXh9E5VACXGs4RvC5t6DYXdB9L7cjsfUUm/PupEFYUpiCdrdbavGEfsS7DDFOzIiSVTXV/Q3qFelbBH3JJNRKUv+0R181VgMukYtKS+/AyVUjZhS8E3cabmAStlzXMp2rttdtdgDwnLfup+NDasSdJiF2hPWYMCEajjlUzNZ3eZT7D4+drtFVNPG46iUlS1LWXeEdQG47BlqJMwCOVhALSfiFVJZWwCOI8uxmI61KmXdE0ZmAlnPNE3cs/A3aEJ1YkPx9UZ6ptCyJEnCV2WZHDZSEc94WPwVCjXEiNyIFd+CJlzPTlElW1+XsvWEXesn90asL8FDjRCRq/VAK3DAba1PbUrZID7dga+yQJmoy78m4QZp2EVXD7cvnL0pgA04zqgK8lPj9IgNRQAPi/GdWTWGyb6hvPB+d5dlmNr66fHiQRCU7/uv14MC+tAxyrTGzKfmtKjeiDHoT5MrKX9G3Psf8UUpcf0/25fAIthsv1UwH26YMf8eik8N5kmTms0Jx70/I59rNpvvHDdprrX4cSi+gBBx5WoeDXih1KiTfaic/9ND2qXv2ehxyk8E9mvFGze/KHc6vj1XRgDo0G0rd+pPyvUTUY3XbtUwjTo53xcfnaQsvCuj3/BB3X4EPCyP3c5ydr8uo54EIG6ScFB5cMYP/TnUFiI2Y+7UV0wuor1vn+AT763kmvGT8mG52t/3ifmwMnt2932I9OZX9o1OP0x686/dnZooeZ/2o9EPolXm/mi5O1SoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUPb6HxdXX+UJLZcIAAAAAElFTkSuQmCC"
              width={50}
              height={70}
              alt="img"
            />
            <h2>Music player</h2>
          </div>
          {/* <!-- For medium and plus sized devices --> */}
          <ul className="hidden md:flex flex-auto space-x-2 p-3">
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
              Collections
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
              Arts
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
              Space
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
              Game
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
              Utility
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
              Cards
            </li>
          </ul>
          <div className=" flex space-x-5 justify-center items-center pl-2">
            <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
              <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
            </div>

            <svg
              className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </nav>
        {/* <!-- for smaller devcies --> */}

        <div className="block md:hidden w-full mt-5 ">
          <div className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
            <div className="flex space-x-2">
              <span id="s1" className="font-semibold text-sm leading-3 hidden">
                Selected:{' '}
              </span>
              <p
                id="textClicked"
                className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
              >
                Collections
              </p>
            </div>
            <svg
              id="ArrowSVG"
              className=" transform"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className=" relative">
            <ul
              id="list"
              className=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md"
            >
              <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                Arts
              </li>
              <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                Space
              </li>
              <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                Game
              </li>
              <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                Utility
              </li>
              <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                Cards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
