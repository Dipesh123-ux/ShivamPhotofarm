"use client";
import React from "react";
import ImageSlider from "@/components/works/carousel";
import { projectData } from "@/components/works/data";

const Project = () => {
  return (
    <div className="">
      {projectData.map((data, index) => {
        return <ImageSlider data={data} />;
      })}
    </div>
  );
};

export default Project;
