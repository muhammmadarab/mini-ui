import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { CaptureIcon } from "../../assets/Icons";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = ({ setuploadedFile, setformStep, setuploadedFileType }) => {
  const webcamRef = useRef(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setuploadedFile(imageSrc);
    setuploadedFileType("image/jpeg")
    setformStep(2);
  }, [webcamRef]);

  return (
    <div className="max-w-[540px] mx-auto">
      <div className="rounded-2xl overflow-hidden">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          mirrored={true}
        />
      </div>
      <button
        onClick={capturePhoto}
        type="button"
        className="p-2.5 mb-2 focus:outline-none mx-auto flex"
      >
        <CaptureIcon />
      </button>
    </div>
  );
};

export default Camera;
