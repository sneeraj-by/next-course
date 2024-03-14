"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={250}
          height={200}
          alt="some image"
          className="rounded"
        />
      )}
      <CldUploadWidget
        uploadPreset="vmobpuyz"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 3,
          styles: {},
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary mt-2" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
