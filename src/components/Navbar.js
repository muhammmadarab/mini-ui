import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, AddPostIcon } from '../assets/Icons'
import { NavbarActionButton } from "./Buttons"
import Modal from './CreatePostModal'

const Navbar = () => {
  const [showModal, setshowModal] = useState(false)
  const toggleModal = () => setshowModal(!showModal)
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="https://highon.co.in/static/media/logoImg.9635e655c9b2f2d82717.png" className="h-8 mr-3" alt="Highon Logo" />
        </Link>
        <div className="flex md:order-2">
          <NavbarActionButton onClick={toggleModal}>
            <AddPostIcon />
          </NavbarActionButton>
          <NavbarActionButton>
            <SearchIcon />
          </NavbarActionButton>
        </div>
      </div>
      {showModal && <Modal handleClick={toggleModal} />}
    </nav>
  )
}

export default Navbar