"use client";
import React, { useState, useRef } from "react";
import AboutMain from "../../components/About/AboutMain";
import Video from "@/components/About/Video";
import VideoLink from "@/data/About/VideoLink";

const About = () => {
  return (
    <div>
      <AboutMain />
      <Video VideoLink={VideoLink} />
    </div>
  );
};

export default About;
