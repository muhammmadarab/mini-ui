import React, { useState } from "react";
import { LocationIcon } from "../../assets/Icons";

const Label = ({ htmlFor, className, children, ...rest }) => (
  <label
    htmlFor={htmlFor}
    className={`text-base text-[#0198C6] font-semibold text-left mb-1 flex ${className}`}
    {...rest}
  >
    {children}
  </label>
);

const Input = ({ className, ...rest }) => (
  <input
    {...rest}
    className={`block p-2.5 w-full text-sm text-gray-900 border-0 rounded-lg border-[#058EB7] focus:ring-[#058EB7] focus:border-0 focus:outline-0 ${className}`}
  />
);

const TextArea = ({ className, children, ...rest }) => (
  <textarea
    {...rest}
    rows="4"
    style={{ resize: "none" }}
    className={`block p-2.5 w-full text-sm text-gray-900 border-2 rounded-lg border-[#0198C6] focus:ring-[#058EB7] focus:ring-0 ${className}`}
  >
    {children}
  </textarea>
);

const VibeTagButton = ({ className, formdata, children, ...rest }) => {
  const isTagSelected = formdata?.tags?.includes(children);

  return (
    <button
      type="button"
      className={`p-2 mx-2 rounded-2xl text-sm capitalize font-medium w-20  border border-[#02BDF5] hover:bg-gray-100 hover:text-[#02BDF5] focus:ring-0 ${className} ${
        isTagSelected ? "bg-[#02BDF5] text-white" : "bg-white text-[#363636]"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

const DetailsUpload = ({
  setformdata,
  formdata,
  uploadedFileType,
  fileToBeUploaded,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const availableTags = ["travel", "food", "nature", "fashion", "art"];

  const handleTagSelection = (tag) => {
    setformdata((prevData) => {
      const tagsSet = new Set(prevData.tags);
      if (tagsSet.has(tag)) tagsSet.delete(tag);
      else tagsSet.add(tag);
      const updatedData = { ...prevData, tags: Array.from(tagsSet) };
      return updatedData;
    });
  };

  return (
    <form
      className="py-2 px-6"
      id="post-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
        {uploadedFileType.includes("image") ? (
          <img src={fileToBeUploaded} />
        ) : (
          <video src={fileToBeUploaded} controls={false}></video>
        )}
      </div>
      <div className="flex flex-col border-b border-[#707070cc] pb-4 mb-4">
        <Label htmlFor="description">Description</Label>
        <TextArea
          name="description"
          id="description"
          onChange={handleChange}
        ></TextArea>
      </div>
      <div className="flex flex-col border-b border-[#707070cc] mb-4">
        <Label htmlFor="location">
          <LocationIcon className="w-5 h-5 mr-2" /> Location
        </Label>
        <Input name="location" id="location" onChange={handleChange} />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="tags">Add your vibetags</Label>

        <div class="inline-flex rounded-md mt-2" role="group">
          {availableTags.map((tag) => (
            <VibeTagButton
              key={tag}
              onClick={() => handleTagSelection(tag)}
              formdata={formdata}
            >
              {tag}
            </VibeTagButton>
          ))}
        </div>
      </div>
    </form>
  );
};

export default DetailsUpload;
