import React from "react";
import Carousel from "@/components/Home/Carousel";
import Gallery from "@/components/Home/Gallery";
import { Home } from "@/components/Home/data";
import Us from "@/components/Home/Us";
import Videos from "@/components/Home/Videos";
import About from "@/components/Home/About";
import Inspiration from "@/components/Home/Inspiration";

const HomePage = () => {
  return (
    <>
      <Gallery data={Home.gallery} />
    </>
  );
};

export default HomePage;
