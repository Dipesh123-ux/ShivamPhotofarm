import React from "react";
import details from "../../data/Films/details.jsx";
import GlassmorphicImage from "./ImageComponent";

const Films = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-12 md:mx-32 justify-items-center">
        {details.map((detail, index) => (
          <GlassmorphicImage
            index={index}
            // cla={(index+1) % 2 === 0 ? "fade-left" : "fade-right"}
          />
        ))}
      </div>
      <div className="border-t-2 border-black w-3/4 mx-auto relative mt-12 mb-10 opacity-20 rounded"></div>
      <div className=" flex justify-center">
        <div className=" flex flex-col w-4/5  md:w-3/5   mt-12">
          <p className=" text-center text-lg md:text-xl font-ste">
            “We are so happy with the wedding video we received from Be Joined
            Films. Jared was so easy to work with, a wedding videographer who
            really created a unique recount of our wedding day capturing the
            parts we loved the most. The way he wove our vows within the film
            really represented us as a couple, it will be just as magical to
            watch in the years to come as a family.”
          </p>
          <p className="text-end font-bold text-lg font-ste">- The Taylors</p>
        </div>
      </div>
    </div>
  );
};

export default Films;
