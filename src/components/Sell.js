import React, { useContext, useEffect, useRef, useState } from "react";
import {NoteContext} from "../context/notes/NoteState";
import { useNavigate } from "react-router-dom";
const Sell = () => {
  const Context = useContext(NoteContext);
  const { addCard, setAlert } = Context;
  const Navigate = useNavigate();
  
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    tag: "",
    imageUrl: [],
  });
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     Navigate("/login");
  //     setAlert({ type: "danger", message: "PLEASE LOGIN FIRST" });
  //   }
  // }, [localStorage.getItem("token")]);

  useEffect(() => {
    if (data.imageUrl.length === 4) {
      addCard(
        data.title,
        data.description,
        data.tag,
        data.location,
        data.price,
        data.imageUrl
      );
    }
  }, [data.imageUrl]);

  const [uploadFiles, setuploadFiles] = useState([]);
  const fileInput = useRef(null);
  const dropzone = useRef(null);
  const previewContainer = useRef(null);
  // PREWIEW IMAGE FUNCTION
  const previewImages = (files) => {
    [...files].forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.alt = file.name;
          img.classList.add("me-2", "mb-2");
          previewContainer.current.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  // PREWIEW IMAGE FUNCTION

  const uploadImg = async (givenFiles) => {
    const uploadedUrls = [];
    let Url = "https://api.cloudinary.com/v1_1/dq7xb4576/image/upload";
    for (let i = 0; i < 4; i++) {
      const formData = new FormData();
      i === 0
        ? formData.append("file", givenFiles[i])
        : formData.append("file", givenFiles[i - 1]);

      if (i === 0) {
        formData.append("upload_preset", "my_preset_transformtion");
      }
      if (i !== 0) {
        formData.append("upload_preset", "my_preset");
      }
      try {
        const response = await fetch(Url, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text(); // Get the error message
          throw new Error(
            `HTTP error! status: ${response.status}, message: ${errorText}`
          );
        }

        const dataImg = await response.json();
        uploadedUrls.push(dataImg.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);

        setAlert({
          type: "danger",
          message: "An error occurred during upload.",
        });
      }
    }
    console.log(uploadedUrls);
    return uploadedUrls;
  };

  // File input change event
  const handleChange = (e) => {
    previewImages(e.target.files);
    const filesArray = Array.from(e.target.files);
    setuploadFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...filesArray];
      return updatedFiles; // Update the state with the new files
    });
  };


  // Drag-and-drop functionality
  const handelDragdrop = (e) => {
    e.preventDefault();
    dropzone.current.classList.remove("dragover");
    const files = e.dataTransfer.files;
    previewImages(files);
    const filesArray = Array.from(files);
    setuploadFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...filesArray];

      return updatedFiles; // Update the state with the new files
    });
  };

  const onChange = (e) => {
    let capitalized; // Declare at the start for function-wide scope

    if (
      e.target.name === "description" ||
      e.target.name === "title" ||
      e.target.name === "location"
    ) {
      const text = e.target.value;
      capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    } else {
      capitalized = e.target.value; // If the field is not description, title, or location, keep it as it is
    }

    setData({ ...data, [e.target.name]: capitalized });
  };

  // handleSubmit
  const handleSubmit = async () => {
    if (data.title.length >= 18) {
      setAlert({
        type: "danger",
        message: "Your title should not exceed 18 characters",
      });
    } else {
      if (uploadFiles.length === 3) {
        const uploadedUrls = await uploadImg(uploadFiles); // Wait for uploadImg to complete

        // Update state with the uploaded URLs
        setData((prevData) => ({
          ...prevData,
          imageUrl: [...prevData.imageUrl, ...uploadedUrls],
        }));
      }

      // Wait for the state to update before proceeding
      setTimeout(() => {
        // Reset the state
        setData({
          title: "",
          description: "",
          price: "",
          location: "",
          tag: "",
          imageUrl: [],
        });

        Navigate("/");
      }, 2500);
    }
  };

  return (
    <div className="container">
      <div className="mb-5">
        <label htmlFor="itemType">
          Please select the type of item for sale carefully to ensure it
          attracts the right buyers.
        </label>
        <select
          className="form-select my-2"
          aria-label="Default select example"
          name="tag"
          onChange={onChange}
        >
          <option defaultValue>SELECT CATEGORY OF YOUR PET</option>
          <option value="DOG">DOG</option>
          <option value="CAT">CAT</option>
          <option value="PIGEON">PIGEON</option>
          <option value="CHICKEN">CHICKEN</option>
          <option value="PARROT">PARROT</option>
          <option value="RABBIT">RABBIT</option>
          <option value="GOAT">GOAT</option>
          <option value="COW">COW</option>
          <option value="FISH">FISH</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Your title should not exceed 18 characters
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="ENTER A TITLE FOR YOUR PET"
          name="title"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <div className="mb-3">
          {/* images section */}
          <label className="form-label">UPLOAD YOUR PET'S IMAGES</label>
          <div
            className="dropzone"
            id="dropzone"
            ref={dropzone}
            onDragOver={(e) => {
              e.preventDefault();
              dropzone.current.classList.add("dragover");
            }}
            onDragLeave={() => {
              dropzone.current.classList.remove("dragover");
            }}
            onDrop={handelDragdrop}
            onClick={() => {
              fileInput.current.click();
            }}
          >
            <input
              type="file"
              className="form-control mb-3 visually-hidden"
              id="fileInput"
              accept="image/*"
              multiple
              onChange={handleChange}
              name="image"
              ref={fileInput}
            />
            Drag and drop images here or click to select
          </div>
          {/* <!-- Image Previews --> */}

          <div
            className="preview-container d-flex flex-wrap mt-3"
            id="previewContainer"
            ref={previewContainer}
          ></div>
        </div>
        {/* images section closed*/}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          PRICE
        </label>
        <input
          type="text"
          className="form-control"
          name="price"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          LOCATION
        </label>
        <input
          type="text"
          className="form-control"
          name="location"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          DESCRIPTION
        </label>
        <textarea
          className="form-control"
          name="description"
          rows="3"
          onChange={onChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100 mb-5"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Sell;
