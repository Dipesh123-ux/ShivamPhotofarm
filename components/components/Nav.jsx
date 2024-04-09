"use client";
// components/Navbar.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle = () => {
    setToggle1(!toggle1);
  };
  const handleToggle1 = () => {
    setToggle2(!toggle2);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const firstLine = {
    initial: {
      rotate: 0,
    },
    final: {
      rotate: 45,
      y: 8,
    },
  };

  const middleLine = {
    initial: {
      opacity: 1,
    },
    final: {
      opacity: 0,
    },
  };

  const lastLine = {
    initial: {
      rotate: 0,
    },
    final: {
      rotate: -45,
      y: -8,
    },
  };

  return (
    <div className="bg-transparent  w-full  text-gray-500 container-fluid ">
      <div className="flex justify-between items-center h-16 ">
        <h1 className="text-xl md:text-3xl text-black md:mx-32 font-semibold font-sang mx-6">
          Shivam PhotoFarm
        </h1>

        {/* mobile Navbar */}

        <div id="mobile">
          <div onClick={toggleMenu} className="cursor-pointer mx-4">
            <motion.div
              variants={firstLine}
              initial="initial"
              animate={isOpen ? "final" : "initial"}
              className={`h-1 ${isOpen ? "bg-white" : "bg-black"} w-8 m-1 z-50`}
            ></motion.div>
            <motion.div
              variants={middleLine}
              initial="initial"
              animate={isOpen ? "final" : "initial"}
              className={`h-1 ${isOpen ? "bg-white" : "bg-black"} w-8 m-1 z-50`}
            ></motion.div>
            <motion.div
              variants={lastLine}
              initial="initial"
              animate={isOpen ? "final" : "initial"}
              className={`h-1 ${
                isOpen ? "bg-white" : "bg-black"
              } w-8 mx-1 z-50`}
            ></motion.div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="h-screen bottom-[1px] mx-auto w-full  absolute overflow-hidden bg-opacity-70 backdrop-blur-md backdrop-filter"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
            >
              <div className="flex flex-col relative mx-24 h-full justify-center">
                <Link href="/" className="mb-5">
                  <motion.ul
                    initial={{ x: "-70vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                    className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                    onClick={toggleMenu}
                  >
                    Home
                  </motion.ul>
                </Link>
                <div className="mb-5">
                  <div className="flex">
                    <motion.ul
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                      className="md:text-6xl text-white underline underline-offset-8  m-3 font-sang"
                      onClick={handleToggle}
                    >
                      Photography
                    </motion.ul>
                    <motion.div
                      onClick={handleToggle}
                      whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                      className="z-2"
                    >
                      <span className="text-3xl absolute text-white my-2 font-sang">
                        {toggle1 ? "-" : "+"}
                      </span>
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {toggle1 && (
                      <motion.div
                        initial={{ x: "-120vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5"
                      >
                        <Link href="/works/project">
                          <motion.ul
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                              color: "gray",
                            }}
                            className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                            onClick={toggleMenu}
                          >
                            Projects
                          </motion.ul>
                        </Link>
                        <Link href="/works/portraits">
                          <motion.ul
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                              color: "gray",
                            }}
                            className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang z-100"
                            onClick={toggleMenu}
                          >
                            Portraits
                          </motion.ul>
                        </Link>
                        <Link href="/works/travel">
                          <motion.ul
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                              color: "gray",
                            }}
                            className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang z-100"
                            onClick={toggleMenu}
                          >
                            Travel
                          </motion.ul>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="mb-5">
                  <div className="flex">
                    <motion.ul
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                      className="md:text-6xl text-white underline underline-offset-8 z-100  m-3 font-sang"
                      onClick={handleToggle1}
                    >
                      Films
                    </motion.ul>
                    <motion.div
                      onClick={handleToggle1}
                      whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                    >
                      <span className="text-3xl absolute text-white my-2 font-sang">
                        {toggle2 ? "-" : "+"}
                      </span>
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {toggle2 && (
                      <motion.div
                        initial={{ x: "-120vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5"
                      >
                        <Link href="/films">
                          <motion.ul
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                              color: "gray",
                            }}
                            className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                            onClick={toggleMenu}
                          >
                            Projects
                          </motion.ul>
                        </Link>
                        <Link href="/films">
                          <motion.ul
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                              color: "gray",
                            }}
                            className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                            onClick={toggleMenu}
                          >
                            Travel
                          </motion.ul>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link href="/expeditions" className="mb-5">
                  <motion.ul
                    initial={{ x: "-140vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                    className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang "
                    onClick={toggleMenu}
                  >
                    Expeditions
                  </motion.ul>
                </Link>
                <Link href="/about" className="mb-5">
                  <motion.ul
                    initial={{ x: "-180vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                    className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                    onClick={toggleMenu}
                  >
                    About
                  </motion.ul>
                </Link>
                <Link href="/contact" className="mb-5">
                  <motion.ul
                    initial={{ x: "-200vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.9 }}
                    whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                    className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                    onClick={toggleMenu}
                  >
                    Contact
                  </motion.ul>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* desktop Navbar */}
      <div id="desktop" className="py-4 border border-x-0 md:mx-36">
        <div className="md:w-3/4 mx-auto flex justify-center items-center">
          <ul className="flex space-x-6 md:space-x-28 ">
            <motion.div>
              <Link href="/">
                <p className="text-black hover:text-gray-400">Home</p>
              </Link>
            </motion.div>
            <motion.div
              className="flex justify-center z-10"
              onHoverStart={handleToggle}
              onHoverEnd={handleToggle}
            >
              <Link href="">
                <p className="text-black hover:text-gray-400">Photography</p>
              </Link>
              <div
                className={`${
                  toggle1 ? "absolute" : "hidden"
                } text-center py-6 px-20 my-6 bg-white bg-opacity-75`}
              >
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link href="/works/project">
                      <p className="text-black hover:text-gray-400">Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/works/portraits">
                      <p className="text-black hover:text-gray-400">
                        Portraits
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/works/travel">
                      <p className="text-black hover:text-gray-400">Travel</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              onHoverStart={handleToggle1}
              onHoverEnd={handleToggle1}
            >
              <Link href="">
                <p className="text-black hover:text-gray-400">Films</p>
              </Link>
              <div
                className={`${
                  toggle2 ? "absolute" : "hidden"
                } text-center py-6 px-20 my-6 bg-white bg-opacity-75`}
              >
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link href="/films">
                      <p className="text-black hover:text-gray-400">Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <p className="text-black hover:text-gray-400">Travel</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div>
              <Link href="/expeditions">
                <p className="text-black hover:text-gray-400">Expeditions</p>
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/about">
                <p className="text-black hover:text-gray-400">About</p>
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/contact">
                <p className="text-black hover:text-gray-400">Contact</p>
              </Link>
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
