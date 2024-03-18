"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pb-4">
      <div className="w-[90%] text-center md:w-3/5 flex mx-auto flex-col justify-center items-center mt-16 mb-12">
        <p className="text-base font-light">
          If you are keen to get in touch you can email me at
          <strong> info@jaredbuckley.co.nz</strong> or call me on{" "}
          <strong>0273537849</strong>.
        </p>
        <p className="text-base font-light">
          Otherwise please feel free to fill in the form below.{" "}
        </p>
      </div>

      <div className="w-[90%] md:w-3/4 mx-auto flex flex-col items-end">
        <input
          className="w-full text-black font-light border border-black border-opacity-50 p-2 text-base mb-4 md:mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Name *"
          type="text"
          required
        />
        <input
          className="w-full text-black font-light border border-black border-opacity-50 p-2 text-base mb-4 md:mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Email *"
          type="email"
          required
        />
        <input
          className="w-full text-black font-light border border-black border-opacity-50 p-2 text-base mb-4 md:mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Date(s) *"
          type="text"
          required
        />
        <input
          className="w-full text-black font-light border border-black border-opacity-50 p-2 text-base mb-4 md:mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Shoot Type/ Location *"
          type="text"
          required
        />
        <textarea
          className="w-full text-black font-light border border-black border-opacity-50 p-2 text-base mb-2 md:mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Message"
          type="text"
          rows={5}
        />
        <button className="bg-black text-base font-light text-white py-1 px-2 h-8 w-16 md:w-12 flex justify-center items-center mt-1">
          Send
        </button>
      </div>

      <div className="mt-8 md:mt-16 w-[90%] md:w-2/5 md:h-2/6 mx-auto">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cf9ead1959e5d0001c13935/1612866349304-T1QLO6013OGNS761JRR7/Wedding+Videographer+Family+Shot.JPG?format=1500w"
          className="h-full w-full"
        />
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="400"
        className="mt-16 w-[90%] md:w-2/5 md:h-2/6  mx-auto border-l pl-4 pt-2 pb-0 md:pb-4 border-black flex flex-col items-end"
      >
        <p className="text-[#18282F] leading-7 font-light text-base">
          “Jared was so easy to communicate with, super easy going and
          accommodating! We had the audio recordings of the ceremony and
          speeches and he made that happen for us, I love listening back these
          special moments. Making arrangements with him for the day was so
          stress free and we are so grateful for that! At the wedding Jared was
          excellent, he was very friendly and captured all the good stuff! The
          finish product is amazing and felt so us, the music he paired with the
          wedding video is beautiful. I’m so grateful to be able to watch our
          wedding video and listen to highlights of our vows. It’s also so
          special to see our loved ones laughing, dancing, enjoying the night.
          Be Joined Films was a breeze to work with and the video is something
          we will always cherish. ”
        </p>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="400"
        className="mt-0 md:mt-2  w-[90%] md:w-2/5 h-2/6 mx-auto flex flex-col items-end"
      >
        <p className="text-[#18282F] leading-7 font-light text-base">
          — Shubham
        </p>
      </div>

      <div className="mt-8 md:mt-16 flex flex-col items-center ">
        <h2 className="text-lg md:text-2xl lg:text-2xl font-light">
          Or Else We Are Quite Active On
        </h2>
        <ul class="flex  mt-5 ">
          <li>
            <a
              href="https://www.instagram.com/shivam_photofarm"
              target="_blank"
              class="text-2xl lg:text-4xl mx-2 hover:text-[#E4405F] text-black"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/shivam.pandey.75286"
              target="_blank"
              class="text-2xl lg:text-4xl mx-2 hover:text-[#1877F2] text-black"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+918240668648"
              target="_blank"
              class="text-2xl lg:text-4xl mx-2 hover:text-[#25D366] text-black"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto w-[90%] text-center md:w-2/5 font-light mt-8 md:mt-4 flex justify-center items-center">
        <p className="text-m md:text-xs">
          Creating captivating photography and cinematic videography images
        </p>
      </div>
    </div>
  );
};

export default Contact;
