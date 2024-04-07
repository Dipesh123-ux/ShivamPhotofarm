import React from "react";

const Videos = () => {
  return (
    <div className="  -mt-32 md:-mt-20">
      <div className="p-8  flex flex-col md:flex-row w-full justify-center justify-items-center items-center ">
        <div className="h-96 w-5/6 rounded-md ">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-4/5 mt-4 sm:w-3/5 md:w-1/3  flex justify-center items-center font-semibold">
          <p className="sm:p-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, sapiente dicta sed possimus assumenda veniam fuga e
          </p>
        </div>
      </div>
      <div className="p-8  flex flex-col-reverse md:flex-row w-full justify-center justify-items-center items-center ">
        <div className="w-4/5 mt-4 sm:w-3/5 md:w-1/3  flex justify-center items-center font-semibold">
          <p className="sm:p-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, sapiente dicta sed possimus assumenda veniam fuga e
          </p>
        </div>
        <div className="h-96 w-5/6 rounded-md">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="p-8  flex flex-col md:flex-row w-full justify-center justify-items-center items-center ">
        <div className="h-96 w-5/6 rounded-md">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-4/5 mt-4 sm:w-3/5 md:w-1/3  flex justify-center items-center font-semibold">
          <p className="sm:p-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, sapiente dicta sed possimus assumenda veniam fuga e
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
