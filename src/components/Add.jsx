import React, { useState } from "react";
import { uploadVideoApi } from "../Services/allApi";
import PropTypes from "prop-types";

function Add({ setUploadVideoResponse }) {
  const [show, setShow] = useState(false);
  const [upload, setUpload] = useState({
    videoCaption: "",
    imageUrl: "",
    videoLink: "",
  });

  const handleClose = () => {
    setShow(false);
    setUpload({
      videoCaption: "",
      imageUrl: "",
      videoLink: "",
    });
  };

  const handleShow = () => setShow(true);

  const emb = (link) => {
    try {
      const filterLink = link.replace(/^https:\/\/youtu\.be\//, "");
      const videoId = filterLink.split("?")[0];
      if (videoId && videoId.length === 11) {
        setUpload({
          ...upload,
          videoLink: `https://www.youtube.com/embed/${videoId}`,
        });
      } else {
        setUpload({ ...upload, videoLink: "" });
        alert("Invalid URL");
      }
    } catch (error) {
      console.error("Error processing video link:", error);
      alert("Error processing video link");
    }
  };

  const handleUpload = async () => {
    const { videoCaption, imageUrl, videoLink } = upload;
    if (videoCaption && imageUrl && videoLink) {
      try {
        const result = await uploadVideoApi(upload);
        if (result.status >= 200 && result.status < 300) {
          alert(`Video ${result.data.videoCaption} uploaded successfully!`);
          handleClose();
          setUploadVideoResponse(result.data);
        } else {
          alert("API call failed");
        }
      } catch (error) {
        console.error("Error uploading video:", error);
        alert("Error uploading video");
      }
    } else {
      alert("Please completely fill the form");
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-5 z-auto">
        <h1 className="text-3xl text-white">Upload A Video</h1>
        <button
          onClick={handleShow}
          className="text-white bg-blue-600 p-2 rounded hover:bg-blue-700 transition duration-300"
        >
          <i className="fa-solid fa-square-plus fa-2xl"></i>
        </button>
      </div>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Upload a New Video</h2>
              <button
                onClick={handleClose}
                className="text-white text-3xl focus:outline-none"
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="videoCaption"
                  className="block text-sm font-medium"
                >
                  Video Caption
                </label>
                <input
                  type="text"
                  id="videoCaption"
                  placeholder="Video Caption"
                  className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md"
                  value={upload.videoCaption}
                  onChange={(e) =>
                    setUpload({ ...upload, videoCaption: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  placeholder="Image URL"
                  className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md"
                  value={upload.imageUrl}
                  onChange={(e) =>
                    setUpload({ ...upload, imageUrl: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="videoLink"
                  className="block text-sm font-medium"
                >
                  YouTube Video Link
                </label>
                <input
                  value={upload.videoLink}
                  onChange={(e) => emb(e.target.value)}
                  type="text"
                  id="videoLink"
                  placeholder="YouTube Video Link"
                  className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="mr-2 bg-gray-600 px-4 py-2 rounded text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpload}
                  className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

Add.propTypes = {
  setUploadVideoResponse: PropTypes.func.isRequired,
};

export default Add;
