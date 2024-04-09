import React from "react";

const About = () => {
  return (
    <div className="h-max lg:h-96 bg-gray-200  flex justify-center p-4 md:p-20">
      <div class="flex  lg:w-2/3 flex-col text-center">
        <div class="flex justify-center md:justify-end md:mr-32">
          <h1 class="text-end text-4xl font-semibold p-4">About Us</h1>
          <div className="h-20 bg-black w-0.5 "></div>
        </div>
        <div class="flex justify-center mt-4 md:mt-8">
          <div class="md:w-4/5  text-lg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem numquam facilis asperiores porro, aliquam dolor
              ipsum dignissimos ratione consectetur, dolore, aperiam distinctio.
              Asperiores magnam sapiente nostrum non, natus facere beatae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
