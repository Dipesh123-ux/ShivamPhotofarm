"use client";
import React from "react";

const Us = ({ heading, data }) => {
  return (
    <div className="h-96 mt-8">
      <div className=" h-2/3 flex  flex-col justify-center  items-center">
        <p className=" sm:w-3/5 lg:w-2/5  h-max md:h-2/3 p-4 sm:p-8 flex justify-center  items-center text-center bg-neutral-100 rounded-md text-2xl font-semibold">
          We find the best way to capture the essence of your personalities
          ensuring that your wedding film is unique and has a natural and
          spontaneous feel.
        </p>
        <p className=" h-1 w-1/4 rounded-md bg-zinc-900 mt-8"></p>
      </div>
    </div>
  );
};

export default Us;
