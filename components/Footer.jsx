"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 flex justify-center items-center mb-8">
      <Link href="/contact">
        <div className="cursor-pointer w-[230px] h-[80px] bg-[black] flex justify-center items-center hover:bg-[#272727]">
          <p className="text-white text-2xl font-semibold tracking-wider">
            CONTACT US
          </p>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
