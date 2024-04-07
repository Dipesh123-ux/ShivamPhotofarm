"use client";
import {
  ClipboardPaste,
  Code,
  Image,
  MoreHorizontal,
  Plus,
  Film,
} from "lucide-react";
import { createRoot } from "react-dom/client";
import React, { useEffect, useRef, useState } from "react";
import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "./new-story.css";
import { ImageUpload } from "@/app/actions/cloudinary";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import axios from "axios";
import { getStoryById } from "@/app/actions/getStories";
import Compressor from 'compressorjs';

const NewStory = ({ storyId, Storycontent }) => {
  const contentEditabeRef = useRef(null);
  const [openTools, setOpenTools] = useState(false);
  const [buttonPosition, setbuttonPosition] = useState({ top: 0, left: 0 });
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debouncedHandleSave = useRef(
    debounce(() => {
      handleSave();
    }, 1000)
  ).current;

  const handleSave = async () => {
    const content = contentEditabeRef.current?.innerHTML;
    setSaving(true);

    try {
      await axios.patch("/api/new-story", {
        storyId,
        content,
      });
      console.log("saved");
    } catch (error) {
      console.log("Error in saving");
    }
    setSaving(false);
  };

  const InserImageComp = () => {
    fileInputRef.current?.click();
  };

  const InserDivider = () => {
    const DividerComp = <Divider />;
    setOpenTools(false);
    const wrapperDiv = document.createElement("div");
    const root = createRoot(wrapperDiv);
    root.render(DividerComp);
    contentEditabeRef.current?.appendChild(wrapperDiv);
    handleSave();
  };

  const handleFileInputChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      setOpenTools(false);

      const newImages = Array.from(selectedFiles).map((file) => {
        const localImageUrl = URL.createObjectURL(file);
        return { imageUrl: localImageUrl, file, caption: "" };
      });

      setImages((prevImages) => [...prevImages, ...newImages]);

      const wrapperDiv = document.createElement("div");
      wrapperDiv.style.display = 'grid';
      wrapperDiv.style. columnGap = '15px';
      if(newImages.length === 1){
          wrapperDiv.style.gridTemplateColumns = '1fr';
      }
      else if(newImages.length === 2 ){
        wrapperDiv.style.gridTemplateColumns = '1fr 1fr';
      }
      else{
        wrapperDiv.style.gridTemplateColumns = '1fr 1fr 1fr';
      }

      const Images = newImages.map((image) => {
        return (
          <ImageComp
            imageUrl={image.imageUrl}
            file={image.file}
            handleSave={debouncedHandleSave}
          />
        );
      });

      const root = createRoot(wrapperDiv);
      root.render(Images);
      contentEditabeRef.current?.appendChild(wrapperDiv);
    }
  };

  const getCaretPosition = () => {
    let x = 0;
    let y = 0;

    const isSupported = typeof window.getSelection !== "undefined";

    if (isSupported) {
      const selection = window.getSelection();
      if (selection?.rangeCount > 0) {
        const range = selection.getRangeAt(0).cloneRange();
        const rect = range.getClientRects()[0];
        if (rect) {
          x = rect.left + window.screenX;
          y = rect.top + window.scrollY - 80;
        }
      }
    }

    return { x, y };
  };

  const insertVideo = () => {
    const videoUrl = prompt("Please enter the video URL:");
    if (videoUrl) {
      setOpenTools(false);
      const videoContainer = document.createElement("div");
      videoContainer.classList.add('videContainer')
      videoContainer.innerHTML = `${videoUrl}`;
      contentEditabeRef.current?.appendChild(videoContainer);
      handleSave();
    }
  };
  

  useEffect(() => {
    const handleInput = () => {
      const { x, y } = getCaretPosition();
      setbuttonPosition({ top: y, left: -50 });

      debouncedHandleSave();
    };

    contentEditabeRef.current?.addEventListener("input", handleInput);
  }, []);

  useEffect(() => {
    if (typeof window.document !== "undefined") {
      const editor = new MediumEditor(".editable", {
        elementsContainer: document.getElementById("container"),
        toolbar: {
          buttons: [
            "bold",
            "italic",
            "underline",
            "anchor",
            "h1",
            "h2",
            "h3",
            "quote",
          ],
        },
      });
      return () => {
        editor.destroy();
      };
    }
  }, []);

  const [Story, setStory] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchStoryById = async () => {
      setLoading(true);
      try {
        const story = await getStoryById(storyId);
        if (story.response) setStory(story.response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchStoryById();
  }, []);

  return (
    <main
      id="container"
      className="max-w-[1200px] mx-auto relative font-mono mt-8"
    >
      <p className="absolute -top-[72px] opacity-30">
        {saving ? "saving..." : "saved"}
      </p>
      <div
        id="editable"
        ref={contentEditabeRef}
        contentEditable
        suppressContentEditableWarning
        className="outline-none focus:outline-none editable max-w-[1200px] prose"
        style={{ whiteSpace: "pre-line" }}
      >
        {Storycontent ? (
          <div dangerouslySetInnerHTML={{ __html: Storycontent }}></div>
        ) : (
          <div>
            <h1
              className="font-medium"
              data-h1-placeholder="New Story Title"
            ></h1>
            <p data-p-placeholder="Write your story ..."></p>
          </div>
        )}
      </div>
      <div
        className={`z-10 ${buttonPosition.top === 0 ? "hidden" : ""}`}
        style={{
          position: "absolute",
          top: buttonPosition.top,
          left: buttonPosition.left,
        }}
      >
        <button
          onClick={() => setOpenTools(!openTools)}
          id="tooltip"
          className="border-[1px] border-neutral-500 p-1 rounded-full inline-block"
        >
          <Plus
            className={`duration-300 ease-linear ${
              openTools ? "rotate-90" : ""
            }`}
          />
        </button>
        <div
          id="tool"
          className={`flex items-center space-x-4 absolute top-0 left-14  ${
            openTools ? "visible" : "invisible"
          }`}
        >
          <span
            onClick={InserImageComp}
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 bg-white cursor-pointer`}
          >
            <Image size={20} className="opacity-60 text-green-800 " />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileInputChange}
              multiple
            />
          </span>
          <span
            onClick={insertVideo}
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 delay-125 bg-white cursor-pointer`}
          >
            <Film size={20} className="opacity-60 text-green-800 " />
          </span>
          <span
            onClick={InserDivider}
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 delay-75 bg-white cursor-pointer`}
          >
            <MoreHorizontal size={20} className="opacity-60 text-green-800 " />
          </span>
        </div>
      </div>
    </main>
  );
};

export default NewStory;

const Divider = () => {
  return (
    <div className="py-3 w-full">
      <div
        className="text-center flex items-center justify-center "
        contentEditable={false}
      >
        <MoreHorizontal size={32} />
      </div>
      <p data-p-placeholder="Write your text ..."></p>
    </div>
  );
};

const ImageComp = ({ imageUrl, file, handleSave }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

  const compressAndUploadImage = async (file) => {
    new Compressor(file, {
      quality: 0.6, // Adjust the image quality as needed
      maxWidth: 800, // Set the maximum width of the compressed image
      maxHeight: 600, // Set the maximum height of the compressed image
      success(result) {
        console.log(result,"result");
        const formData = new FormData();
        formData.append("file", result);

        // Call your ImageUpload function with the compressed image
        ImageUpload(formData).then((SecureImageUrl) => {
          setCurrentImageUrl(SecureImageUrl);
          handleSave();
        });
      },
      error(error) {
        console.log("Error compressing the image", error);
      },
    });

  };

  useEffect(() => {
    compressAndUploadImage(file);
  }, [file]);

  return (
    <div className="mx-auto">
      <div>
        <img
          src={currentImageUrl}
          alt="Image"
          className="gallery-box"
        />
      </div>
    </div>
  );
};
