import React from 'react'
import { CameraIcon, GalleryIcon } from "../../assets/Icons";

const UploadFrom = ({ handleImageUpload, setuploadFrom, setformStep, formStep }) => {
    return (
        <ul className="w-full text-xl font-medium text-gray-900 bg-white max-w-3xl mx-auto mt-8">
            <li className="px-4 py-2 pb-6 border-b border-gray-200 dark:border-gray-600 mb-6">
                <label
                    htmlFor="post"
                    className="flex justify-around items-center w-full cursor-pointer"
                >
                    <GalleryIcon className="w-[25%]" />
                    <p className="text-start w-[70%]">Pick from gallery</p>
                </label>
                <input
                    type="file"
                    name="post"
                    id="post"
                    hidden
                    onChange={handleImageUpload}
                    accept="image/*, video/*"
                />
            </li>
            <li className="px-4 py-2 border-gray-200 dark:border-gray-600">
                <button
                    className="flex justify-around items-center w-full"
                    onClick={() => {
                        setuploadFrom("camera");
                        setformStep(formStep + 1);
                    }}
                >
                    <CameraIcon className="w-[25%]" />
                    <p className="text-start w-[70%]">Capture with camera</p>
                </button>
            </li>
        </ul>
    )
}

export default UploadFrom