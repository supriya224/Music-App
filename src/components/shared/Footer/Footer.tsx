/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';

function Footer() {
  return (
    // <!-- component -->
    <>
      {/* <div className="flex items-end w-full min-h-screen bg-white" /> */}
      <footer className="container mx-auto text-gray-700  body-font bottom-0 shadow-lg shadow-indigo-200 my-2 rounded-xl">
        <div className="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/010/063/543/small/music-festival-colorful-icon-with-notes-and-the-inscription-music-3d-render-png.png"
                alt="pic"
                width={50}
              />
            </a>
            <p className="mt-2 text-sm text-gray-500">
              MusicApp, listen and Enjoy!
            </p>
            <div className="mt-4">
              <span className="inline-flex text-gray-500 gap-3 justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <FaFacebook />
                <IoLogoTwitter />
                <FaInstagram />
                <FaGoogle />
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Support
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Help Resources
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Platform
              </h2>
              <nav className="mb-4 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Pricing
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Send a Message
                  </a>
                </li>
                <li className="mt-1">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Request a Quote
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-3 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2020 All rights reserved{' '}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
