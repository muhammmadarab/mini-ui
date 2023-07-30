import React from "react";
import { BackArrowIcon } from "../../assets/Icons";
import { UploadNextButton } from "../general/Buttons";

const Header = ({ formStep, handleNext, handleBack, formdata }) => {
  return (
    <nav className="bg-white border-gray-200 pt-8 w-full">
      <div className="max-w-3xl w-full h-28 flex flex-wrap items-center justify-between mx-auto p-4 py-8">
        <button onClick={handleBack}>
          <BackArrowIcon className="w-8 h-4" />
        </button>
        {formStep !== 0 && (
          <div className="flex md:order-2">
            <UploadNextButton
              type={formStep !== 3 ? "button" : "submit"}
              form="post-form"
              onClick={() => handleNext()}
              isDisabled={formStep === 3 && formdata.tags.length === 0 }
            >
              {formStep !== 3 ? "Next" : "Post"}
            </UploadNextButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
