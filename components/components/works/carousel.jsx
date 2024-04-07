import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = ({ data }) => {
  return (
    <div className="mt-16 w-screen h-[35vh] md:h-[90vh] flex flex-col justify-center items-center">
      <div className="w-[90%] md:w-[70%] mb-4">
        <p className="text-2xl font-light">{data.title}</p>
      </div>
      <Swiper
        className=" w-[90%] md:w-[70%] h-[70%] md:h-full"
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          A11y,
          Controller,
        ]}
        spaceBetween={10}
        slidesPerView={1.1}
        navigation
        loop={true}
        autoplay={{ delay: 500000 }}
        style={{ "--swiper-navigation-color": "white" }}
      >
        {data.images.map((img, index) => {
          return (
            <SwiperSlide className="w-full h-full" key={index}>
              <div className="w-full h-full">
                <img
                  src={img}
                  alt="img"
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
