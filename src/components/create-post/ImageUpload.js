import React, { useState, useCallback } from 'react'
import { AspectRatioIcon } from "../../assets/Icons";
import { AspectRatioButton } from "../general/Buttons";
import Cropper from "react-easy-crop";

const ImageUpload = ({ uploadedFileType, setcroppedAreaPixels, fileToBeUploaded, uploadedFile }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [aspect, setaspect] = useState(1 / 1);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setcroppedAreaPixels(croppedAreaPixels);
    }, []);

    return (
        uploadedFileType.includes("image") ? (
            <>
                <div className="bg-[#EFEFEF] py-2 w-full overflow-hidden">
                    <div
                        className={`relative w-[100%] aspect-square mx-auto max-w-3xl`}
                    >
                        <Cropper
                            image={uploadedFile}
                            crop={crop}
                            zoom={1}
                            aspect={aspect}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                </div>
                <div className="bg-[#EFEFEF] mt-16 w-full mb-8">
                    <p className="text-[#454545] text-sm py-2.5 text-center">
                        Aspect Ratio
                    </p>
                    <div className="inline-flex justify-center w-full items-end text-[#7B7B7B]">
                        <AspectRatioButton onClick={() => setaspect(1 / 1)}>
                            <AspectRatioIcon aspectRatio={1 / 1} />
                            1:1
                        </AspectRatioButton>
                        <AspectRatioButton onClick={() => setaspect(4 / 5)}>
                            <AspectRatioIcon aspectRatio={4 / 5} />
                            4:5
                        </AspectRatioButton>
                        <AspectRatioButton onClick={() => setaspect(16 / 9)}>
                            <AspectRatioIcon aspectRatio={16 / 9} />
                            16:9
                        </AspectRatioButton>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="bg-[#EFEFEF] py-2 w-full overflow-hidden">
                    <video
                        src={fileToBeUploaded}
                        className="border-2 w-full h-[50vh] max-w-fit mx-auto rounded-lg"
                        controls={true}
                        style={{ aspectRatio: 16 / 9 }}
                    ></video>
                </div>
                <div className="bg-[#EFEFEF] mt-16 w-full">
                    <p className="text-[#454545] text-sm py-2.5 text-center">
                        Aspect Ratio
                    </p>
                    <div className="inline-flex justify-center w-full">
                        <AspectRatioButton>
                            <AspectRatioIcon aspectRatio={16 / 9} />
                            16:9
                        </AspectRatioButton>
                    </div>
                </div>
            </>
        )
    )
}

export default ImageUpload