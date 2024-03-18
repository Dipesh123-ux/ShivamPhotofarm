"use client";
import React from "react";
import { portraitData } from "@/components/works/data";

const Portraits = () => {
  return (
    <div className="w-screen pt-8">
      {portraitData.map((data) => {
        const { images } = data;
        return (
          <div className="mt-2">
            <div className="w-[90%] md:w-[75%] h-[200vh] md:h-[150vh] mx-auto flex flex-col md:flex-row justify-between">
              <div className="w-[100%] md:w-[50%] h-[50%] md:h-full">
                <img src={images[0]} alt="img" className="m-1 h-[65%] w-full" />
                <img src={images[1]} alt="img" className="m-1 h-[35%] w-full" />
              </div>
              <div className="w-[100%] mt-2 md:mt-0 md:w-[49.5%] h-[50%] md:h-full">
                <img src={images[2]} alt="img" className="m-1 h-[35%] w-full" />
                <img src={images[3]} alt="img" className="m-1 h-[65%] w-full" />
              </div>
            </div>

            <div className="mt-2 w-[90%] md:w-[75%] h-[200vh] md:h-[150vh] mx-auto flex flex-col md:flex-row justify-between">
              <div className="w-[100%] md:w-[50%] h-[50%] md:h-full">
                <img src={images[4]} alt="img" className="m-1 h-[35%] w-full" />
                <img src={images[5]} alt="img" className="m-1 h-[65%] w-full" />
              </div>
              <div className="w-[100%] mt-2 md:mt-0 md:w-[49.5%] h-[50%] md:h-full">
                <img src={images[6]} alt="img" className="m-1 h-[65%] w-full" />
                <img src={images[7]} alt="img" className="m-1 h-[35%] w-full" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portraits;
