import React, { useEffect, useState } from "react";
import Camera from "../components/create-post/Camera";
import { useHistory } from "react-router-dom";
import getCroppedImg from "../utils/getCroppedImage";
import axios from "../utils/axios";
import Alert from "../components/general/Alert";
import UploadFrom from "../components/create-post/UploadFrom";
import Header from "../components/create-post/Header";
import ImageUpload from "../components/create-post/ImageUpload";
import UploadPostDetails from "../components/create-post/UploadPostDetails";

const CreatePost = () => {
  const history = useHistory();
  const [formdata, setformdata] = useState({
    media: "",
    description: "",
    location: "",
    tags: [],
  });

  const [formStep, setformStep] = useState(0);
  const [uploadFrom, setuploadFrom] = useState("");
  const [alertMessage, setalertMessage] = useState("");
  const [showAlert, setshowAlert] = useState(false);

  const [uploadedFile, setuploadedFile] = useState(null);
  const [uploadedFileType, setuploadedFileType] = useState("");
  const [fileToBeUploaded, setfileToBeUploaded] = useState(null);
  const [croppedAreaPixels, setcroppedAreaPixels] = useState(null);

  const displayAlert = (err) => {
    setalertMessage(err);
    setshowAlert(true);
    setTimeout(() => setshowAlert(false), 4500);
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0].type.includes("image"))
      setuploadedFile(URL.createObjectURL(e.target.files[0]));
    else if (e.target.files[0].type.includes("image"))
      setfileToBeUploaded(URL.createObjectURL(e.target.files[0]));
    else
      return displayAlert(
        "Unsupported file type. Only image and video files are allowed."
      );

    setuploadedFileType(e.target.files[0].type);
    setformStep(2);
  };

  const handleCrop = async () => {
    const croppedImageUrl = await getCroppedImg(
      uploadedFile,
      croppedAreaPixels
    );
    setfileToBeUploaded(croppedImageUrl);
  };

  const handleBack = () => {
    if (formStep === 0) {
      history.push("/");
      setuploadedFile("");
    } else if (formStep === 2) setformStep(0);
    else if (formStep === 4) history.push("/");
    else setformStep(formStep - 1);
  };

  async function blobToFile(blobUrl) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const extension = blob.type.split("/")[1];
    console.log(extension);

    const file = new File([blob], `uploaded_file.${extension}`, {
      type: blob.type,
    });
    return file;
  }

  const handleSubmit = async () => {
    if (formdata.tags.length === 0)
      return displayAlert("Select atleast one tag.");

    const mediaFile = await blobToFile(fileToBeUploaded);

    const formDataToBeUploaded = new FormData();
    formDataToBeUploaded.append("media", mediaFile);
    formDataToBeUploaded.append("description", formdata.description);
    formDataToBeUploaded.append("location", formdata.location);
    formDataToBeUploaded.append("tags", formdata.tags);

    try {
      const response = await axios.post(
        "/api/post/create",
        formDataToBeUploaded,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setformStep(4);
      setTimeout(() => {
        history.push("/");
      }, 5000);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  const handleNext = () => {
    if (formStep === 2 && uploadedFileType.includes("image")) {
      handleCrop();
      setformStep(formStep + 1);
    } else if (formStep === 3) handleSubmit();
    else if (formStep === 4) {
      setshowAlert(false);
    }
  };

  useEffect(() => {
    setuploadFrom("");
  }, [uploadedFile]);

  useEffect(() => {
    if (formStep === 3) {
      setformdata({ ...formdata, media: fileToBeUploaded });
    }
  }, [formStep, fileToBeUploaded]);

  return (
    <div>
      <Header
        formStep={formStep}
        handleNext={handleNext}
        handleBack={handleBack}
        formdata={formdata}
      />
      <div className="max-w-3xl mx-auto">
        {formStep === 0 && (
          <UploadFrom
            handleImageUpload={handleImageUpload}
            setuploadFrom={setuploadFrom}
            setformStep={setformStep}
            formStep={formStep}
          />
        )}

        {formStep === 1 && uploadFrom === "camera" && (
          <Camera
            setuploadedFile={setuploadedFile}
            setformStep={setformStep}
            setuploadedFileType={setuploadedFileType}
          />
        )}

        {formStep === 2 && (
          <ImageUpload
            uploadedFileType={uploadedFileType}
            setcroppedAreaPixels={setcroppedAreaPixels}
            uploadedFile={uploadedFile}
            fileToBeUploaded={fileToBeUploaded}
          />
        )}

        {formStep === 3 && (
          <UploadPostDetails
            setformdata={setformdata}
            formdata={formdata}
            uploadedFileType={uploadedFileType}
            fileToBeUploaded={fileToBeUploaded}
          />
        )}

        {formStep === 4 && (
          <div className="px-6">
            <h2 className="text-2xl text-green-500 mb-2">
              Post uploaded Successfully.{" "}
            </h2>
            <p className="text-gray-500">
              You will be be redirected in few seconds.
            </p>
          </div>
        )}
        {showAlert && <Alert alertText={alertMessage} />}
      </div>
    </div>
  );
};

export default CreatePost;
