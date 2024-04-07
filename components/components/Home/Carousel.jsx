"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Crousel = ({ heading, data }) => {
  return (
    <div className="relative -z-20">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={2000}
      >
        {data &&
          data.map((item) => (
            <div>
              <img
                key={item.id}
                src={item.url}
                height={500}
                width={500}
                className="d-block h-[500px] md:h-screen object-cover w-screen"
                alt={"picture"}
              />
            </div>
          ))}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black opacity-50 z-8 flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white z-20 font-sang inline-block  md:px-8 md:py-4">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default Crousel;
