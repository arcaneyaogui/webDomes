import { PaperClipIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

const StandardMessageForm = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handchange = (e) => setMessage(e.target.value);
  const handleSbumit = async () => {};

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt="message-form-preview"
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}

      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handchange}
            placeholder="要不说点什么呗..."
          />
        </div>

        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => {
              <div {...getRootProps()}>
                <input {...getInputProps()}></input>
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>;
            }}
          </Dropzone>

          <hr className="vertical-line" />
          <PaperClipIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              //handleSbumit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
