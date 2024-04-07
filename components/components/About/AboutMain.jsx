import React from "react";
import shivamPic from "../../data/About/Images/shivam.png";
import Image from "next/image";

const AboutMain = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center my-12">
        <div className="grid lg:grid-cols-3 -z-10  w-4/5 lg:w-3/5 gap-0 shadow-2xl rounded-lg">
          <div className="h-80  lg:h-full w-full relative lg:order-1">
            <Image
              className="h-64 md:h-80 lg_h-full w-screen object-cover "
              src={shivamPic}
              alt="pic"
            />
          </div>
          <div className="-mt-12 md:mt-0 flex items-center  lg:col-span-2 lg:order-2 ">
            <div className="flex  w-full mt-0  lg:mt-0 items-center tracking-wide">
              <p className="text-left p-4 h-fit w-full font-sang text-sm font-thin">
                Hi, I’m Jared a professional photographer, filmmaker, and visual
                storyteller. I was born and raised in the sunshine capital of
                New Zealand, Marlborough. This picturesque region is my place to
                belong, and the sense of family and tradition this place has to
                me has been a key influence in my visual work. In my time as a
                professional filmmaker and photographer, I’ve scaled mountain
                tops, rigged cameras out of cars, and battled tropical climates
                to get just the right shot. The places I’ve been and the people
                I’ve met have inspired me to humbly tell the stories of others.
                This is something I can offer you. Whether it’s telling the
                story of your conscious brand, showcasing the impact behind your
                product, or capturing your own adventure or event, I’m here to
                help. I look forward to hearing from you...{" "}
                <p className="text-end font-bold">Jared</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
