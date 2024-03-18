"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import details from "../../data/Films/details.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const GlassmorphicImage = ({ index, cla }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link
      data-aos={`${cla}`}
      data-aos-duration="500"
      href={`/films/${index}`}
      className="m-4 shadow-md shadow-gray-500"
    >
      <div className="">
        <Image
          src={require(`../../data/Films/Images/${details[index].link}`)}
          alt="Your Image"
          class="w-full h-full object-cover "
          height={500}
          width={500}
        />
        <h1 className="text-center p-2 font-bold text-xl">{details[index].name}</h1>
      </div>

    </Link>
  );
};

export default GlassmorphicImage;
