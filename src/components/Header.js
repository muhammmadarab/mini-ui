import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="https://highon.co.in/static/media/logoImg.9635e655c9b2f2d82717.png" className="h-8 mr-3" alt="Highon Logo" />
        </Link>
        <div className="flex md:order-2">
          <Link to="/create-post" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22.383" viewBox="0 0 23 22.383" className='' >
              <g id="Add_Post" data-name="Add Post" transform="translate(-274.748 -62.282)" opacity="1">
                <g id="Rectangle_358" data-name="Rectangle 358" transform="translate(274.748 62.282)" fill="none" stroke="#000" stroke-width="2.4">
                  <rect width="23" height="22.383" rx="4" stroke="none" />
                  <rect x="1.2" y="1.2" width="20.6" height="19.983" rx="2.8" fill="none" />
                </g>
                <line id="Line_136" data-name="Line 136" y2="7.484" transform="translate(286.247 69.731)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" />
                <line id="Line_137" data-name="Line 137" x2="8.165" transform="translate(282.166 73.683)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" />
              </g>
            </svg>
          </Link>
          <button type="button" className="text-black focus:outline-none rounded-lg text-sm p-2.5 mr-1" >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>

      </div>
    </nav>

  )
}

export default Header