import React from 'react';
import { useHistory } from 'react-router-dom'
import { CloseIcon, PostIcon, StoryIcon, } from '../assets/Icons'
import { ModalButton } from "./Buttons"

const Modal = ({handleClick}) => {
    const history = useHistory()

    return (
        <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#fff7]">
            <div className="relative w-full max-w-md max-h-full flex justify-center items-center h-full m-auto">
                <div className="relative bg-[#D0D0D0] rounded-3xl shadow w-[80%]">
                    <button type="button" className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClick}>
                        <CloseIcon />
                    </button>
                    <div className="p-6 text-center flex flex-col w-[90%] mx-auto">
                        <ModalButton onClick={() => history.push("/create-post")}>
                            <PostIcon className={"mr-2"} /> Create a post
                        </ModalButton>
                        <ModalButton className="border-b-0">
                            <StoryIcon className={"mr-2"} /> Create a story
                        </ModalButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal